import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const service= useLoaderData();
    const {img, service_name, _id, description,price, service_area, provider}= service;
    console.log(service);
    return (
        <div>
             <div className="mb-[20px] p-[15px] lg:mx-[60px]">
            <div className="flex flex-col lg:flex-row-reverse card card-side bg-base-100 shadow-xl">
  <div>
  <figure><img className="w-[500px] h-[300px]" src={img} alt="Movie"/></figure>
  </div>
  <div className="ml-[40px]">
    <h2 className="card-title mb-[15px] text-2xl lg:text-4xl"><span className="font-bold">Service_Name:</span>{service_name}</h2>
    <p className="font-bold">
    {description}
    </p>

    <div className="my-[20px]">
      <h1><span className="font-bold">Price:</span>{price}</h1>
      <p><span className="font-bold">Service:</span>{service_area}</p>
    </div>

    <div className="flex gap-[30px]">
    <img className='w-auto h-11 rounded-full' src={provider.photo} alt='' />
    <h1><span className="font-bold">Name:</span> {provider.name}</h1>
    </div>
    <div>
      <h1><span className="font-bold">Email:</span>{provider.email}</h1>
    </div>

    <div className="card-actions my-[20px] ">
   <Link to={ `/book/${_id}`}> <button className="btn text-white bg-red-500">Booked Now</button></Link>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default ViewDetails;