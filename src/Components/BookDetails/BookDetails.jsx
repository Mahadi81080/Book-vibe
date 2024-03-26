import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../../utils";
import { saveWhiteList } from "../../utils/whiteList";

const BookDetails = () => {
  const bookDetails = useLoaderData();

  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = bookDetails.find((book) => book.bookId === bookIdInt);
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
  } = book;
  const handleBookMark = (book) => {
    saveBook(book)
  };
  const handleWhiteList =book=>{
    saveWhiteList(book)
  }
  return (
    <section className=" dark:text-gray-800 mt-7">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
        >
          <img
            src={image}
            alt=""
            className="object-cover h-80 rounded sm:h-96 lg:col-span-7 dark:bg-gray-100 p-16"
          />
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline pb-2">
              {bookName}
            </h3>
            <span className="text-base font-medium dark:text-gray-600">
              By : {author}
            </span>
            <p className="border-y-2 py-2">{category}</p>
            <p>
              <span className="text-lg font-semibold">Review :</span> {review}
            </p>
            <div className="flex text-green-400 gap-6 border-b-2 pb-4">
              <h3 className="text-lg font-semibold text-black">Tag </h3>
              <h2 className="text-sm bg-slate-100 p-1 rounded-full px-2">
                {tags[0]}
              </h2>
              <h2 className="text-sm bg-slate-100 p-1 rounded-full px-2">
                {tags[1]}
              </h2>
            </div>
            <div className="flex  justify-between">
              <div className="text-base font-normal space-y-2">
                <p>Name of page:</p>
                <p>Publisher:</p>
                <p>Year of Publishing:</p>
                <p>Rating:</p>
              </div>
              <div className="text-base font-semibold space-y-2">
                <h3>{totalPages}</h3>
                <h3>{publisher}</h3>
                <h3>{yearOfPublishing}</h3>
                <h3>{rating}</h3>
              </div>
            </div>
            <div className="flex gap-4 mt-3">
              <a onClick={() => handleBookMark(book)} className="btn btn-outline">Read</a>
              <a onClick={() => handleWhiteList(book)} className="btn bg-[#59c6d2] text-white">Whitelist</a>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default BookDetails;
