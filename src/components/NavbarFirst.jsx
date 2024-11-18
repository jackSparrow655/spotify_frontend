import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/spotify_logo.png'
import toast from 'react-hot-toast'
import axios from 'axios'
import { AuthContext } from '../context/AuthCountext'

const Navbar = () => {
    
    const {isLoggedIn, setIsLoggedIn, url} = useContext(AuthContext)
    
    // const url = `http://localhost:4000/api/v1`
    
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
      <div className='w-11/12 flex justify-evenly py-3 items-center'>
          <Link to='/'>
              <img src={logo} alt="logo" className='w-[160px] h-[32px]' />
          </Link>

          <nav>
              <ul className='flex flex-row gap-5 text-richblack-100 gap-x-6'>
                  <li><Link to='/'>Home</Link></li>
                  {
                    isLoggedIn && <li><Link to='/home'>Song</Link></li>
                  }
                  
                  <li><Link to='/contact'>Contact</Link></li>
              </ul>
          </nav>
      
          <div className='flex flex-row gap-x-4 items-center'>
              { !isLoggedIn &&
                  <Link to='/login'>
                      <button className='bg-richblack-800 text-richblack-100  text-center px-3 py-2 rounded-md transition-all duration-200 hover:scale-90 border border-richblack-700'>Login</button>
                  </Link>
              }
              { !isLoggedIn &&
                  <Link to='/signup'>
                      <button className='bg-richblack-800 text-richblack-100  text-center px-3 py-2 rounded-md transition-all duration-200 hover:scale-90 border border-richblack-700'>Sign up</button>
                  </Link>
              }
              { isLoggedIn &&
                  <Link to='/'>
                      <button className='bg-richblack-800 text-richblack-100  text-center px-3 py-2 rounded-md transition-all duration-200 hover:scale-90 border border-richblack-700' onClick={logOutController}>Logout</button>
                  </Link>
              }
              { isLoggedIn &&
                  <Link to='/dashboard'>
                      <button className='bg-richblack-800 text-richblack-100  text-center px-3 py-2 rounded-md transition-all duration-200 hover:scale-90 border border-richblack-700'>Dashboard</button>
                  </Link>
              }
          </div>
          
          
          
    </div>
  )
}

export default Navbar
