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
import ErrorPage from "../ErrorPage/ErrorPage";
import Gallay from "../Gallary/Gallay";
import PricingBook from "../PricingBook/PricingBook";
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainSection></MainSection>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('./Books.json')
        },
        {
            path:"/page to read",
            element:<Rechart></Rechart>,
        },
        {
            path:"/gallary",
            element:<Gallay></Gallay>,
        },
        {
            path:"/pricing",
            element:<PricingBook></PricingBook>
        },
        {
            path:"/book/:bookId",
            element:<BookDetails></BookDetails>,
            loader:()=>fetch('../Books.json')
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

