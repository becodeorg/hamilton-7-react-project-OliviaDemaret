import {useState} from "react";
import FiveDays from "./components/fiveDays";
import Today from "./components/today";
import Wave from "./components/wave";

function Home({weatherData}) {
    console.log(weatherData);
    return (
        <div className="App flex flex-col items-center">
            <Today />
            <Wave />
            <FiveDays />
        </div>
    );
}

export default Home;
