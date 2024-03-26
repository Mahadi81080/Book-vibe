import { useEffect, useState } from "react";
import { getBooks } from "../../utils";

import ReadBook from "../ReadBook/ReadBook";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);
  return (
    <div className="">
      {books.map((book) => (
        <ReadBook key={book.id} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
