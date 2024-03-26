import {
    createBrowserRouter,
  } from "react-router-dom";
import MainSection from "../MainSection/MainSection";
import Home from "../Home/Home";
import BookDetails from "../BookDetails/BookDetails";
import ListedBooks from "../ListedBooks/ListedBooks";
import ReadBooks from "../ReadBooks/ReadBooks";
import WhiteList from "../WhiteList/WhiteList";
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
        // {
        //     path:"/book",
        //     element:<BookDetails></BookDetails>,
        //     loader:()=>fetch('/public/Books.json')
        // },
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

