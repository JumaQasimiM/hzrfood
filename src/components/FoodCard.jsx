const FoodCard = ({ title, image, description, country, category }) => {
  return (
    <div className="w-[100%] h-full mx-auto mt-2 bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out ">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">{category}</span>
          <span className='bg-green-400 text-black px-2 py-1 rounded'> {country} </span>
        </div>
        <button
          className="w-full bg-orange-500 text-white cursor-pointer text-sm py-2 rounded hover:bg-orange-600 transition">
          View Recipe
        </button>
      </div>
    </div>
  );
};
export default FoodCard;
