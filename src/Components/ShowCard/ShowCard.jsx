

const ShowCard = ({service}) => {
   const {img, service_name, description, provider}= service
    console.log(service);
    return (
        <div>
            <div className="card w-[350px] h-[450px] mb-[20px] gap-[20px] bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
  <div className=" ml-[30px]">
    <h2 className="card-title text-center">{service_name}</h2>
    <p className="mb-[10px]">{
        description.length> 100 && (
            <>
            
            {description.slice(0, 100) + "..."}
            </>
        )
       }
</p>

  <div className="mb-[10px]">
    <h1><span className="font-bold">Name:</span>{provider.name}</h1>
    <h1><span className="font-bold">Email:</span>{provider.email}</h1>

  </div>

    
    <div className="card-actions mb-[16px]">
      <button className="btn text-white bg-red-500">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowCard;