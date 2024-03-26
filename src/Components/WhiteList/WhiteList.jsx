import { useEffect, useState } from "react";
import { getWhiteList } from "../../utils/whiteList";
import ReadBook from "../ReadBook/ReadBook";

 

const WhiteList = () => {
    const [whiteList, setWhiteList] = useState([]);
    useEffect(() => {
      const storedBooks = getWhiteList();
      setWhiteList(storedBooks);
    }, []);
    return (
        <div>
             {whiteList.map((book) => (
        <ReadBook key={book.id} book={book}></ReadBook>
      ))}
        </div>
    );
};

export default WhiteList;