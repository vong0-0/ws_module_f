import useViewport from "../hook/useViewport";

export default function AttractionCard({
  lowResImg,
  highResImg,
  imgDes,
  title,
}) {
  // Use this hook to check current viewport is mobile or not
  const { isMobile } = useViewport();
  return (
    <a
      href="#"
      className="group bg-white p-1 rounded-sm sm:rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
      aria-labelledby="attraction-title"
    >
      {/* Attraction image */}
      <div className="relative overflow-hidden rounded-sm sm:rounded-lg">
        <img
          src={
            isMobile
              ? `images/attraction-images/${lowResImg}`
              : `images/attraction-images/${highResImg}`
          }
          alt={imgDes}
          loading="lazy"
        />

        {/* Light effect that appears from left to right when hover the card */}
        <div className="absolute left-0 top-0 rotate-[30deg] h-[150%] -translate-x-[150%] -translate-y-[30%] w-[60%] bg-[linear-gradient(45deg,_transparent,_white)] group-hover:left-[230%] transition-all duration-300"></div>
      </div>

      {/* Attraction name */}
      <p
        id="attraction-title"
        className="text-sm sm:text-base sm:font-bold text-center"
      >
        {title}
      </p>
    </a>
  );
}
