import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({ title, des1, des2, image, formType}) => {
  return (
    <div className='w-11/12 max-w-[1160px] py-16 mx-auto flex justify-between items-center'>
          <div className='w-11/12 max-w-[450px]'>
              <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
              <p className='text-[1.125rem] leading-[1.625rem]'>
                  <span className='text-richblack-100'>{des1}</span> <br />
                  <span className='text-richblue-200 italic'>{des2}</span>
              </p>
              {
                  formType === 'signup' ? 
                  (<SignupForm />) :
                  (<LoginForm/>)
              }
              <div className='flex flex-row items-center w-full my-4 gap-x-2'>
                  <div className='h-[1px] w-[45%] bg-richblack-600'></div>
                  <div className='text-richblack-500'>or</div>
                  <div className='h-[1px] w-[45%] bg-richblack-600'></div>
              </div>

              <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-100 px-12 py-2 gap-x-2 mt-6'>
                  <FcGoogle/>
                  <p>Sign Up with goggle</p>
              </button>
          </div>

          <div className='relative w-11/12 max-w-[450px]'>
              <img src={frame} alt="patttern" 
                  height={504}
                  width={500}
                  loading='lazy'
              />
              <img src={image} alt="mainpat"
                  height={500}
                  width={552}
                  className='absolute -top-4 right-4 '
              />

              
          </div>
          
    </div>
  )
}

export default Template
