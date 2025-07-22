'use client';
import { useEffect } from "react";
import AOS from "aos";

export default function TypeForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    script.onload = () => {
      AOS.refresh();

      const interval = setInterval(() => {
      const iframe = document.querySelector<HTMLIFrameElement>('.typeform-inline-widget iframe');
        if (iframe) {
          iframe.style.overflow = 'hidden';
          iframe.style.border = 'none';
          iframe.style.scrollbarWidth = 'none';
          iframe.setAttribute('scrolling', 'no'); // important
          iframe.setAttribute("height", "100%");
          iframe.setAttribute("width", "100%");
          clearInterval(interval);
        }
      }, 100);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className="typeform-inline-widget w-screen h-screen overflow-hidden"
      id="contact"
      data-tf-live="01JXZHKGRG3AZET4TYR3A8FANW"
    />
  );
}
