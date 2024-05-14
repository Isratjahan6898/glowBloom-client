import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiOutlineShare } from "react-icons/hi2";

const Feedback = () => {
    return (
        <div className="lg:mx-[60px] my-[60px]">
            <div className="text-center">
                <h1 className="mb-[20px] text-red-700 font-bold text-4xl">Our FeedBack</h1>
                <p className="mb-[16px] lg:ml-[590px]"><HiAdjustmentsHorizontal className="text-5xl  text-red-400" /></p>
                <p className="text-bold">A culture of feedback promotes transparency, trust, and continuous improvement within an organization</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-[40px]">
                <div>
                    
                    <div className="card w-96 bg-red-100 text-black">
  <div className="card-body ">
    <h1></h1>
    <h1><HiOutlineShare  className="text-4xl text-black font-extrabold"/></h1>
    <p>The appointment booking process could be streamlined to make it more convenient for clients. Providing online booking options through the GlowBlom website or mobile app could save time and eliminate the need for phone calls.</p>
    <div className="my-[16px] flex gap-[10px]">
    <img className='w-auto h-11 rounded-full' src='https://i.ibb.co/0YbH0NX/pexels-soldiervip-1391498.jpg' alt='' />
    <h1 className="font-bold">Neela Sorkar</h1>
    </div>
  </div>
</div></div>
                <div>

                    {/* second card */}

                    <div>
                    
                    <div className="card w-96 bg-red-100 text-black">
  <div className="card-body ">
    <h1></h1>
    <h1><HiOutlineShare  className="text-4xl text-black font-extrabold"/></h1>
    <p>Clients may appreciate more personalized services tailored to their individual preferences and needs. Offering consultations before appointments to discuss desired styles, preferences, and any specific requirements can ensure a more customized experience.</p>
    <div className="my-[16px] flex gap-[10px]">
    <img className='w-auto h-11 rounded-full' src='https://i.ibb.co/d4cSbnj/pexels-raydar-110719-341970.jpg' alt='' />
    <h1 className="font-bold">Rayen Ummi</h1>
    </div>
  </div>
</div></div>
                </div>
                <div>

                    {/* third card */}
                    <div>
                    
                    <div className="card w-96 bg-red-100 text-black">
  <div className="card-body ">
    <h1></h1>
    <h1><HiOutlineShare  className="text-4xl text-black font-extrabold"/></h1>
    <p>Establishing clear channels of communication between clients and salon staff can foster better relationships and address any concerns or feedback promptly. Providing multiple communication options such as email, phone, or messaging platforms can accommodate different client preferences.</p>
    <div className="my-[16px] flex gap-[10px]">
    <img className='w-auto h-11 rounded-full' src='https://i.ibb.co/k63KZ7H/pexels-soldiervip-1468379.jpg' alt='' />
    <h1 className="font-bold">Sathi Akter</h1>
    </div>
  </div>
</div></div>
                </div>
            </div>
            
        </div>
    );
};

export default Feedback;