import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices]= useState([])

    useEffect(()=>{
        const getService =async()=>{
            const{data} =await axios(`${import.meta.env.VITE_API_URL}/service`)
            setServices(data)
        }
        getService();
    },[])
    return (
        <div className="mx-[20px] lg:mx-[70px] my-[60px]">

            {
                services.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
            }
        </div>
    );
};

export default Service;