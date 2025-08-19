"use client";
import React, { useEffect, useRef } from "react";

const Form = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-b24-form", "inline/11/igp0nk");
    script.setAttribute("data-skip-moving", "true");
    script.src =
      "https://cdn.bitrix24.com/b31758109/crm/form/loader_11.js?" +
      ((Date.now() / 180000) | 0);

    if (formRef.current) {
      formRef.current.appendChild(script);
    }

    return () => {
      if (formRef.current && script.parentNode === formRef.current) {
        formRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="w-full h-max bg-[#1C1C1C]  pt-5">
      <div className="w-full h-max pb-5 flex justify-center items-center">
        
        {/* سيتم حقن الفورم هنا */}
        <div ref={formRef} className="w-full "></div>
      </div>
    </section>
  );
};

export default Form;
