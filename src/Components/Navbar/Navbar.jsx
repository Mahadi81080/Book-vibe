import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                  : "font-bold px-3 py-1"
              }
            >
              <a>Home</a>
            </NavLink>
            <NavLink
              to="/list"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                  : "font-bold px-3 py-1"
              }
            >
              <a>Listed Books</a>
            </NavLink>
            <NavLink
              to="/page to read"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                  : "font-bold px-3 py-1"
              }
            >
              <a>Pages to Read</a>
            </NavLink>
            <NavLink
              to="/gallary"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                  : "font-bold px-3 py-1"
              }
            >
              <a>Gallary</a>
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                  : "font-bold px-3 py-1"
              }
            >
              <a>Pricing Book</a>
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-lg lg:text-2xl font-semibold">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                : "font-bold px-3 py-1"
            }
          >
            <a>Home</a>
          </NavLink>
          <NavLink
            to="/list"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                : "font-bold px-3 py-1"
            }
          >
            <a>Listed Books</a>
          </NavLink>
          <NavLink
            to="/page to read"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                : "font-bold px-3 py-1"
            }
          >
            <a>Pages to Read</a>
          </NavLink>
          <NavLink
            to="/gallary"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                : "font-bold px-3 py-1"
            }
          >
            <a>Gallary</a>
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-bold border border-green-400 px-3 py-1 rounded-md"
                : "font-bold px-3 py-1"
            }
          >
            <a>Pricing Book</a>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex lg:gap-4">
        <a className="btn bg-[#23be0a]">Sing In</a>
        <a className="btn bg-[#59c6d2]">Sing Up</a>
      </div>
    </div>
  );
};

export default Navbar;
