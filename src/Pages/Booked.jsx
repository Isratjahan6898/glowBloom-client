import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContex } from "../firebase/FirebaseProvider/FirebaseProvider";
import axios from "axios";


const Booked = () => {
    const {user} = useContext(AuthContex)
    const [books, setBooks]= useState([]);


    useEffect(()=>{
        const getData = async()=>{
            const {data} = await axios (`${import.meta.env.VITE_API_URL}/books/${user?.email}`)
            setBooks(data)
        }
        getData();
    },[user])
    console.log(books);

    return (
        <div className="lg:mx-[100px] mt-[40px]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {
        books.map(book=> <div key={book._id} className="card w-[350px] h-[500px] mb-[20px] gap-[20px] bg-base-100 shadow-xl">
        <figure><img src={book.img} alt="Shoes" /></figure>
<div className=" ml-[30px]">
<h2 className="card-title text-center">Service-Name: {book.service_name}</h2>
<hr className="my-[16px]">
</hr>
<p><span className="font-bold">Date:</span>{book.date}</p>
<p><span className="font-bold">price:</span>{book.price}</p>
<hr className="my-[16px]">
</hr>
<p><span className="font-bold">Instruction:</span>{book.instraction}</p>
<hr className="my-[16px]">
</hr> 





<div className="mb-[25px]">
<h1><span className="font-bold">Name:{book.name}</span></h1>
<h1><span className="font-bold">Email:{book.email}</span></h1>

</div>



</div>
</div>)
    }



</div>
            
        </div>
    );
};

export default Booked;