// Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
// Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
// Create a Navigation component that contains links styled like a navbar.
// The links don't have to go anywhere.
// Put the Navigation component at the top of the page and the LoginForm in the center of the page.

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route
                    path="/annual"
                    element={<AnnualReport />}
                />
                <Route path="/team" element={<Teams />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>
    );
}
<div className="Log in">
//         <h1>Welcome</h1>
//         <h3>Log In</h3> 
//         <input type="text" placeholder="Username"></input>
//         <input type="password" placeholder="Password"></input>
//       </div>

export default App;



// original code:
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="Log in">
//         <h1>Welcome</h1>
//         <h3>Log In</h3> 
//         <input type="text" placeholder="Username"></input>
//         <input type="password" placeholder="Password"></input>
//       </div>
//     </div>
//   );
// }

// export default App;


// filename -App.js
