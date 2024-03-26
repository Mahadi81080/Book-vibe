import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { image, bookName, author, rating, category, tags, bookId } = book;
  return (
    <Link to={`/book/${bookId}`} className="card  bg-base-100 border-2">
      <figure className="px-10 pt-10 ">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl bg-gray-100 px-24 py-7 h-60"
        />
      </figure>
      <div className="card-body items-start text-center space-y-2">
        <div className="flex text-green-400 gap-6">
          <h2 className="text-sm bg-slate-100 p-1 rounded-full px-2">
            {tags[0]}
          </h2>
          <h2 className="text-sm bg-slate-100 p-1 rounded-full px-2">
            {tags[1]}
          </h2>
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p className="text-base font-medium">By : {author}</p>
        <div className=" flex justify-between items-center gap-40">
          <h2 className="text-sm">{category} :</h2>
          <div className="flex gap-2 items-center">
            <h2>{rating} </h2>
            <span>
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
