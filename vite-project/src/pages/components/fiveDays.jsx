import {useState} from "react";
import Wave from "./wave";

function FiveDays() {
    const [image, setImage] = useState(() => {
        return JSON.parse(localStorage.getItem("LSKEY-ImageApp")) || "";
    });
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem("LSKEY-WeatherApp")) || [];
    });
    console.log(data);
    console.log(image);
    return (
        <div className="weatherDays flex flex-col w-full justify-center mt-2 mb-2 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500">
            <img src={image} />
            <Wave />
            <ul>
                {data &&
                    data.map((day, index) => (
                        <li key={index}>
                            <h2>{day.main.temp}</h2>
                            <p>{day.weather[0].description}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default FiveDays;
