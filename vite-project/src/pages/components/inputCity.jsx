import React from "react";
import {useState} from "react";
import Today from "./today";

function InputCity() {
    const [City, setCity] = useState("");
    const [weatherData, SetWeatherData] = useState([]);
    const [cityImage, setCityImage] = useState("");
    const getWeather = (event) => {
        const weatherKey = "7cdb2da670a898001f3a2349b387802d";
        const unsplashKey = "t26Ea15HOjQ0Az4CT6WDI606QUdIa9Ad18bmr1XenjA";
        if (event.key == "Enter") {
            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${City}&units=metric&APPID=${weatherKey}`,
            )
                .then((response) => response.json())
                .then((data) => {
                    setCity("");
                    for (let i = 0; i < data.list.length; i += 8) {
                        SetWeatherData((weatherData) => [
                            ...weatherData,
                            data.list[i],
                        ]);
                    }
                });
            fetch(
                `https://api.unsplash.com/search/photos?query=${City}&per_page=20&client_id=${unsplashKey}`,
            )
                .then((response) => response.json())
                .then((data) => {
                    setCityImage(data.results[0].urls.full);
                });
        }
    };
    return (
        <div>
            {" "}
            <input
                className="input m-0 p-0"
                placeholder="Enter a city..."
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={getWeather}
                value={City}
            />
            {weatherData.length === 0 ? (
                <p>Please Enter a city</p>
            ) : (
                <Today weatherData={weatherData} cityImage={cityImage} />
            )}
        </div>
    );
}
export default InputCity;
