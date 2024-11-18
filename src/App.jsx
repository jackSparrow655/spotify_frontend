import React, { useContext } from "react";
import Home from "./pages/Home";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import NavbarFirst from "./components/NavbarFirst";
import { Route, Router, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthCountext";
import DisplayAlbum from "./components/DisplayAlbum";

const App = () => {
    
    const {isLoggedIn} = useContext(AuthContext)
    
    return (
        <div>
                <div className="w-screen min-h-screen bg-richblack-900 flex-col">
                    <Routes>
                        <Route path="/" element=<Dashboard/>/>
                        <Route path="/login" element=<Login /> />
                        <Route path="/signup" element=<Signup /> />
                        <Route path="/home" element=<Home /> />
                        <Route path="/album/:id" element=<Home /> />
                    </Routes>
                </div>
        </div>
    );
};

export default App;
