'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      disable: false,
      easing: "ease-out-cubic",
    });
    setTimeout(() => {
      AOS.refreshHard();
    }, 400);
  }, []);

  return null;
}
