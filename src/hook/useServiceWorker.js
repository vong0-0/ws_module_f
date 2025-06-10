import { useEffect } from "react";

// This hook use to register a servie worker
export default function useServiceWorker() {
  useEffect(() => {
    // Check if the browser supports service worker
    if ("serviceWorker" in navigator) {
      // Register a service worker
      navigator.serviceWorker
        .register("service-worker.js")
        .then(() => {
          console.log("[SERVICE WORKER] Registration successful");
        })
        .catch((error) => {
          console.error(`[SERVICE WORKER] Registration failed: ${error}`);
        });
    }
  }, []);

  return null;
}
