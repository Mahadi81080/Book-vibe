
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
  const allBook = useLoaderData();
  console.log(allBook);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-8">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {
            allBook.map(book=> <Book key={book.id} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
