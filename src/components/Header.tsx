import { FaBatteryFull, FaSignal, FaWifi } from "react-icons/fa";
const Header = () => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  return (
    <div>
      <div className=" p-2">
        <div className=" flex justify-between px-3">
          <div>{time}</div>
          <div className=" flex gap-1">
            <FaWifi />
            <FaSignal />
            <FaBatteryFull />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
