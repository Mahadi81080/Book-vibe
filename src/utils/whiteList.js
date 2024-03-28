import toast from "react-hot-toast";

export const getWhiteList = () => {
  let listbooks = [];
  let storedBooks = localStorage.getItem("listbooks");
  if (storedBooks) {
    listbooks = JSON.parse(storedBooks);
  }
  return listbooks;
};

export const saveWhiteList = (book) => {

  let listbooks =getWhiteList()
  const isExist = listbooks.find((b) => b.bookId === book.bookId);
  if (isExist) {
    toast.error("Book already added to readlist");
    return;
  }
  listbooks.push(book);
  localStorage.setItem("listbooks", JSON.stringify(listbooks));
  toast.success("Book added to wishlist successfully");
};