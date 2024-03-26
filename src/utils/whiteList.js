
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
  let listbooks = getWhiteList();
  const isExist = listbooks.find((b) => b.Id === book.Id);
  if (isExist) {
    toast.error("Book already bookmarked");
    return;
  }
  listbooks.push(book);
  localStorage.setItem("listbooks", JSON.stringify(listbooks));
  toast.success("Book bookmarked successfully");
};
