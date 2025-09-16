import { useEffect, useState } from "react";

// impirt components
import FoodCard from "../components/FoodCard";
import { Link } from "react-router-dom";
const Foods = () => {
  // create hooks
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((response) => response.json())
      .then((data) => setFoods(data.meals));
  }, []);

  return (
    <>
      {/* slider */}
      <div className="w-full h-[300px]  my-2 mx-auto relative 
      bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center md:h-[400px]">
        <div className="backdrop-blur-sm bg-black/30 p-10 text-center  w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">
            Discover Your Next Favorite Recipe 🍽️
          </h1>
          <p className="text-md md:text-xl text-white mb-6 max-w-2xl mx-auto font-bold">
            Simple, delicious, and easy-to-follow recipes made with fresh ingredients. Perfect for home cooks of all levels!
          </p>
          <button className="opacity-100 bg-green-400 hover:bg-green-600 text-slate-900 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
            Explore Recipes
          </button>
        </div>

      </div>
      {/* food cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {foods.map((food) => (
          <Link to={`/foods/${food.idMeal}`}>
            <FoodCard
              key={food.idMeal}
              title={food.strMeal}
              image={food.strMealThumb}
              description={food.strInstructions.slice(0, 100)}
              country={food.strArea}
              category={food.strCategory}
              onClick={() => { }}
            />
          </Link>
        ))}
      </div>
    </>
  )
}
export default Foods;