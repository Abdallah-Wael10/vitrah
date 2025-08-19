import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full  min-h-screen bg-diethub bg-cover flex items-center justify-center py-20 max-[900px]:flex-wrap">
      <div className="w-1/2 h-max pb-5  flex justify-center items-center max-[900px]:w-[100%]">
        <div className="w-[60%] relative max-[900px]:w-full  flex justify-center items-center rounded-3xl p-4 shadow-2xl backdrop-blur-sm border border-gray-200/20">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <video
                    src="/Vitrahvid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full  object-fill transition-transform duration-700 group-hover:scale-105"
                  />


                </div>

                {/* Video Info Badge */}
                <div className="absolute -bottom-4 left-8 bg-transparent rounded-2xl px-6 py-3  ">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">

                  </div>
                </div>
              </div>
              </div>
              <div className="w-1/2 h-max pb-5 flex  p-20 mr-5 max-[900px]:p-[20px]  rounded-[20px]  justify-center items-center max-[900px]:w-[100%]">
                        <div className="lg:col-span-1 order-1 lg:order-2 text-center lg:text-right">
            <div className="space-y-6    ">
              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r text-white from-gray-800 to-gray-600 bg-clip-text ">
                   صحة
                </span>
                <span className="bg-gradient-to-r max-[900px]:text-white from-[#ff5003] to-[#e6460a] bg-clip-text text-transparent mx-3">
                  ابنك
                </span>
                <br />
                <span className="bg-gradient-to-r text-white pl-3 from-gray-800 to-gray-600 bg-clip-text ">
                     هي بداية  
                </span>
                <span className="bg-gradient-to-r from-[#ff5003] to-[#e6460a] text-white bg-clip-text ">
                  ثقته بنفسه 
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white font-bold leading-relaxed">
                نحن نؤمن بأن الصحة الجيدة هي الأساس لبناء الثقة والنجاح في
                الحياة
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 justify-center lg:justify-end items-center">
                <a href="#form" className="w-full lg:w-auto group relative bg-gradient-to-r from-[#ff5003] to-[#e6460a] text-white px-8 py-4 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#ff5003]/30 transform hover:-translate-y-1">
                  <span className="relative z-10">ابدأ رحلة الصحة</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>

 
              </div>
            </div>
          </div>
              </div>
    </section>
    
  );
};

export default HeroSection;