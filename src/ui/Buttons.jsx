import { useEffect, useRef, useState } from "react";

export function CallToActionButton() {
  // Initialize mouse position on button
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    const button = buttonRef.current;

    // Handle function to update mouse position relative to the button
    function handMouseMove(e) {
      const rect = button.getBoundingClientRect();
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }

    // Add event listener to track mouse movement ovet the button
    button.addEventListener("mousemove", handMouseMove);

    // Clean up the event listener on component unmount
    return () => button.removeEventListener("mousemove", handMouseMove);
  });

  return (
    <a
      ref={buttonRef}
      href="/"
      role="button"
      className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-300"
    >
      <div className="relative px-12 py-6 rounded-lg bg-zinc-300 overflow-hidden">
        <p className="z-50 font-bold sm:text-lg relative">Call to Action</p>

        {/* Soft white effect that appears when button is hovered */}
        <div className="z-20 absolute inset-1 rounded-lg bg-zinc-300 overflow-hidden">
          <div
            style={{
              left: pos.x,
              top: pos.y,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(white,transparent,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        {/* The color shows up when the cursor gets close to the the button's edage */}
        <div
          style={{
            left: pos.x,
            top: pos.y,
          }}
          className="z-10 absolute -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(red,transparent,transparent)] opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
      </div>
    </a>
  );
}

// Reads out a given phone number and address using Speech API with customizabel language, reading speed, tone of voice
export function ReadItLoud({
  text, // The text to be spoken aloud
  lang = "fr-FR", //Language code
  readingSpeed = 1, // Reading speed
  voiceTone = 1, // Tone of vocice
}) {
  // Function that is read the given massage when button is clicked
  function handleReadIt() {
    // Create a speech message with the given text
    const message = new SpeechSynthesisUtterance(text);

    // Set the language
    message.lang = lang;

    // Set reading speed
    message.rate = readingSpeed;

    // Set tone of voice
    message.pitch = voiceTone;

    // Speak the message using browser's TTS engine
    window.speechSynthesis.speak(message);
  }
  return (
    <button
      className="px-8 py-4 bg-blue-700 my-8 rounded-lg border border-solide border-blue-600 text-white font-bold hover:bg-transparent hover:text-black hover:shadow-[0_5px_0px_#2563eb] hover:translate-y-[-5px] transition-all duration-300"
      onClick={handleReadIt}
      aria-label="Reads the phone number and address aloud"
    >
      Read it loud
    </button>
  );
}
