import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  let storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.Id === book.Id);
  if (isExist) {
    toast.error("Book already bookmarked");
    return;
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Book bookmarked successfully");
};
