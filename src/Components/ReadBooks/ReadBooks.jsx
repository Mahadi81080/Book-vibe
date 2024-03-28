import { useEffect, useState } from "react";
import { getBooks } from "../../utils";

import ReadBook from "../ReadBook/ReadBook";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
    setDisplayBooks(storedBooks);
  }, []);
  const handleBookFilter = (filter) => {
    if (filter === 'rating') {
      const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
      setDisplayBooks(sortedBooks);
    } else if (filter === 'pages') {
      const sortedBooks = [...books].sort((a, b) => a.pages - b.pages);
      setDisplayBooks(sortedBooks);
    } else if (filter === 'yearOfPublishing') {
      const sortedBooks = [...books].sort((a, b) => new Date(a.yearOfPublishing) - new Date(b.yearOfPublishing));
      setDisplayBooks(sortedBooks);
    }
  };
 
  return (
    <div>
      {displayBooks.map((book) => (
        <ReadBook key={book.id} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
