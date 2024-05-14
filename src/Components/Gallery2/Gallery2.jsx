

const Gallery2 = () => {
    return (
        <div>
                           <h1 className="font-extrabold text-2xl mb-[20px]">Our Salor Area</h1>

<div className="carousel w-[550px] h-[300px]">
<div id="item1" className="carousel-item w-full">
<img src="https://i.ibb.co/Bn6xXCV/pexels-heyho-7750144.jpg" className="w-full" />
</div> 
<div id="item2" className="carousel-item w-full">
<img src="https://i.ibb.co/DWQZnv5/pexels-orlovamaria-4969842.jpg" className="w-full" />
</div> 
<div id="item3" className="carousel-item w-full">
<img src="https://i.ibb.co/4gh5shy/pexels-delbeautybox-211032-705255.jpg" className="w-full" />
</div> 
<div id="item4" className="carousel-item w-full">
<img src="https://i.ibb.co/MNy0Wd6/pexels-heyho-7750113.jpg" className="w-full" />
</div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
<a href="#item1" className="btn btn-xs">1</a> 
<a href="#item2" className="btn btn-xs">2</a> 
<a href="#item3" className="btn btn-xs">3</a> 
<a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Gallery2;