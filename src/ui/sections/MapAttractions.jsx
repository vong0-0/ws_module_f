import useViewport from "../../hook/useViewport";

import AttractionCard from "../AttractionCard";
import MapPin from "../MapPin";

// Data for attraction card
const attractionInfo = [
  {
    lowResImgUrl: "attraction-a-low-res.jpg",
    highResImgUrl: "attraction-a.jpg",
    imgDes: "parc de la tête d'or",
    title: "parc de la Tete d'Or",
  },
  {
    lowResImgUrl: "attraction-b-low-res.jpg",
    highResImgUrl: "attraction-b.jpg",
    imgDes: "Street in Lyon lined with restaurants and cafes",
    title: "Street",
  },
  {
    lowResImgUrl: "attraction-c-low-res.jpg",
    highResImgUrl: "attraction-c.jpg",
    imgDes: "The river in Lyon",
    title: "River",
  },
  {
    lowResImgUrl: "all-attractions-low-res.jpg",
    highResImgUrl: "all-attractions.jpg",
    imgDes: "In a place in Lyon, there is a statue of an equestrian.",
    title: "All Attractions",
  },
];

export default function MapAttractions() {
  // Use this hook to check current viewport is mobile or not
  const { isMobile } = useViewport();

  return (
    <section aria-labelledby="map-attraction-header">
      <div className="py-8">
        <header className="text-center" aria-labelledby="map-attraction-header">
          <h2 id="map-attraction-header" className="text-5xl font-bold mb-8">
            Map Attractions
          </h2>
        </header>

        {/* Attractions map */}
        <div className="relative max-w-[950px] w-11/12 mx-auto overflow-hidden">
          {/* Map */}
          <img
            src={
              isMobile
                ? "images/attraction-images/lyon-map-low-res.jpg"
                : "images/attraction-images/lyon-map.jpg"
            }
            alt="A map of Lyon, which has three tourist spots marked with pins."
            loading="lazy"
            className="scale-150 translate-x-[20%] translate-y-[10%]"
          />

          {/* Attraction cards */}
          <div
            className="absolute inset-1 sm:inset-[10px] w-[40%] sm:w-[43%] grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4"
            aria-label="Attraction cards"
          >
            {attractionInfo.map((attraction) => (
              <AttractionCard
                key={attraction.title}
                lowResImg={attraction.lowResImgUrl}
                highResImg={attraction.highResImgUrl}
                imgDes={attraction.imgDes}
                title={attraction.title}
              />
            ))}
          </div>

          {/* Map pins */}
          <div className="absolute top-[6%] right-[11%]" aria-hidden="true">
            <MapPin>A</MapPin>
          </div>
          <div className="absolute top-[45%] right-[25%]" aria-hidden="true">
            <MapPin>B</MapPin>
          </div>
          <div className="absolute top-[3%] right-[38%]" aria-hidden="true">
            <MapPin>C</MapPin>
          </div>
        </div>
      </div>
    </section>
  );
}
