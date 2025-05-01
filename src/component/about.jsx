import React, { useState, useEffect, useRef } from "react";

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { getDataIcon } from "../data/dataIcon";

const About = () =>  {

  const data = getDataIcon();
  const [isPaused, setIsPaused] = useState(false);
  const [index, setIndex] = useState(0);

  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Mulai animasi saat mount
  useEffect(() => {
    if (!isPaused) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isPaused]);

  const handleImageClick = () => {
    setIsPaused(true); // menghentikan animasi saat diklik
    stopAutoScroll();
  };


 const nextSlide = () => setIndex((prev) => (prev + 1) % data.length);

 // Fungsi untuk navigasi ke gambar sebelumnya
 const prevSlide = () => setIndex((prev) => (prev - 1 + data.length) % data.length);



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
        <section class="max-w-full  lg:grid lg:min-h-screen lg:place-content-center dark:bg-gray-900 overflow-x-hidden ">
  <div
    class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24  md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
  >
    <div class="max-w-full p-4  text-left text-center md:text-start ">
      <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
        About For
        <strong class="text-indigo-600"> Me </strong>
      
      </h1>

      <p class="mt-4 text-base text-xs/5 text-center md:text-start text-pretty text-gray-500 sm:text-lg/relaxed text-justify ">
      I am a graduate of Informatics Engineering from the Islamic University of Lamongan, with a focus on website development. During my studies, I actively participated in various projects, both mini and large-scale, which sharpened my skills in web development and application creation. Professionally, I worked as an IT Staff at Silmi Fashion, where I was responsible for developing a payroll application and providing IT support. Within three months, I successfully developed a payroll system for the HR department and company management. I have a strong passion for continuous learning and improving my skills in the IT field.
      </p>

      <div class="mt-4 flex gap-4 justify-center md:justify-start mt-8 mb-8">
        <a
          class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
        href="https://api.whatsapp.com/send/?phone=%2B6288805317354&text&type=phone_number&app_absent=0"
        >
          Get Started
        </a>

 
        <a
          class="inline-block rounded  border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          href="https://www.linkedin.com/in/aris-wahyudi-09a729165/" 
        >
    
          Linkedin
        </a>
      </div>

                                     
  <div className=" overflow-hidden relative slideshow-container pt-8 pb-8">
  <h1 class="text-xl font-bold text-gray-900 pb-8 sm:text-xl dark:text-white">
        My
        <strong class="text-indigo-600"> Skill </strong>
      
      </h1>
  <div
        className="flex transition-transform duration-1000 ease-in-out slideshow-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >       {data.map((img, i) => (
          <img key={i} src={img.icon} alt={`Slide ${i}`} className="w-5 h-5 gap-16 slideshow-image" onClick={handleImageClick}/>
        ))}
      </div>
   
    </div>

    </div>

    <div class=" md:mt-0 sm:p-10 p-8">
      <img 
        class="w-full h-auto max-w-full rounded-lg object-cover md:h-auto lg:h-[500px] shadow-xl" 
        src={`${process.env.PUBLIC_URL}/photo/arisfoto.jpg`} 
        alt="" 
      />
    </div>
  </div>

      
{/* batas */}
   
   <div class=" bg-dark max-w-full mb-32 relative ">

   <div class="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-30 rounded-full blur-3xl"></div>
  <div class="absolute top-[30%] -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-30 rounded-full blur-3xl"></div>
  <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 opacity-30 rounded-full blur-3xl"></div>

  <div class="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8  ">

  <div class="text-center mb-12 pr-4">
  <h2 class="my-4 text-2xl  text-center font-bold text-indigo-600 md:text-3xl">Experience</h2>
      <p class="text-lg text-gray-300 font-semibold ">I have experience developing website projects for more than 3 years</p>
          </div>
    <div
      class="mt-8 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
      <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round"   height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 10l2 -2v8"></path>
          </svg>
          <div class="space-y-2">
            <h5 class="text-lg font-bold text-white transition">IT Staff</h5>
            <h5 class="text-xs font-semibold text-gray-300 transition">Silmi Fashion || Dec 2022 - Apr 2023</h5>
            <h5 class="text-xs pb-8 text-gray-400 transition">Sugio, Lamongan East Java</h5>
            <p class="text-gray-400">Create a Payroll application for Silmi HRD and Leadership with an automatic salary calculation feature
 based on absenteeism, overtime, leave, and others. 
The accuracy of Payroll application calculations reaches 99% with frequent Excel calculations
 carried out by HRD of the Silmi Fashion company. 
Become IT Support for a company with the task of helping to repair the internet network or
 the computer is having problems.</p>
          </div>
        </div>
      </div>
      <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round"   height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
          </svg>
          <div class="space-y-2">
            <h5 class="text-lg font-bold text-white transition">Web Developer Internship</h5>
            <h5 class="text-xs font-semibold text-gray-300 transition">Cv. Caraka Abadi || Feb 2023 - May 2023</h5>
            <h5 class="text-xs pb-8 text-gray-400 transition">Malang East Java</h5>
            <p class="text-gray-400">Explain the company inventory application with stock features, additions, reductions, losses,
 profit, replacing manual management with digital. 
Increase productivity and 95% ease of profit and loss calculations when using
 Inventory application. 
Using PHP, JAVASCRIPT, AJAX, CSS programming languages ​​with framework
 codeignite</p>
          </div>
        </div>
      </div>
      <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round"  height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path
              d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1">
            </path>
          </svg>
          <div class="space-y-2">
            <h5 class="text-lg font-bold text-white transition">Jr. Graphic Design</h5>
            <h5 class="text-xs font-semibold text-gray-300 transition">Impro Studio || May 2023 - Agust 2024</h5>
            <h5 class="text-xs pb-8 text-gray-400 transition">Lamongan East Java</h5>
            <p class="text-gray-400">Create a mini UI/UX Design project for a website application in the Figma application. 
Research current trendy designs on evanto, pinterest, canva, etc. website platforms. 
Teamwork and team collaboration to build design templates that have selling power
 high 100%.
 Working with the Google Sheets and Notion platforms to facilitate the progress of each team
 working on design projects.</p>
          </div>
        </div>
      </div>
      <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
            stroke-linejoin="round"  height="50" width="50"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
            </path>
            <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
            <path d="M14 8v8"></path>
          </svg>
          <div class="space-y-2">
            <h5 class="text-lg font-bold text-white transition">Freelance Web Developer</h5>
            <h5 class="text-sm  font-semibold text-gray-300 transition">Devklit || Agust 2022 - Now</h5>
            <h5 class="text-xs pb-8 text-gray-400 transition">Lamongan East Java</h5>
            <p class="text-gray-400">Starting the project with a brief from the client, designing an application using the waterfall technique, after
 it tests the application before giving it to the client.
 Create an online shop application using the Midtrans API for payment gateway and creation
 other website applications for company needs. 
I often use React.js for frontend development, as well as Laravel 11 and CodeIgniter
 for the application backend.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


          
   
   
                       
  
  
 </section>
 </animated.div>
    </>
   

  );
}

export default About;
