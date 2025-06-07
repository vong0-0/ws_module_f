// UI component
import SkipLink from "./ui/SkipLink";
import Navigation from "./ui/Navigation";

// Sections
import CallToAction from "./ui/sections/CallToAction";
import MapAttractions from "./ui/sections/MapAttractions";
import VideoPlayback from "./ui/sections/VideoPlayback";
import InfoAndEvents from "./ui/sections/InfoAndEvents";
import OtherInfo from "./ui/sections/OtherInfo";
import ContactUs from "./ui/ContactUs";
import Footer from "./ui/sections/Footer";

export default function App() {
  return (
    <>
      <header className="fixed left-0 top-0 w-full z-50">
        {/* Skip to main content */}
        <SkipLink />

        {/* Main navigation */}
        <Navigation />
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        className="relative z-40"
        aria-label="Main content"
      >
        {/* Call to action section */}
        <CallToAction />

        {/* Map Attractions section */}
        <MapAttractions />

        {/* Video playback section */}
        <VideoPlayback />

        {/* Essential Information and Latest Events */}
        <InfoAndEvents />

        {/* Another information section */}
        <OtherInfo />

        {/* Contact us section */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
