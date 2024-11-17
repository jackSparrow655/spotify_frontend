import React, { useContext } from "react";
import {assets}  from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthCountext.js";
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast";

const Sidebar = () => {
    const navigate = useNavigate()
    const {isLoggedIn, url, setIsLoggedIn,} = useContext(AuthContext)
    
    const logOutController = async() => {
        try{
            const response = await axios.get(`${url}/logout`)
            localStorage.removeItem('authToken')
            setIsLoggedIn(false)
            toast.success(response.data.message)
        } catch(err){
            toast.error()
        }
    }
    
    
    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around relative">
                <div onClick={() => navigate('/home')} className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.home_icon} />
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img className="w-6" src={assets.search_icon} />
                    <p className="font-bold">Search</p>
                </div>
                <div className="absolute right-5">
                { isLoggedIn &&
                  <Link to='/'>
                      <button className='bg-richblack-800 text-richblack-100  text-center px-3 py-2 rounded-md transition-all duration-200 hover:scale-90 border border-richblack-700' onClick={logOutController}>Logout</button>
                  </Link>
              }
                </div>
            </div>
            <div className="bg-[#121212] h-[85%] rounded">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className="w-8" src={assets.stack_icon}/>
                        <p className="font-semibold">Your Librery</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-5" src={assets.arrow_icon}/>
                        <img className="w-5" src={assets.plus_icon}/>
                    </div>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Create Your first Playlist</h1>
                    <p className="font-light">It's easy we will help you</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
                </div>
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Let's Find Some podcast to follow</h1>
                    <p className="font-light">we will keep you update on new episode</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">browse podcast</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
