

const Gallery1 = () => {
    return (
        <div>
             <div>
                     {/* first carosel */}
                       <h1 className="font-extrabold text-2xl mb-[20px]">Our Make Product</h1>
                     <div className="carousel w-[550px] h-[300px]">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/195V6bp/Untitled-design-6.png" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/0tZ5dm4/pexels-cottonbro-10608366.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/QcYtQpK/pexels-cottonbro-10609765.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i.ibb.co/93v16VD/pexels-hadis-13214684.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
                     </div>
        </div>
    );
};

export default Gallery1;