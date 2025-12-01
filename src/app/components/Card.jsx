export default function Card({icon, title, desc}) {
    return (
        <div className="bg-[#f8fafc] rounded-xl shadow p-6 hover:shadow-lg hover:translate-y-1 transition-all cursor-pointer space-y-4">
            <div className="text-4xl text-blue-600">
                <i className={icon}/>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <div className="text-gray-600 space-y-1">
            <p>✓ {desc.d1}</p>
            <p>✓ {desc.d2}</p>
            <p>✓ {desc.d3}</p>
            <p>✓ {desc.d4}</p>
            </div>
        </div>
    )
}
