import React from "react";
import { getDataSertif } from "../data/dataSertif";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";



class Sertifkat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: getDataSertif(),
          activeIndex: 0,
        }
      }
      
      updateActiveSlide = (swiper) => {
        this.setState({ activeIndex: swiper.activeIndex });
      };

      render(){
        
        const {data}  = this.state;


  return (

    <>
    
  <div class="container mx-auto md:mt-28 p-8" id="sertifikat">
  <div class="mx-auto max-w-7xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
    <div className="block  justify-center    justify-self-start  md:flex mb-8 md:mb-32">
    <div className="w-full max-w-xs mx-auto text-center p-4 md:max-w-lg lg:max-w-xl">

    <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={this.updateActiveSlide}
        className="rounded-lg overflow-hidden"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={slide.id}>
                          
            <img className="w-full h-64 md:h-80 lg:h-96 object-cover aspect-square"  src={slide.Image} alt={`Slide ${index + 1}`} />
           
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
       </div>

<div className="block  text-center  sm:text-sm md:text-start">
  
<div className="inline-flex inline-block align-middlejustify-between items-center py-1 mb-7 text-sm">
  
<div class="border border-indigo-600  p-1 w-36 align-middle  rounded-full flex items-center justify-between md:mb-4">
<span class="font-inter text-xs font-medium text-gray-200 ml-3"
        >Certifications</span>
        <a href="#sertifkat" class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                    stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
        </div>
        </div>
    <h5 className="md:mb-8 text-2xl md:text-5xl font-bold leading-normal tracking-tight dark:text-white md:max-w-2xl sm:text-2xl xl:text-5xl"> {data[this.state.activeIndex].title}</h5>
    <p className="mb-4 text-xs/5 md:text-xl font-sans sm:p-0 text-gray-500 dark:text-gray-400 py-3.5 max-w-[320] md:max-w-[650px] md:mb-12 md:text-md  lg:mb-5">
    {data[this.state.activeIndex].deskripsi}
    </p>
    
 
 
  </div>
 


  
</div>
</div>
    </>
   
//     <div class="container   mx-auto md:mt-8 p-8" id="sertifikat">
//     <div class=" py-8  border-y border-gray-100 dark:border-gray-800  justify-center">
                   
//                    <h3 class="text-center text-xs md:text-xl font-semibold text-gray-700 dark:text-white">Certifications & Licenses
//                    </h3>
//                    <p class="text-gray-700 mt-5 text-center md:mt-10 dark:text-slate-400"> Each certification demonstrates a commitment to continuous learning, 
//                     professional growth, and adherence to industry standards. These credentials are recognized globally and serve as proof of proficiency 
//                     in various IT domains, 
//                     including software development, cloud computing, cybersecurity, and project management.
//                     </p>
//                    </div>

//                    <Swiper
//         breakpoints={{
//           340: {
//             slidesPerView: 1,
//             spaceBetween: 15,
//           },
//           700: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//           },
//         }}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
    
//       >
//                {data.map((item) =>(
                
//                   <SwiperSlide key={item.title} className="p-8">
//                  <div class=" max-w-sm bg-white  hover:shadow-purple-950 shadow-2xl  mt-20 border-gray-200 md:mt-4 rounded-lg shadow dark:bg-gray-900">
//                      <a href={item.link} >
//                          <img class="rounded-t-lg hover:opacity-50" src={item.Image} alt="" />
//                      </a>
//                      <div class="p-5">
//                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                       
//                          <p class="text-gray-500 text-bold text-xl dark:text-slate-500">By {item.Perusahaan}</p>

// <p class="text-gray-500 py-5 mt-30  text-ml dark:text-slate-300">{item.deskripsi}</p>

//                          <a href={item.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                              Link Certification
//                               <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                              </svg>
//                          </a>
//                      </div>
//                  </div>
//                  </SwiperSlide>
//                       ))};
                     
                   
                      

// </Swiper>
                   
            
    
//                    </div>

       
       
  );
}
}

export default Sertifkat;
