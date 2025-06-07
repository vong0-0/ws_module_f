export default function MapPin({ children }) {
  return (
    <div className="flex justify-center items-center w-[30px] h-[30px] bg-red-300 -rotate-45 rounded-t-full rounded-br-full">
      <p className="font-bold rotate-45 text-sm sm:text-base">{children}</p>
    </div>
  );
}
