import React from "react";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Today from "./today";
function InputCity() {
    const apiKey = "7cdb2da670a898001f3a2349b387802d";
    const [weatherData, SetWeatherData] = useState([{}]);
    const [City, setCity] = useState("");
    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&APPID=${apiKey}`,
            )
                .then((response) => response.json())
                .then((data) => {
                    SetWeatherData(data);
                    setCity("");
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
            {typeof weatherData.main === "undefined" ? (
                <p>Please Enter a city</p>
            ) : (
                <Today weatherData={weatherData} />
            )}
        </div>
    );
}
export default InputCity;
