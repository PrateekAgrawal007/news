import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import FetchData from "./Components/FetchData";
import Footer from "./Components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/general"
            element={<FetchData cat="general" />} //using prop basically
          />
          <Route
            path="/business"
            element={<FetchData cat="business" />} //using prop basically
          />
          <Route
            path="/entertainment"
            element={<FetchData cat="entertainment" />} //using prop basically
          />
          <Route
            path="/health"
            element={<FetchData cat="health" />} //using prop basically
          />
          <Route
            path="/science"
            element={<FetchData cat="science" />} //using prop basically
          />
          <Route
            path="/sports"
            element={<FetchData cat="sports" />} //using prop basically
          />
          <Route
            path="/technology"
            element={<FetchData cat="technology" />} //using prop basically
          />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;

// THINGS USED:
// used rafce
// npm install react-router-dom axios
// For reference : https://reactrouter.com/en/main
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Using props to decide FetchData (see in router syntax)  --> cat="general" and many more.... so yeh outer component ,inner component se data khicyega ,yeh hum krege props se
// useEffect Also used : jab bhi page refresh hoga tab useEffect call ho jayega ,yeh yaha constructor ka kaam kr raha hai
// useState used
// using of map (to iterate array)
// in img tag used target="blank" (so that source url open in new tab)
// Video link : https://www.youtube.com/watch?v=9_8cjFGFSQA
