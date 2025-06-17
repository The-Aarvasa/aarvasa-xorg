export const AgentCard = ({ agent }) => (
  <div className="bg-white w-[279px] rounded-xl shadow-md p-4 flex flex-col items-center">
    <img
      src={agent.image}
      alt={agent.name}
      className="w-28 h-32 object-cover rounded-xl mb-4"
    />
    <div className="text-lg font-semibold">{agent.name}</div>
    <div className="flex items-center mt-1">
      <span className="text-yellow-500 font-bold mr-1">{agent.rating}</span>
      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.381-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z"/>
      </svg>
    </div>
    <div className="text-sm text-gray-600 mt-2">{agent.priceRange}</div>
    <div className="text-sm text-gray-400">{agent.sales}</div>
  </div>
);