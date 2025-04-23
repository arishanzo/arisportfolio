import React, { useState } from "react";
import { getDataPortfolioWeb } from "../data/dataportfolio";

class Portfolio extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: getDataPortfolioWeb(),
        visibleCount: 3,
      }
    }

    
  showMore = () => {
    this.setState((prevState) => ({
      visibleCount: prevState.visibleCount + 3, // Tambah jumlah yang terlihat
    }));
  };
    
    render(){
      
      const {data, visibleCount}  = this.state;

  return (
   
<section id="portfolio" class="portfolio-section py-16 px-4  bg-dark relative">

<div class="absolute -top-20 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-20 rounded-full blur-3xl"></div>
   <div class="absolute bottom-0 right-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 opacity-10 rounded-full blur-3xl"></div>

    <div class="container mx-auto max-w-7xl">
 


        <div class="text-center mb-12">
            <h2 class="text-4xl text-white font-bold mb-4">Portfolio Showcase</h2>
            <p class="text-lg text-indigo-500 font-semibold">Discover our latest projects and success stories</p>
        </div>
    

        <div class="border-b border-gray-800 mb-5 flex justify-between text-sm ">
        <div class="text-purple-600 flex items-center pb-2 pr-2 border-b-2 border-purple-600 uppercase">
            
            <a href="#" class="font-semibold inline-block">Project</a>
        </div>
        <a href="https://github.com/arishanzo" className="text-gray-700">See All</a>
    </div>

        <div class="grid p-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
    
     
    
        {data.slice(0, visibleCount).map((item, index) =>(

<div class="flex items-center flex-col md:flex-row  gap-10 shadow-xl " key={index}>
      <div>
      <div class="p-4 max-w-md">
    <div class="h-full  border-opacity-60 rounded-lg overflow-hidden">
        <img class="h-48 w-full object-cover object-center" src={item.Image} alt="blog" />
        <div class="mt-8">
                     <h1 class="title-font text-lg font-medium text-white mb-3">{item.title}</h1>
            <p class="leading-relaxed mb-3 text-gray-500">
                {item.deskripsi}
            </p>

            <div class="flex  justify-center gap-2 sm:gap-4 mt-8">
     <div
          class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
          {item.Bahasa1}
        </div>
        <div
          class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
          {item.Bahasa2}
        </div>
        <div
          class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
          {item.Bahasa3}
        </div>
         
        </div>

            <div class="flex items-center flex-wrap pt-8">
                <a href={item.link} class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                   Link Github
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
              
            </div>
        </div>
    </div>
</div>
      </div>
      </div>


           
          ))};
        </div>

        {visibleCount < data.length && (
    <div className="w-full text-center">
      <button type="button" onClick={this.showMore} className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
    </div>
    )}
    </div>
</section>



    
  
//     <div class="container mx-auto w-50 h-50 py-10" id="portfolio">
//         <div class=" py-8  border-y border-gray-100 dark:border-gray-800  justify-center">
                   
//                    <h3 class="text-center text-xs md:text-xl font-semibold text-gray-700 dark:text-white">Portfolio
//                    </h3>
//                    <p class="text-gray-700 mt-5 text-center  dark:text-slate-400">My Project Website / Aplication
//                     </p>
//                    </div>

                   
//            <div id="main" class="m-8 md:grid grid-cols-3 gap-3 justify-evenly"> 

//            {data.map((item) =>(
// <div class=" bg-gray-200 dark:bg-gray-900 flex flex-wrap items-center justify-center">
//   <div class="container max-w-lg bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
//     <div class="h-2/4 sm:h-64 overflow-hidden">
//       <img class="w-full rounded-t"
//         src={item.Image}
//         alt="Photo by aldi sigun on Unsplash" />
//     </div>
//     <div class="flex  justify-start px-5 -mt-12 mb-5">
//       <span clspanss="block bg-dark-950  h-32 w-32">
//         <img alt="Photo by aldi sigun on Unsplash"
//           src={item.icon}
//           class="mx-auto object-cover shrink-0   rounded-md h-24 w-24 bg-dark-950 shadow-neutral-950 shadow-xl  p-3" />
//       </span>
//     </div>
//     <div class="">
//       <div class="px-7 mb-8">
//         <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">{item.title}</h2>
       
//         <p class="mt-6 mb-8 text-gray-600 dark:text-gray-500">{item.deskripsi}</p>
//         {/* <div
//           class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
//           bethgreene@gmail.com
//         </div> */}
//          <a href={item.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-purple-700 dark:text-gray-300 dark:hover:bg-purple-600 dark:hover:text-gray-200">
//                              Link Github
//                               <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                              </svg>
//                          </a>
//         <div class="flex  justify-center gap-2 sm:gap-4 mt-8">
//         <div
//           class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
//           {item.Bahasa1}
//         </div>
//         <div
//           class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
//           {item.Bahasa2}
//         </div>
//         <div
//           class="justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
//           {item.Bahasa3}
//         </div>
         
//         </div>
//       </div>
// </div>
// </div>
// </div>

// ))};




//             </div>
//         </div>
   

  );
}
}

export default Portfolio;
