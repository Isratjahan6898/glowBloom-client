import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContex } from "../firebase/FirebaseProvider/FirebaseProvider";
import axios from "axios";
import { toast } from "react-toastify";



const BookedForm = () => {

    const {user}= useContext(AuthContex)
    const book = useLoaderData()
    const {img, service_name, _id, description,price, service_area, provider}= book;
    // console.log(book);

    const handleBookService = async e =>{
        e.preventDefault();
        const navigate = useNavigate();

        if(user?.email === provider.email) {
          return toast.error('this action is not permitted')
        }
        const form= e.target;
        const serviceId =_id;
        const service_name= form.service.value;
        const img= form.photo.value;
        const price = form.price.value;
        const email = user.email;
        const name= user.displayName;
        const status = 'pending'
        const providerEmail = provider.email;
        const providerName= provider.name;
        const date = form.date.value;
        const instraction= form.instraction.value;

        const bookData= {
          serviceId,
          service_name,
          img,
          price,email,
          name, status,providerEmail,providerName,date,
          instraction
        }
       try{
        const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/book/`, bookData)
        console.log(data);
        toast.success('service booked successfully')
        navigate('/booked')
       }
       catch(err){
        console.log(err);
       }

    }
    return (
        <div>
               <div className="my-[60px]">
      

      <div className="">
   <div className="bg-[#F4F3F0] mt-[100px] lg:mx-[150px] lg:h-[850px] lg:w-[900px]">


      <h1 className="text-center font-boldl lg:pt-[30px] lg:pb-[16px] text-4xl">Booked Service</h1>
     
      <form onSubmit={handleBookService}  className="">
          <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">ServiceId</span>
    </label>
    <input type="text" name="id" defaultValue={_id} disabled placeholder="id" className="input w-[350px] text-black lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Service_name</span>
    </label>
    <input type="text" defaultValue={service_name} name="service" placeholder="service_name" className="input w-[350px] lg:w-[350px] input-bordered" disabled required />
  </div>


          </div>


          <div className="flex flex-col md:flex-row lg:flex-row  px-[30px] md:px-[60px] lg:px-[100px] gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Image</span>
    </label>
    <input type="text" name="photo" disabled defaultValue={img} placeholder="service img" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">price</span>
    </label>
    <input type="text" name="price" disabled defaultValue={price} placeholder="price" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>


          </div>



     

         



         


          <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Provider Email</span>
    </label>
    <input type="text" disabled name="email" defaultValue={provider.email} placeholder="email" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Provider Name</span>
    </label>
    <input type="text" disabled name="name" defaultValue={provider.name} placeholder="user name" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>



          {/* current user */}

          <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">User Email</span>
    </label>
    <input type="text" disabled name="email" defaultValue={user.email} placeholder="email" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">User Name</span>
    </label>
    <input type="text" name="name" disabled defaultValue={user.displayName} placeholder="user name" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>

      {/*  */}

      <div className="flex flex-col md:flex-row lg:flex-row px-[30px] md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Date</span>
    </label>
    <input type="date"  name="date"  placeholder="date" className="input w-[350px] lg:w-[350px] input-bordered" required />

  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Instraction</span>
    </label>
    <input type="text" name="instraction"  placeholder="instaction" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>


      


    <div className="px-[30px] md:px-[60px] lg:px-[100px]">
    <div className="form-control mt-6">
    <button className="btn md:w-[700px] w-[350px] bg-[#D2B48C]">Purchases </button>
  </div>
    </div>

      </form>
  </div>
 </div>
  </div>
        </div>
    );
};

export default BookedForm;