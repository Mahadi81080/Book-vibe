import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-base-200 rounded-xl mt-5 p-5">
      <div className="hero-content flex-col lg:flex-row-reverse gap-28">
        <img
          src="https://i.postimg.cc/x1r58kcC/pngwing-1.png"
          className="lg:max-w-sm rounded-lg"
        />
        <div className="space-y-8">
          <h1 className="text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
          <Link to='/list' className="btn bg-[#23be0a] text-white">View The List</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
