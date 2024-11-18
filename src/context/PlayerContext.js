import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";
// import { songsData } from "../assets/assets";



export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {
    
    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()
     
    const url = 'https://spotify-backend-beta-ten.vercel.app'
    // const url = 'http://localhost:4000'
    
    const [songsData, setSongsData] = useState([])
    const [albumsData, setAlbumsData] = useState([])
    
    const token = localStorage.getItem('authToken');
    
    const getSongData = async() => {
        try{
            const response = await axios.get(`${url}/api/v1/list`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
            setSongsData(response.data.songList)
            setTrack(response.data.songList[0])
        } catch(err){
            console.log(err)
        }
    }
    
    const getAlbumData = async() => {
        try{
            const response = await axios.get(`${url}/api/v1/getalbum`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
            setAlbumsData(response.data.album)
        } catch(err){
            console.log(err)
        }
    }
    
    const location = useLocation()
    // useEffect(() => {
    //     if (location.pathname === '/home') {
    //       window.location.reload(); // Reload when this route is reached
    //     }
    //   }, [location]);
    
    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(true)
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })
    
    const play = () => {
        setPlayStatus(true)
        audioRef.current.play()
    }
    
    const pause = () => {
        setPlayStatus(false)
        audioRef.current.pause()
    }
    
    const playWithId = async(id) => {
        
        songsData.map((item, index) => {
            if(id === item._id){
                setTrack(item)
                setSongIndex(index)
            }
        })
        
        await audioRef.current.play()
        setPlayStatus(true)
        
        
    }
    const previous = async() => {
        songsData.map(async(item, index)=>{
            if(track._id === item._id && index > 0){
                await setTrack(songsData[index-1]);
                await audioRef.current.play()
                setPlayStatus(true)
                setSongIndex(index-1)
            }
        })
    } 
    const next = async() => {
        songsData.map(async(item, index)=>{
            if(track._id === item._id){
                if(index < songsData.length-1){
                    await setTrack(songsData[index+1]);
                    await audioRef.current.play()
                    setPlayStatus(true)
                    setSongIndex(index+1)
                }
                else if(index === songsData.length-1){
                    setTrack(songsData[0]);
                    await audioRef.current.play()
                    setPlayStatus(true)
                    setSongIndex(0)
                }
            }
        })
    }
    
    const seekSong = async(e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*(audioRef.current.duration))
    }
    
    useEffect(() => {
        setTimeout(()=>{
           audioRef.current.ontimeupdate = () => {
            seekBar.current.style.width = (Math.floor((audioRef.current.currentTime/audioRef.current.duration)*100))+"%"
            setTime({
                currentTime:{
                    second:Math.floor(audioRef.current.currentTime % 60),
                    minute:Math.floor(audioRef.current.currentTime / 60)
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration % 60),
                    minute:Math.floor(audioRef.current.duration / 60)
                }
            })
           }
        }, 1000)
    },[audioRef])
    
    useEffect(() => {
        getAlbumData()
        getSongData();
    },[])
    
    
    const [songIndex, setSongIndex] = useState(0);
    const autoPlayNext = async() => {
        await next()
    }
    
    
    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
        songsData,
        albumsData,
        autoPlayNext,
    }
    return <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
}

export default PlayerContextProvider