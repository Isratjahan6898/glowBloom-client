import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices]= useState([])
    const [search, setSearch]= useState([])

    useEffect(()=>{
        const getService =async()=>{
            const{data} =await axios(`${import.meta.env.VITE_API_URL}/service `)
            setServices(data)
            setSearch(data)
        }
        getService();
    },[])

    const handleSearch = (e) =>{

     setSearch(services.filter(a=>a.service_name.toLowerCase().includes(e.target.value)))

    }
    console.log(search);
    return (
        <div className="mx-[20px] lg:mx-[70px] my-[60px]">
  <form >
    
  <div onClick={handleSearch}
   className="flex items-center justify-center my-[50px]">
            <label className="input input-bordered flex items-center gap-2">
         <input type="text" name='search' className="grow" placeholder="Search" />
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
       </label>
         {/* <button className="btn btn-outline btn-error">Search</button> */}
            </div>
  </form>

            {
               search.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
            }
        </div>
    );
};

export default Service;