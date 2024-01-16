import axios from "axios";
import { useEffect, useState } from "react";
import { WiDegrees } from "react-icons/wi";
import moment from "moment";
interface IHourweather {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
  forecast: {
    forecastday: [
      {
        hour: [
          {
            temp_c: number;
            condition: {
              icon: string;
            };
          }
        ];
      }
    ];
  };
}
const Weather4hours = () => {
  const [hourWeather, setHourWeather] = useState<IHourweather | null>(null);
  useEffect(() => {
    try {
      const featchData = async () => {
        const response = await axios.get(
          " https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Danang&days=1&aqi=no&alerts=no&lang=vi"
        );

        setHourWeather(response.data);
      };
      featchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const time = moment().hour();
  const data = [time + 1, time + 2, time + 3, time + 4];
  return (
    <div className="min-w-full mt-10 bg-gradient-to-b from-sky-800 rounded-t-[30px] text-center text-white">
      <p className="">Dự báo hàng giờ</p>
      <hr />
      <div className="flex gap-4 p-2 ">
        {data.map((h) => {
          return (
            <div
              key={h}
              className="bg-sky-950 bg-opacity-50 p-2 mt-2  text-sm rounded-xl text-center"
            >
              <p>{h}H</p>
              <div>
                {hourWeather && (
                  <img
                    src={
                      hourWeather.forecast.forecastday[0].hour[h].condition.icon
                    }
                    width={50}
                    height={50}
                    alt=""
                  />
                )}
              </div>
              <div className="flex pt-2">
                <div className="pl-2">
                  {" "}
                  {hourWeather &&
                    hourWeather.forecast.forecastday[0].hour[h].temp_c.toFixed(
                      0
                    )}
                </div>

                <div className="text-[25px] ml-[-10px]">
                  <WiDegrees />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather4hours;
