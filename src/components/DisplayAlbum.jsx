import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
// import { albumsData, assets, songsData } from '../assets/assets'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
    const {id} = useParams()
    // const albumData = albumsData[id]
    const [albumData, setAlbumData] = useState("")
    const {playWithId, albumsData, songsData} = useContext(PlayerContext)
    
    useEffect(() =>{
        albumsData.map((item) =>{
            if(item._id === id){
                setAlbumData(item)
            }
        })
    }, [])
    
    let updateData = songsData.filter((song) => {
        if(song.album == albumData.name){
            return song
        }
    })
    
    
  return (
    <>
    <Navbar/>
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end text-white'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p>PlayList</p>
            <h2 className='text-5xl font-bold mb-4 md:text-[7xl]'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block h-10 w-16 rounded-md' src={assets.spotify_logo}/>
                <b className='px-5'>ArijitGuiter</b>
                ·1,323,154 likes
                ·<b>50 songs,</b>
                about 2hours 30 mins
            </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
      <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>        
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} />
      </div>
      <hr />
      {
        updateData.map((item, index)=>(
            <div onClick={() => playWithId(item._id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt="" />
                    <span className='hidden lg:inline-block'>{item.name.slice(0,17)}</span>
                </p>
                <p className='text-[15px]'>{albumData.name}</p>
                <p className=' hidden sm:block'>5 days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
