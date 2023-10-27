import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import About from "./routes/About";
import WeatherA from "./components/WeatherA";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./routes/Home";
import Contact from "./components/Contact";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Signup1 from "./routes/Signup1";

import Map from "./Map";
import Gym from "./Gym";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/about" element={<About></About>}>
          {" "}
        </Route>
        <Route path="/signup" element={<Signup1></Signup1>}>
          {" "}
        </Route>
        <Route path="/map" element={<Map></Map>}>
          {" "}
        </Route>
        <Route path="/gym/:gymId" element={<Gym />} />

        <Route path="/weather" element={<WeatherA></WeatherA>}>
          {" "}
        </Route>
        <Route path="/contact" element={<Contact></Contact>}>
          {" "}
        </Route>
        <Route path="/page1" element={<Page1></Page1>}>
          {" "}
        </Route>
        <Route path="/page2" element={<Page2></Page2>}>
          {" "}
        </Route>
        <Route path="/page3" element={<Page3></Page3>}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
