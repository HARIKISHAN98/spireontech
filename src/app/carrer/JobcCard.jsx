"use client";

export default function JobCard({
  title,
  location,
  experience,
  type,
}) {
  return (
    <div className="bg-[#F8FAFC] rounded-xl shadow p-6 flex flex-col justify-between h-full">

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <div className="text-sm text-gray-600 space-y-1">
          <p><span className="font-medium">Location:</span> {location}</p>
          <p><span className="font-medium">Experience:</span> {experience}</p>
          <p><span className="font-medium">Type:</span> {type}</p>
        </div>
      </div>

      <button
        className="mt-6 w-full bg-blue-900 text-white py-2.5 rounded-md text-sm font-medium hover:bg-blue-800 transition" aria-label={`Apply for ${title}`} >
        Apply Now
      </button>
    </div>
  );
}
