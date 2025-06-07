import { useEffect, useState } from "react";

const mobileBreakpoint = 640;

export default function useViewport() {
  // Initialize state to check if the current viewport is less than the mobile breakpoint
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileBreakpoint
  );

  useEffect(() => {
    // Handle function to update isMobile state on window resize
    function handleResize() {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    }

    // Add event listener to detect window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return whether the current viewport is mobile viewport or not
  return { isMobile };
}
