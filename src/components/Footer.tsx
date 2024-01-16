import { FaHome, FaList, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between text-2xl flex-1 p-2 ">
      <Link
        to={"/WeatherApp/search"}
        className="w-8 h-8 flex justify-center items-center hover:bg-sky-800 cursor-pointer rounded-full"
      >
        <FaSearch />
      </Link>
      <Link
        to={"/WeatherApp/"}
        className="w-8 h-8 flex justify-center items-center hover:bg-sky-800 cursor-pointer rounded-full"
      >
        <FaHome />
      </Link>
      <Link
        to={"/WeatherApp/fiveday"}
        className="w-8 h-8 flex justify-center items-center hover:bg-sky-800 cursor-pointer rounded-full"
      >
        <FaList />
      </Link>
    </div>
  );
};

export default Footer;
