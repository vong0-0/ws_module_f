import { CallToActionButton } from "../Buttons";

import useViewport from "../../hook/useViewport";

export default function CallToAction() {
  const { isMobile } = useViewport();
  return (
    <>
      {/* Call to Action section */}
      <section aria-label="Call to action">
        <div className="relative w-full h-screen">
          {/* Cover image section */}
          <img
            src={isMobile ? "images/cover-low-res.jpg" : "images/cover.jpg"}
            alt="A street in Lyon, Farnce, lined with historic buildings, small stores and cafes, and parked green scooter"
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Call to Action button */}
          <CallToActionButton />
        </div>
      </section>
    </>
  );
}
