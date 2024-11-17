import React, { useContext, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthCountext'

const LoginForm = ({setIsLoggedIn}) => {
    const {submitHandlerLogin} = useContext(AuthContext)
    
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    
    function changeHandler(e) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }
    
    const [showPassword, setShowPassword] = useState(false)
    
    
  return (
    <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={(e) => {
        submitHandlerLogin(e, formData)
    }} >
        <label className='w-full'>
           <p className='text-[1.275rem] text-richblack-5 mb-1 leading-[1.375rem]'>
           Email Address <sup className='text-pink-200'>*</sup>
           </p>
           <input required
            type="email"
            value= {formData.email}
            name="email"
            onChange={(e) => changeHandler(e)}
            placeholder='Enter your email'
            className='bg-richblack-800 rounded-[0.5rem] text-richblue-5 w-full p-[12px] border-b border-b-1'
             />
        </label>
        
        <label className='w-full relative'>
           <p className='text-[1.275rem] text-richblack-5 mb-1 leading-[1.375rem] '>
           Password <sup className='text-pink-200'>*</sup>
           </p>
           <input required
            type={showPassword ? "text" : "password"}
            value= {formData.password}
            name="password"
            onChange={(e) => changeHandler(e)}
            placeholder='enter you password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblue-5 w-full p-[12px] border-b border-b-1'
             />
             
             <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => {
                setShowPassword((prev) => !prev)
             }}>
                {showPassword? 
                    
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):
                    
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
             </span>
             
             <Link to='#'>
                {/* <P className='text-xs mt-1 text-blue-100'>Forgot Password</P> */}
                <p className='text-xs mt-1 text-blue-100 w-full max-w-max ml-auto'>Forgot Password</p>
             </Link>
        </label>
        
        <button className='w-full text-center bg-yellow-50 py-2 font-medium rounded-md transition-all duration-200 hover:scale-95 mt-5'>log In</button>
        
    </form>
  )
}

export default LoginForm
