import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayerContextProvider from "./context/PlayerContext";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./context/AuthCountext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <PlayerContextProvider>
                <App />
                <Toaster />
            </PlayerContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
);
