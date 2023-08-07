






const ImageSlider =({SliderData}) => {
  const [current, setCurrent] = useState(0);
  const length =SliderData.length;

  const nextSlide = () =>{
   setCurrent(current === length - 1 ? 0 : current+1)
  };
  const previousSlide= () =>{
    setCurrent(current=== 0? length -1 :current -1 )
  };
  if(!Array.isArray(SliderData) || SliderData.length <= 0){
    return null
  }





return(
    
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={previousSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    {SliderData.map((slides) , index => {
        return(
            <div
            className={index === current ? 'slide active' :'slide'}
            key={slides.SliderData}
            >
                {index === current && (
                    < img src='required(./assets/food1)' alt='food image' className="image"/> ) 
                    }
            </div>
           );
    }
    )
}
 </section>

);
};

export default ImageSlider;
