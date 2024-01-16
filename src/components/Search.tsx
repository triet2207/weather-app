import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { WiDegrees } from "react-icons/wi";
import moment from "moment";
import Header from "./Header";
import Footer from "./Footer";
interface ISearchWeather {
  location: {
    name: string;
  };
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        date: string;
      }
    ];
  };
}
const Search = () => {
  const [searchWeather, setSearchWeather] = useState<ISearchWeather | null>(
    null
  );
  const [city, setCity] = useState<string | null>(null);
  const [search, setSearch] = useState<string | null>(null);
  useEffect(() => {
    try {
      const featchData = async () => {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=${city}&days=5&aqi=no&alerts=no&lang=vi`
        );
        setSearchWeather(response.data);
      };
      if (city != null) featchData();
    } catch (error) {
      console.log(error);
    }
  }, [city]);
  const date = [0, 1, 2];
  const currenDate = new Date();

  const time = moment().get("hour");
  return (
    <div className="bg-sky-700 border-solid border-8 relative border-black rounded-3xl w-[300px] h-[600px] overflow-y-auto text-white">
      <div>
        <Header />
      </div>
      <div className="mx-4">
        <div className="py-4 text-xl gap-2">
          {searchWeather && searchWeather.location.name}
        </div>
        <div className="Search flex justify-center items-center mb-5">
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") setCity(search);
            }}
            className="w-[100%] px-2 py-1 rounded mr-[-20px] text-[14px] outline-0 text-slate-900"
            placeholder="Tìm tên thành phố/sân bay"
            required
          />
          <button
            className="py-1 text-slate-600"
            onClick={() => {
              setCity(search);
            }}
          >
            <FaSearch />
          </button>
        </div>
        <div>
          {searchWeather &&
            date.map((x) => {
              return (
                <div key={x} className="bg-sky-800 rounded-xl mb-5 p-3">
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="text-[30px] font-medium mr-[-15px]">
                        {searchWeather &&
                          (time > 5 && time < 18
                            ? searchWeather.forecast.forecastday[
                                x
                              ].day.maxtemp_c.toFixed(0)
                            : searchWeather.forecast.forecastday[
                                x
                              ].day.mintemp_c.toFixed(0))}
                      </div>

                      <div className="text-[50px]">
                        <WiDegrees />
                      </div>
                    </div>
                    <div>
                      {searchWeather && (
                        <img
                          src={
                            searchWeather.forecast.forecastday[x].day.condition
                              .icon
                          }
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[14px]">
                      {currenDate.getDate() + x}/{currenDate.getMonth() + 1}
                    </div>
                    <div className="text-[14px]">
                      {searchWeather &&
                        searchWeather.forecast.forecastday[x].day.condition
                          .text}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Search;
