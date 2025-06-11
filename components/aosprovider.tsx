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
      // Mobile-specific fixes
      offset: 50, // Trigger animations earlier
      anchorPlacement: 'top-bottom', // Better mobile detection
      debounceDelay: 50, // Reduce debounce for mobile
      throttleDelay: 99, // Improve performance on mobile
    });

    // Multiple refresh attempts for mobile compatibility
    const refreshAOS = () => {
      AOS.refresh();
    };

    // Refresh on window resize (mobile orientation change)
    const handleResize = () => {
      setTimeout(refreshAOS, 150);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return null;
}
