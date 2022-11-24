import {useState} from "react";
import FiveDays from "./pages/components/fiveDays";
import Today from "./pages/components/today";
import Wave from "./pages/components/wave";
import "./index.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App flex flex-col items-center">
            <Today />
            <Wave />
            <FiveDays />
        </div>
    );
}

export default App;
