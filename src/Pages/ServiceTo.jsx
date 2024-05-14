import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../firebase/FirebaseProvider/FirebaseProvider";


const ServiceTo = () => {
    const{user} =useContext(AuthContex)
    console.log(user.email);
    const [books, setBooks]= useState([]);

  useEffect(()=>{
     getData()
  },[user])

const getData = async ()=>{
  const{data} =await axios(`${import.meta.env.VITE_API_URL}/service-to-do/${user?.email}`)
          setBooks(data)
}

    
    
    

    const handleStatus = (_id, status)=>{
        axios.patch(`${import.meta.env.VITE_API_URL}/purchases/${_id}`, {status})
        .then((res)=>{
            console.log(res.data);
            getData()
        })
    }

    return (

        


        <div className="my-[60px]">
             <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>All Booked service</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
        {books.length} Bid
        </span>
      </div>

      <div className='flex flex-col mt-6'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Title</th>
        <th>date</th>
        <th>price</th>
        <th>Email</th>
        <th>status</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody>
      
      {
        books.map(book=><tr key={book._id}>
            
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={book.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{book.service_name}</div>
                  
                </div>
              </div>
            </td>
            <td>
             {book.date}
              <br/>
             
            </td>


            <td>{book.price}</td>
            <td>{book.email}</td>
            <th>
              {book?.status}
            </th>

            <td>
            <details className="dropdown">
  <summary className="m-1 btn">Action</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
  <li  onClick={()=>handleStatus(book._id , 'pending') }><a>pending</a></li>
    <li  onClick={()=>handleStatus(book._id , 'working') }><a>working</a></li>
    <li onClick={()=>handleStatus(book._id , 'completed') }><a>completed</a></li>
  </ul>
</details>
            </td>
          </tr>)
      }
  
     
    </tbody>
    
 
    
  </table>
</div>
      </div>
    </section>
        </div>
   

);
};

export default ServiceTo;