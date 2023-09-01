// import React,{ useState, useEffect } from 'react'
// import image1 from '../assets/food1.jpg'
// import image2 from '../assets/food2.jpg'
// import image3 from '../assets/food3.jpg'
// import image4 from '../assets/food4.jpg'
// import image5 from '../assets/food5.jpg'

// function SliderData (){
//     const [current, setCurrent] = useState(1);

   
// const HandleIncrement = () => {
        
//     if (current <= 4) {
//         setCurrent(current + 1);
//     }
//     if(current >= 5 ){
//         setCurrent(1);
//     }

// };

// const HandleDecrement = () => {
// if (current >= 2) {
//     setCurrent(current - 1)
// }
// if(current ==1){
//     setCurrent(5);
// }
// };

// const time = setInterval(() => {
//     if (current <= 4) {
//         setCurrent(current + 1);
//     }
//     if(current >= 5 ){
//         setCurrent(1);
//     }
// }, 3000);
//  setTimeout(() => {
//     clearInterval(time);
//  }, 3000);
// useEffect(()=>{

// },[time]);

//     return (
//         <div>
//             {current === 1 ? (
//                 <>
//                     {/*  <h1>  {current} </h1> */}
//                     <img src={image1}  width={'100%'} height={500} ></img>
//                 </>
//             ) : current === 2 ? (
//                 <>
//                     {/* <h1>{current}</h1> */}
//                     <img src={image2} width={'100%'} height={500} ></img>
//                 </>
//             ) : current === 3 ? (
//                 <>
//                     {/* <h1>{current}</h1> */}
//                     <img src={image3}  width={'100%'} height={500} ></img>               </>
//             ) : current === 4 ? (
//                 <>
//                     {/* <h1>{current}</h1> */}
//                      <img src={image4} width={'100%'} height={500} ></img>
//                 </>
//             ) : (
//                 <>
//                     {/* <h1>{current}</h1> */}
//                     <img src={image5} width={'100%'} height={500} ></img>
//                 </>
//             )
//             }
//             <div >
//                 <div className="CSS">
//                     <span className='css-left' onClick={HandleDecrement} > &lt; 
//                     </span>
//                     <span >
//                     {current}
//                     </span>
//                     <span className='css-right'
//                      onClick={HandleIncrement} >
//                     &gt;
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default SliderData;