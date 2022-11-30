import {useState} from "react";
import FiveDays from "./components/fiveDays";
import Today from "./components/today";

function Home({weatherData}) {
    console.log(weatherData);
    return (
        <div className="App flex flex-col items-center">
            <Today />
            <FiveDays />
        </div>
    );
}

export default Home;
