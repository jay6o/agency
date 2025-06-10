'use client';
import { useEffect } from "react";

export default function CalendlyForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className="calendly-inline-widget"
      id="contact"
      data-url="https://calendly.com/d/cssy-c3t-wvx?text_color=000000"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
