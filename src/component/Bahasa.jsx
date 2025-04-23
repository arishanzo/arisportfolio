import React from "react";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

function Bahasa () {

    
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


    
       <animated.div style={{ ...styles }}   ref={ref}>
   
    <section id="bahasa" class="container  mx-auto max-w-full px-4 space-y-6 bg-dark py-8 md:py-12 lg:py-20 overflow-x-hidden">

    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-20">

        <h2 class="font-bold text-3xl leading-[1.1] text-indigo-600 sm:text-3xl md:text-4xl">Our Project</h2>

        <p class="max-w-[85%] leading-normal text-white text-muted-foreground sm:text-lg md:text-gray-400 sm:leading-7">
           Total Project Web Development
        </p>

    </div>

    
    <div class="mx-auto grid justify-center gap-4 grid-cols-2 md:max-w-[64rem] sm:p-8 md:grid-cols-4 md:pb-32">

        <div
            class="relative overflow-hidden rounded-lg border-indigo-300 bg-indigo-200 select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src="./images/icon/laravel.svg" class=" hover:animate-none h-16" loading="lazy" alt="client logo" width="" height="" />
           
                <div class="space-y-2">
                    <h3 class="font-bold text-xl text-center mt-4">Laravel 11</h3>
                    <p class="text-sm text-center text-gray-700 font-bold text-muted-foreground">4 Project</p>
                </div>
            </div>
        </div>


        <div
            class="relative overflow-hidden rounded-lg border-yellow-300 bg-yellow-200 select-none hover:shadow hover:shadow-teal-200 p-2">
           <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src="./images/icon/codeigniter.svg" class=" hover:animate-none h-16" loading="lazy" alt="client logo" width="" height="" />
           
                <div class="space-y-2">
                    <h3 class="font-bold text-xl text-center mt-4">Codeigniter</h3>
                    <p class="text-sm text-center text-gray-700 font-bold text-muted-foreground">3 Project</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border-green-300 bg-green-200 select-none hover:shadow hover:shadow-teal-200 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src="./images/icon/reactts.svg" class=" hover:animate-none h-16" loading="lazy" alt="client logo" width="" height="" />
           
                <div class="space-y-2">
                    <h3 class="font-bold text-xl text-center mt-4">React Js</h3>
                    <p class="text-sm text-center text-gray-700 font-bold text-muted-foreground">3 Project</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border-blue-300 bg-blue-200 select-none hover:shadow hover:shadow-teal-200 p-2">
             <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <img src="./images/icon/vue.svg" class=" hover:animate-none h-16" loading="lazy" alt="client logo" width="" height="" />
           
                <div class="space-y-2">
                    <h3 class="font-bold text-xl text-center mt-4">Vue Js</h3>
                    <p class="text-sm text-center text-gray-700 font-bold text-muted-foreground">3 Project</p>
                </div>
            </div>
        </div>

      
    </div>

</section>
</animated.div>
  );
}

export default Bahasa;
