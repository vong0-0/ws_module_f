import { ReadItLoud } from "../Buttons";
import EventCard from "../EventCard";

const latestEventInfo = [
  {
    lowResImgUrl: "worldskills-2024-p-low-res.png",
    highResImgUrl: "worldskills-2024-p.jpg",
    imgDes: "World skills lyon 2024 and some description about this event",
    title: "Lyon accueille la finale mondiale des Worldskills 2024",
  },
  {
    lowResImgUrl: "fda-p-low-res.jpg",
    highResImgUrl: "fda-p.jpg",
    imgDes: "colorful poster of forum des associations",
    title: "Forum des associations 2024",
  },
  {
    lowResImgUrl: "lyon-kayak-p-0-low-res.jpg",
    highResImgUrl: "lyon-kayak-p-0.jpg",
    imgDes: "People padding kayaks on a river in Lyon",
    title: "Lyon Kayak",
  },
  {
    lowResImgUrl: "semaine-bleue-2024-p-low-res.jpg",
    highResImgUrl: "semaine-bleue-2024-p.jpg",
    imgDes: "A colorful drawing",
    title: "La semaine bleue 2024",
  },
  {
    lowResImgUrl: "village-des-metiers-p-low-res.jpg",
    highResImgUrl: "village-des-metiers-p.jpg",
    imgDes: "People are talking in a white booth.",
    title: "Le Village des Métiers",
  },
  {
    lowResImgUrl: "journees_portes_ouvertes_entreprises_2023_p-low-res.jpg",
    highResImgUrl: "journees_portes_ouvertes_entreprises_2023_p.jpg",
    imgDes: "People are talking in a white booth",
    title: "Les Journées Portes Ouvertes des Entreprises",
  },
];

export default function InfoAndEvents() {
  return (
    <section aria-label="Essential information and latest events section">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-11/12 mx-auto">
        {/* Essential Information */}
        <article className="flex flex-col text-center">
          <header aria-labelledby="essential-info-header">
            <h3
              id="essential-info-header"
              className="text-3xl font-bold text-center mb-4"
            >
              Essential Infomation
            </h3>

            {/* Address */}
            <address className="text-center not-italic">
              <b>Contact</b>: 04 72 10 30 30
              <br />
              <b>Address</b>: Mairie de Lyon, 69205 Lyon cedex 01
            </address>

            {/* Button that read the essential information aloud in Frech using text-to-speech*/}
            <ReadItLoud
              text={
                "Contact: 04 72 10 30 30 Address: Mairie de Lyon, 69205 Lyon cedex 01"
              }
            />
          </header>

          {/* Latest Event */}
        </article>

        {/* Latest events */}
        <article>
          <header
            className="flex flex-col items-center"
            aria-labelledby="latest-events-header"
          >
            <h3
              id="latest-events-header"
              className="text-3xl font-bold text-center mb-4"
            >
              Latest Events
            </h3>

            {/* Event cards */}
            <div className="w-full flex overflow-x-scroll gap-4 border border-solid border-black">
              {latestEventInfo.map((event) => (
                <div
                  key={event.title}
                  className="min-w-[50%] sm:min-w-[300px] max-w-[400px] bg-white py-2 pl-2"
                >
                  <EventCard
                    lowResImgUrl={event.lowResImgUrl}
                    highResImgurl={event.highResImgUrl}
                    title={event.title}
                  />
                </div>
              ))}
            </div>
          </header>
        </article>
      </div>
    </section>
  );
}
