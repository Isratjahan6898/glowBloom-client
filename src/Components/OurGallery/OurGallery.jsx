import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Gallery2 from "../Gallery2/Gallery2";
import Gallery1 from "../Gallery1/Gallery1";

const OurGallery = () => {
    return (
        <div className="lg:mx-[70px] my-[60px]">

            <div>
            <div className="text-center">
                <h1 className="mb-[20px] text-red-700 font-bold text-4xl">Our  Gallery</h1>
                <p className="mb-[16px] lg:ml-[590px]"><HiAdjustmentsHorizontal className="text-5xl  text-red-400" /></p>
                <p className="text-bold mb-[30px]">Step into a world of artistic wonder and creativity at our gallery.<br></br> Located in the heart of GlowBloom, our gallery showcases a diverse<br></br> collection of captivating artworks spanning various styles, mediums, and themes</p>
            </div>
                </div>

            <div className="flex gap-[20px]">
                    <div>
                        <Gallery1></Gallery1>
                    </div>

                     <div>
                      <Gallery2></Gallery2>
                  </div>
            </div>

            
            
        </div>
    );
};

export default OurGallery;