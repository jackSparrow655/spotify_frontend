import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image, name, desc, id}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] max-w-[200px] px-2 rounded cursor-pointer hover:bg-[#ffffff26] min-h-[200px] max-h-[300px]'>
      <img className='rounded h-[80%] w-full' src={image}/>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem
