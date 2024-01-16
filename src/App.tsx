import CurrenWeather from "./components/CurrenWeather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import FiveDayWeather from "./components/FivedayWeather";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-sky-200 ">
      <BrowserRouter>
        <Routes>
          <Route index element={<CurrenWeather />} />
          <Route path="/WeatherApp" element={<CurrenWeather />} />
          <Route path="/WeatherApp/fiveday" element={<FiveDayWeather />} />
          <Route path="/WeatherApp/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
