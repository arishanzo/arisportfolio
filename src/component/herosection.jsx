import React from "react";

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';


function HeroSection () {

    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.1,    
      });
    
      
    
    const styles = useSpring({
      opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)', // ⬆️ Geser dari bawah
        delay: inView ? 300 : 0,
        config: { tension: 170, friction: 20 },
    });

 return (

   <>
   
   
       
          <animated.div style={{ ...styles }}   ref={ref}>

   <section class="pt-28 lg:pt-32 bg-dark pb-32  bg-center bg-cover  overflow-x-hidden   overflow-y-hidden">
   <div class=" px-4 sm:px-6 lg:px-8 relative text-center relative">
    
   <div class="absolute -top-20 -left-10  w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-30 rounded-full blur-3xl"></div>
   <div class="absolute bottom-0 right-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 opacity-30 rounded-full blur-3xl"></div>



       <div class="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
           <span class="font-inter text-center text-xs font-medium text-gray-200 ml-3"
           >Explore My Portfolio in website</span>
           <a href="" class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600">
               <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path
                       d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                       stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
           </a>
       </div>
       

       <h1
           class="md:max-w-2xl mx-auto text-center font-manrope font-bold text-2xl md:text-3xl md:text-4xl text-gray-200 md:mb-5 md:text-5xl leading-[50px]">
          Hello, I'am
           <span class="text-indigo-600"> Aris Wahyudi</span>
       </h1>
      
  
       <p class="max-w-sm mx-auto text-center text-lg text-base font-normal leading-7 text-gray-500 mb-9">
          Web Developer at Lamongan, East Java Indonesia
       </p>

    
       <div class="flex pt-8 md:pt-16 justify-center">
       <span class="relative flex md:w-80 md:h-80  w-60 h-60 mb-4">
                    <img src={`${process.env.PUBLIC_URL}/photo/foto.png`} class=" bg-gray-300 flex rounded-full shrink-0"/>
                    <span class="animate-ping md:w-15 md:h-15 absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-30"></span>
                  
                    </span>
       </div>
      
   </div>
</section>
</animated.div>
             
</>

  );

}

export default HeroSection;
