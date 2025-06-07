import useViewport from "../hook/useViewport";

export default function EventCard({ lowResImgUrl, highResImgurl, title }) {
  // Use this hook to check current viewport is mobile or not
  const { isMobile } = useViewport();

  return (
    <a
      href="/"
      className="w-full h-full inline-block px-2 py-2 border border-solid border-zinc-400 rounded-lg"
    >
      <img
        src={
          isMobile
            ? `images/latest-events-images/${lowResImgUrl}`
            : `images/latest-events-images/${highResImgurl}`
        }
        className="rounded-lg"
        alt=""
        loading="lazy"
      />
      <p className="py-2 font-bold">{title}</p>
    </a>
  );
}
