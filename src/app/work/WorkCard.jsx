export default function WorkCard({ image, title }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <div className="w-full h-[190px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-sm sm:text-base italic text-gray-800 leading-relaxed">
          {title}
        </p>
      </div>
    </div>
  );
}
