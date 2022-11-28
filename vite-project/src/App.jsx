import {useState} from "react";
import Home from "./pages/home";
import EnterCity from "./pages/enterACity";
import "./index.css";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <ul className="flex flex-row gap-8 justify-center items-center my-8">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Enter A City</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<EnterCity />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
