import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Display from "../components/Display";
import { PlayerContext } from "../context/PlayerContext";
// import { Outlet } from "react-router-dom";
// import { songsData } from "./assets/assets";

const Home = () => {
    const { audioRef, track, songsData, autoPlayNext} = useContext(PlayerContext);

    return (
        <div className="h-screen bg-black">
            {songsData.length !== 0 ? (
                <>
                    <div className="h-[90%] flex ">
                        <Sidebar />
                        <Display />
                    </div>
                    <Player />
                </>
            ) : null}
            <audio ref={audioRef} src={track? track.file:""} preload="auto" autoPlay onEnded={autoPlayNext}></audio>
        </div>
    );
};

export default Home;
