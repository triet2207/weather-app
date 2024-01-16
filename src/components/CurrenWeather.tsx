import { useEffect, useState } from "react";

import axios from "axios";
import Weather4hours from "./Weather4hours";
import Header from "./Header";
import Footer from "./Footer";

interface ICurrenweather {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
const CurrenWeather = () => {
  const [currenWeather, setCurrenWeather] = useState<ICurrenweather | null>(
    null
  );

  useEffect(() => {
    try {
      const featchData = async () => {
        const response = await axios.get(
          " https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Đà Nẵng&days=1&aqi=no&alerts=no&lang=vi"
        );
        setCurrenWeather(response.data);
      };
      featchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="">
        <div className="bg-sky-700 border-solid border-8 relative border-black rounded-3xl w-[300px] h-[600px] overflow-y-auto text-white ">
          <div>
            <Header />
          </div>
          <div className=" text-center mt-10 ">
            <div className=" text-[22px]">
              {currenWeather && currenWeather.location.name}
            </div>
            <div className="text-[56px]">
              {(currenWeather && currenWeather.current.temp_c)?.toFixed(0)}℃
            </div>
            <div className="italic">
              {currenWeather && currenWeather.current.condition.text}
            </div>
            <p className="inline-block">
              {currenWeather && (
                <img src={currenWeather.current.condition.icon} alt="" />
              )}
            </p>
          </div>
          <Weather4hours />
          <div className="absolute bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrenWeather;
