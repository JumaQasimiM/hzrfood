import { useEffect, useState, useRef } from 'react';
import FoodCard from '../components/FoodCard'
import { Link } from 'react-router-dom';
const Home = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  // search 
  const [search, setSearch] = useState("");
  // create ref for focus on search bar
  const searchRef = useRef();
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
      .then(response => response.json())
      .then(data => setFoods(data.meals));
    setLoading(false);
    // focus on search bar
    searchRef.current.focus();
  }, []);
  // filter by category
  const filteredFoods = selectedCategory === "all" ?
    foods : foods.filter(food => food.strCategory === selectedCategory);

  // // search by name and category
  const searchedFoods = filteredFoods.filter((food) => {
    return food.strMeal.toLowerCase().includes(search.toLowerCase())
      || food.strCategory.toLowerCase().includes(search.toLowerCase())
      || food.strArea.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <div className="flex flex-col flex-wrap md:flex-row min-h-screen flex p-2 px-1">
      {/* filter section */}
      <div className='w-full md:w-1/4 flex flex-col text-left font-bold'>
        {/* <h2 className='text-xl text-orange-900 font-semibold '>Filter Kategorie </h2> */}
        <div className='flex flex-col sm:flex sm:flex-row sm:space-x-2 md:flex md:flex-col space-y-2 w-full mt-2'>
          <button className='bg-orange-300 md:px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("all")}>All</button>
          <button className='bg-orange-300 px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("Miscellaneous")}>Miscellaneous</button>
          <button className='bg-orange-300 px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("Side")}> Side </button>
          <button className='bg-orange-300 px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("Vegetarian")}>Vegetarian</button>
          <button className='bg-orange-300 px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("Beef")}>Beef</button>
          <button className='bg-orange-300 px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("Pasta")}>Pasta</button>
        </div>
      </div>
      {/* food cards */}
      <div className='flex flex-col w-full sm:w-4/4 md:w-3/4 px-1 my-2'>
        <div className='w-full py-3 px-2 bg-orange-100 text-orange-900 font-bold'>
          <input type="text" className='text-green-800 font-bold w-full placeholder:font-bold md:p-2 border-b-3 border-b-orange-500 md:w-1/2 focus:outline-none'
            placeholder='Search...'
            ref={searchRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>

          {loading && <p className='font-bold text-2xl text-orange-500'>Loading... </p>}
          {
            searchedFoods.map((food) => (
              <Link to={`/foods/${food.idMeal}`} key={food.idMeal}>
                <FoodCard
                  title={food.strMeal}
                  image={food.strMealThumb}

                  description={food.strInstructions.substring(0, 100)}
                  country={food.strArea}
                  category={food.strCategory}
                />
              </Link>
            ))
          }

        </div>
        <p className='text-center font-semibold text-black bg-teal-500 my-3 p-2'>Totle Founded Food :  {filteredFoods.length}</p>
      </div>

    </div >
  )
}
export default Home;