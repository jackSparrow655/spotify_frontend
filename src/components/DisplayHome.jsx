import React, { useContext } from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { PlayerContext } from "../context/PlayerContext";
// import { songsData, albumsData } from "../assets/assets";

const DisplayHome = () => {
    
    const {songsData, albumsData} = useContext(PlayerContext)
    
    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Feature Charts</h1>
                <div className="flex overflow-auto scrollbar-hidden">
                    {albumsData.map((item, index) => (
                        <AlbumItem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            id={item._id}
                            image={item.image}
                            className="object-cover"
                        />
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Todays Biggest Hits</h1>
                <div className="flex overflow-auto scrollbar-hidden object-cover">
                    {songsData.map((item, index) => (
                        <SongItem
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            id={item._id}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DisplayHome;
