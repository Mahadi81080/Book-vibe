import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const ReadBook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    totalPages,
    category,
    tags,
    review,
    publisher,
    yearOfPublishing,
    rating,
    bookId,
  } = book;
  return (
    <div>
      <section className=" dark:text-gray-800 border-2 rounded-lg my-4">
        <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-3 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-50 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="lg:flex-1 space-y-3">
            <h1 className=" text-2xl lg:text-5xl font-bold"> {bookName}</h1>
            <p className="py-6">By : {author}</p>
            <div className="flex flex-col lg:flex-row text-green-400 gap-6">
              <h3 className="text-lg font-semibold text-black inline-block">Tag </h3>
              <div className="flex gap-3">
                <h2 className="text-sm bg-slate-100 p-1 rounded-full text-center w-1/3 lg:w-auto px-2">
                  {tags[0]}
                </h2>
                <h2 className="text-sm bg-slate-100 p-1 rounded-full text-center px-2 w-1/3 lg:w-auto">
                  {tags[1]}
                </h2>
              </div>
              <div className="flex gap-2 justify-center items-center text-black">
                <CiLocationOn />
                <p>Year of Publishing:</p>
                <h3>{yearOfPublishing}</h3>
              </div>
            </div>
            <div className="flex items-center gap-8 border-b-2 py-4">
              <div className="flex justify-center items-center gap-2">
                <FaUserGroup />
                <p>Publisher:</p>
                <h3>{publisher}</h3>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MdOutlineContactPage />
                <h3>Page</h3>
                <h3>{totalPages}</h3>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="bg-[#e0eeff] text-xs text-blue-400 rounded-full p-2">
                <h3>Category:{category}</h3>
              </div>
              <div className="text-xs bg-orange-100 text-orange-400 rounded-full p-2">
                <h3>Rating:{rating}</h3>
              </div>
              <Link
                to={`/book/${bookId}`}
                className="text-xs p-2 bg-green-600 text-white rounded-full"
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadBook;
