import {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

  
  
  export const AuthContext = createContext()
  
  const AuthContextProvider =({children}) => {
    
    const url = 'https://spotify-backend-xi.vercel.app/api/v1'
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem("authToken")
        if(token && token !== ""){
            setIsLoggedIn(true)
        }
    }, [])
    
    const submitHandlerSignUp = async(e, formData) => {
        e.preventDefault()
        if(formData.password !== formData.confirmPassword){
            toast.error("password do not match")
            return
        }
        try{
            const response = await axios.post(`${url}/signup`, formData)
            // console.log(res.data.token);
            const token = response.data.token
            localStorage.setItem('authToken', token);
            toast.success(response.data.message)
            window.location.href = '/home';
            // navigate('/home')
            setIsLoggedIn(true)
        } catch(err){
            console.log(err)
            toast.error(err.response.data.message)
        }
    }
    
    const submitHandlerLogin =async(e, formData) => {
        e.preventDefault()
        try{
            const response = await axios.post(`${url}/login`, formData)
            const token = response.data.token
            localStorage.setItem('authToken', token);
            console.log(token)
            toast.success(response.data.message)
            setIsLoggedIn(true)
            window.location.href = '/home';
            // navigate('/home')
        } catch(err){
            toast.error(err.response.data.message)
        }
    }
    
    
    const constextValue = {
        isLoggedIn,
        setIsLoggedIn,
        url,
        submitHandlerSignUp,
        submitHandlerLogin,
        
    }
    
    return <AuthContext.Provider value={constextValue}>
        {children}
    </AuthContext.Provider>
  }
  
  
  export default AuthContextProvider