
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
const AboutUs = () => {
    return (
        <div className="lg:mx-[80px]">

            <div className="text-center">
                <h1 className="mb-[20px] text-red-700 font-bold text-4xl">About Us</h1>
                <p className="mb-[16px] lg:ml-[590px]"><HiAdjustmentsHorizontal className="text-5xl  text-red-400" /></p>
                <p className="text-bold mb-[30px]">At GlowBlom, we are committed to innovation, inclusivity, and integrity.<br></br> We strive to harness the latest technologies and methodologies<br></br> to deliver exceptional experiences to our community members.<br></br> We celebrate diversity and believe that everyone has something valuable to contribute.</p>
            </div>

            <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/hHhqkqN/pexels-heyho-7195812.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Us!</h1>
      <p className="py-6">The journey of GlowBloom began with a spark of inspiration, a vision to create something more than just a platform, but a digital ecosystem where illumination and growth intertwine. It was born out of a collective desire to carve a path towards enlightenment in the vast expanse of the online world.</p>

      <p className="py-6">In the early days, GlowBloom was merely a seedling, nurtured by a dedicated team of visionaries who believed in the power of knowledge and community. With each passing milestone, the project began to take root, drawing strength from the passion .</p>
      <p className="py-6">As GlowBloom started to blossom, it became evident that its journey was not merely about building a website or an app; it was about cultivating a culture of learning and collaboration. Every decision, every feature, was carefully crafted to serve the greater purpose of empowering individuals to thrive in an ever-evolving digital landscape.</p>
     
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default AboutUs;
