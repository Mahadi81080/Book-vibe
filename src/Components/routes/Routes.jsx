import {
    createBrowserRouter,
  } from "react-router-dom";
import MainSection from "../MainSection/MainSection";
import Home from "../Home/Home";
import BookDetails from "../BookDetails/BookDetails";
import ListedBooks from "../ListedBooks/ListedBooks";
import ReadBooks from "../ReadBooks/ReadBooks";
import WhiteList from "../WhiteList/WhiteList";
import Rechart from "../Rechart/Rechart";
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainSection></MainSection>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/public/Books.json')
        },
        {
            path:"/page to read",
            element:<Rechart></Rechart>,
        },
        {
            path:"/book/:bookId",
            element:<BookDetails></BookDetails>,
            loader:()=>fetch('../public/Books.json')
        },
        {
          path:'/list',
          element:<ListedBooks></ListedBooks>,
          children:[
            {
              index:true,
              element:<ReadBooks></ReadBooks>
            },
            {
              path:"whitelist",
              element:<WhiteList></WhiteList>
            },
          ]
        },
        
      ]
    },
  ]);

