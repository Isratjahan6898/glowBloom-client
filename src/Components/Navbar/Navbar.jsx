import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContex } from "../../firebase/FirebaseProvider/FirebaseProvider";


const Navbar = () => {

  const {user,logOut}= useContext(AuthContex);
  // console.log(logOut);
  const navigate = useNavigate();


  const handleLogOut = ()=>{

    logOut()
    .then()
    navigate('/')
    .catch()
  }

    const [theme , setTheme]= useState('light');
    useEffect(()=>{
        localStorage.setItem('theme',theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
      },[theme])

      const handleTheme = (e)=>{
        if(e.target.checked){
          setTheme('dark')
        }else{
          setTheme('light')
        }
      }
      // console.log(theme)
    
    return (
        <div className="">
          <div className="lg:mx-[100px] mt-[40px] ">
             <div className='navbar p-[20px] shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to='/'>
        <div className='flex gap-2 items-center'>
          <img className='w-auto h-11 rounded-full' src='https://i.ibb.co/HVXGYgH/Pin-on-Logo-de-sal-n-de-belleza.jpg' alt='' />
          <h1 className='font-bold'><span className="text-2xl">
          GlowBloom
            </span><br></br>
           
           Beaytu salon
           </h1>
          
        </div>
        
        </Link>
       
      </div>
      
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <p className="mr-[20px]">
            <NavLink to="/" ><div className="font-bold">Home</div></NavLink>
          </p>

          <p className="mr-[45px]">
            <NavLink to='/service'><div className="font-bold">Service</div></NavLink>
          </p>

          {
          user &&
              <div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
           
           <p className="mb-[30px] ml-[20px] mr-[60px]">
            <div className="font-bold">DeshBoard</div>
          </p>
          
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <p>
            <Link to='/addService'>
              <div className='justify-between font-bold'>Add service</div>
            </Link>
            </p>
            <Link to='/manage'>
              <div className="font-bold">Manage Service</div>
            </Link>
            <Link to='/booked'>
              <div className="font-bold">Booked Service</div>
            </Link>
            <Link to='/service-to'>
              <div className="font-bold">Service-To-Do</div>
            </Link>
           
          </ul>
        </div>
        }


        

         {
          user? <div>

        <p className="mr-[20px]" >
          <button onClick={handleLogOut} className='font-bold  text-center'>Logout</button>
        </p>
          </div>
        
        
        
        :

          <p>
          <Link to='/login'> <div className="font-bold">
             Login
           </div></Link>
</p>
         }

          <p>
          <label className="swap swap-rotate ml-[30px] ">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleTheme} type="checkbox" className="theme-controller"  />
{/* 
  value="synthwave" */}
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
          </p>
        </ul>

      
        {/*  */}



        {
          user &&
              <div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full' title={user.displayName}>
              <img
                referrerPolicy='no-referrer'
                alt='User Profile Photo'
                src={user.photoURL}
              />
            </div>
          </div>
         
        </div>
        }


      
    
          
    </div>
    </div>
  
        </div>
        </div>
    );
};

export default Navbar;