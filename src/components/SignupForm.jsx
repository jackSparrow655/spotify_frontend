import React, { useContext, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { AuthContext } from '../context/AuthCountext'


const SignupForm = () => {
    
    const {submitHandlerSignUp} = useContext(AuthContext)
    
    const [formData, setFormData] = useState({
        // role:"",
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    
    

    function changeHandler(e){
        setFormData((prevData) => {
            return{
                ...prevData,
                // [e.target.name]: (e.target.name === "role")? e.target.innerHTML : e.target.value
                [e.target.name]: e.target.value
            }
        })
    }
    
    

    
    // const [role, setRole] = useState("Student")
    
    
    
    const [showPassword, setShowPassword] = useState(false)
    
    
  return (
    <div>
    
    {/* student-Instructor-tag */}
    {/* <div className='flex flex-row gap-2 rounded-full bg-richblack-600 items-center mt-5 w-fit px-2 py-1'>
        <button name='role' onClick={(e) => {
            setRole("Student")
            console.log(e)
            changeHandler(e)}
            
        } className={role === "Student" ? (`bg-richblack-900 rounded-full px-6 py-2 text-white font-semibold`):(`rounded-full px-6 py-2 text-richblack-200 font-semibold`)}>Student</button>
        <button name='role' onClick={(e) => {
            setRole("Instructor")
            console.log(e)
            changeHandler(e)
        }} className={role === "Instructor" ? (`bg-richblack-900 rounded-full px-6 py-2 text-white font-semibold`):(`rounded-full px-6 py-2 text-richblack-200 font-semibold`)}>Instructor</button>
    </div> */}
    <form className='flex flex-col w-full gap-y-4 mt-5' onSubmit={(e) => {
        submitHandlerSignUp(e, formData)
    }} >
    {/* //firstname and lastname div */}
        <label className='w-full'>
                <p className='text-[1.275rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type="text"
                    name='name'
                    onChange={changeHandler}
                    placeholder='enter your name'
                    value={formData.name}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblue-5 w-full p-[12px] border-b border-b-1'
                />
        </label>
       <label className='w-full'>
                <p className='text-[1.275rem] text-richblack-5 mb-1 leading-[1.375rem]'>email <sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type="email"
                    name='email'
                    onChange={changeHandler}
                    placeholder='enter email'
                    value={formData.email}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblue-5 w-full p-[12px] border-b border-b-1'
                />
        </label>
        
        <div className='flex flex-row gap-4'>
        <label className='w-full relative'>
                <p className='text-[1.275rem] text-richblack-5 mb-1 leading-[1.375rem]'>create password <sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='enter password'
                    value={formData.password}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblue-5 w-full p-[12px] border-b border-b-1'
                />
                <span className='absolute right-3 top-[40px] cursor-pointer' onClick={() => {
                    setShowPassword((prev) => !prev)
                }}>
                    {showPassword?
                        
                    (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>):
                        
                    (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>)}
                </span>
        </label>
        <label className='w-full relative'>
                <p className='text-[1.275rem] text-richblack-5 mb-1 leading-[1.375rem]'>confirm password <sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    onChange={changeHandler}
                    name='confirmPassword'
                    placeholder='confirm password'
                    value={formData.confirmPassword}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblue-5 w-full p-[12px] border-b border-b-1'
                />
                <span  className='absolute right-3 bottom-[10px] cursor-pointer' onClick={() => {
                    setShowPassword((prev) => !prev)
                }}>
                    {showPassword?
                        
                    (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>):
                        
                    (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>)}
                </span>
        </label>
       </div>
       
       <button className='w-full text-center bg-yellow-50 py-2 font-medium rounded-md transition-all duration-200 hover:scale-95 mt-5'>Sign Up</button>
       
    </form>
      
    </div>
  )
}

export default SignupForm
