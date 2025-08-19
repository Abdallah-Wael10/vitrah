"use client";
import React, { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-b24-form", "inline/9/fkvwvi");
    script.setAttribute("data-skip-moving", "true");
    script.setAttribute("data-b24-form-container", "bitrix-form-root");
    script.src =
      "https://cdn.bitrix24.com/b31758109/crm/form/loader_9.js?" +
      ((Date.now() / 180000) | 0);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full h-max pt-5 pb-5 flex justify-center items-center ">
      <div className="w-full h-max flex justify-center items-center">
        {/* هنا هيظهر الفورم من Bitrix */}
        <div id="bitrix-form-root" className="w-full"></div>
      </div>
    </section>
  );
};

export default Form;