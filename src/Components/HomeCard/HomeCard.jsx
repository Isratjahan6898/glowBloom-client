import axios from "axios";
import 'animate.css/animate.css';

import { useEffect, useState } from "react";
import ShowCard from "../ShowCard/ShowCard";


const HomeCard = () => {
    const [services, setServices]= useState([])
    const sliceServices = services.slice(0,6)

    useEffect(()=>{
        const getService =async()=>{
            const{data} =await axios(`${import.meta.env.VITE_API_URL}/service`)
            setServices(data)
        }
        getService();
    },[])
    return (
        <div className="mx-[40px]  mt-[60px] lg:mx-[70px]">

            <div>
           
           <h1 className="font-bold text-red-700 text-4xl text-center animate__animated animate__bounce animate__slow mb-[20px]">Show Service</h1>
                <p className="font-bold text-center mb-[30px]">
                    
GlowBloom Salon offers a rejuvenating sanctuary for those seeking a transformative beauty experience.<br></br> Our expert team specializes  in a range of services, from revitalizing facials and luxurious<br></br> massages to precise haircuts and stunning manicures. With a commitment to quality and relaxation.
                </p>
         
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                      sliceServices.map(service=> <ShowCard key={service._id} service={service}></ShowCard>)
                }
            </div>


        </div>
    );
};

export default HomeCard;