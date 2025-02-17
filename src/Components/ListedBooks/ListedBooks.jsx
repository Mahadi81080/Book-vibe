import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="bg-gray-200 py-3 text-center rounded-lg mt-3">
        <h3 className="font-semibold text-3xl">Books</h3>
      </div>
      <div className="text-center mt-4">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-500">
            Short By <FaChevronDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li >
              <a onClick={() => handleBookFilter('rating')}>rating</a>
            </li>
            <li >
              <a onClick={() => handleBookFilter('pages')}>Number of Pages</a>
            </li>
            <li>
              <a onClick={() => handleBookFilter('yearOfPublishing')}>Published year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* tabs */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100 dark:text-gray-800 mt-10">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-50 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to={`whitelist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-50 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Whishlist Books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
