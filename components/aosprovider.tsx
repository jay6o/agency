'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      disable: false,
      easing: "ease-out-cubic",
    });
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return null;
}
