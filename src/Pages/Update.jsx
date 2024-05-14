import { useContext } from "react";
import { AuthContex } from "../firebase/FirebaseProvider/FirebaseProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";


const Update = () => {
    const {user}= useContext(AuthContex)
    const service = useLoaderData();
    const navigate = useNavigate()
    const {img, service_name, _id, description,price, service_area, provider}= service;
    // console.log(service);

    const handleUpdate = async e =>{

        e.preventDefault();
        const form = e.target;
        const img = form.photo.value;
        const service_name= form.service.value;
        const service_area= form.area.value;
        const price = form.price.value;
        const description = form.descripton.value;
    
        const serviceData= {
          img,
          service_name,
          service_area,
          price,
          description,
          provider:{
            email:user?.email,
            name:user?.displayName,
            photo:user?.photoURL
    
          }
        }
        // console.log(serviceData);
    
       try{
        const {data}= await axios.put(`${import.meta.env.VITE_API_URL}/service/${_id}`,serviceData)
        console.log(data);
        navigate('/manage')
        toast.success('service update successFully')
       }
       catch(err){
        console.log(err);
        toast.error(err.message)

       }



    }





    
    return (
        <div>
                  <div className="my-[60px]">
      

      <div className="">
   <div className="bg-[#F4F3F0] mt-[100px] lg:mx-[150px] lg:h-[850px] lg:w-[900px]">


      <h1 className="text-center font-boldl lg:pt-[30px] lg:pb-[16px] text-4xl">Update Service</h1>
     
      <form onSubmit={handleUpdate} className="">
          <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Image</span>
    </label>
    <input type="text" name="photo" defaultValue={img} placeholder="photo url" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Service_name</span>
    </label>
    <input type="text" name="service" defaultValue={service_name} placeholder="item_name" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>


          </div>


          <div className="flex flex-col md:flex-row lg:flex-row  px-[30px] md:px-[60px] lg:px-[100px] gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Service_area</span>
    </label>
    <input type="text" name="area" defaultValue={service_area} placeholder="subcategory_name" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">price</span>
    </label>
    <input type="text" name="price" defaultValue={price} placeholder="price" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>


          </div>



     

         



         


          <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Provider Email</span>
    </label>
    <input type="text" defaultValue={user.email} name="email" placeholder="email" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Provider Name</span>
    </label>
    <input type="text" defaultValue={user.displayName} name="name" placeholder="user name" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>

      


          <div className="px-[30px] md:px-[60px] lg:px-[100px]">
    <div className="form-control mt-6">
    <label className="label">
      <span className="label-text">Short Description</span>
    </label>
    <input type="text" name="descripton" defaultValue={description} placeholder="Shor description" className="input 
   md:w-[700px] w-[350px] p-[40px] input-bordered" required />
  </div>
    </div>


    <div className="px-[30px] md:px-[60px] lg:px-[100px]">
    <div className="form-control mt-6">
    <button className="btn md:w-[700px] w-[350px] bg-[#D2B48C]">Update</button>
  </div>
    </div>

      </form>
  </div>
 </div>
  </div>
        </div>
    );
};

export default Update;