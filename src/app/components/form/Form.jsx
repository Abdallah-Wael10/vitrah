"use client";
import React, { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    (function (w, d, u) {
      var s = d.createElement("script");
      s.async = true;
      s.setAttribute("data-b24-form", "inline/9/fkvwvi");
      s.setAttribute("data-skip-moving", "true");
      s.setAttribute("data-b24-form-container", "bitrix-form-root"); // هنا الإضافة المهمة
      s.src = u + "?" + ((Date.now() / 180000) | 0);
      var h = d.getElementsByTagName("script")[0];
      h.parentNode.insertBefore(s, h);
    })(
      window,
      document,
      "https://cdn.bitrix24.com/b31758109/crm/form/loader_9.js"
    );
  }, []);

  return (
      <div id="bitrix-form-root"></div>

  );
};

export default Form;
