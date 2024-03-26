import toast from "react-hot-toast";

export const getWhiteList = () => {
  let listbooks = [];
  let storedBooks = localStorage.getItem("books");
  console.log(storedBooks);
  if (storedBooks) {
    listbooks = JSON.parse(storedBooks);
  }
  return listbooks;
};

export const saveWhiteList = (book) => {
  const storedBooks = localStorage.getItem("books");
  console.log(storedBooks);
  if (storedBooks) {
    toast.error("Books already added in readlist.");
    return;
  }
  
  let listbooks = getWhiteList();
  const isExist = listbooks.find((b) => b.bookId === book.bookId);
  if (!isExist) {
    listbooks.push(book);
    localStorage.setItem("listbooks", JSON.stringify(listbooks));
    toast.success("Book added to wishlist successfully");
  }
};


