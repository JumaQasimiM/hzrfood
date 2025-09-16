import { useEffect, useState, useRef, use } from 'react';
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
    fetch('http://localhost:3000/foods')
      .then(response => response.json())
      .then(data => setFoods(data));
    setLoading(false);
    // focus on search bar
    searchRef.current.focus();
  }, []);
  // filter by category
  const filteredFoods = selectedCategory === "all" ?
    foods : foods.filter(food => food.category === selectedCategory);
  // search by name and category
  const searchedFoods = filteredFoods.filter((food) => {
    return food.title.toLowerCase().includes(search.toLowerCase())
      || food.category.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <div className="flex flex-col flex-wrap md:flex-row min-h-screen flex p-2 px-1">
      {/* filter section */}
      <div className='w-full md:w-1/4 flex flex-col text-left font-bold'>
        {/* <h2 className='text-xl text-orange-900 font-semibold '>Filter Kategorie </h2> */}
        <div className='flex flex-col sm:flex sm:flex-row sm:space-x-2 md:flex md:flex-col space-y-2 items-center w-full mt-2'>
          <button className='bg-orange-300 md:px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("all")}>All</button>
          <button className='bg-orange-300 px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("breakfast")}>Breakfast</button>
          <button className='bg-orange-300 px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("lunch")}> Lunch </button>
          <button className='bg-orange-300 px-4 py-1 hover:bg-orange-100 hover:text-orange-500 w-[90%]'
            onClick={() => setSelectedCategory("dinner")}>Dinner</button>
        </div>
      </div>
      {/* advertise */}
      <div className='hidden flex flex-col space-y-2 items-center w-full mt-2 py-2 px-2 '>
        <div className='relative'>
          <span className="absolute top-7 left-4 bg-red-500 text-white text-xs px-4 py-2 rounded-full rotate-45
             ">
            50% Rabatt für heute
          </span>
          <img
            className='w-full h-48 object-cover '
            src="https://media.istockphoto.com/id/1493574434/de/foto/auto-rauscht-entlang-der-autobahn-bei-sonnenuntergang-seitenansicht-aus-niedrigem-winkel.jpg?s=2048x2048&w=is&k=20&c=NhhuGzq9EZNkJz1YSk16WVSSv2GsYNCdRADK8XuqIZg=" alt="" />

        </div>
        <div className='relative'>
          <span className="absolute top-7 left-4 bg-red-500 text-white text-xs px-4 py-2 rounded-full rotate-45
             ">
            50% Rabatt für heute
          </span>
          <img
            className='w-full h-48 object-cover '
            src="https://media.istockphoto.com/id/1493574434/de/foto/auto-rauscht-entlang-der-autobahn-bei-sonnenuntergang-seitenansicht-aus-niedrigem-winkel.jpg?s=2048x2048&w=is&k=20&c=NhhuGzq9EZNkJz1YSk16WVSSv2GsYNCdRADK8XuqIZg=" alt="" />

        </div>
        <div className='relative'>
          <span className="absolute top-7 left-4 bg-red-500 text-white text-xs px-4 py-2 rounded-full rotate-45
             ">
            50% Rabatt für heute
          </span>
          <img
            className='w-full h-48 object-cover '
            src="https://media.istockphoto.com/id/1493574434/de/foto/auto-rauscht-entlang-der-autobahn-bei-sonnenuntergang-seitenansicht-aus-niedrigem-winkel.jpg?s=2048x2048&w=is&k=20&c=NhhuGzq9EZNkJz1YSk16WVSSv2GsYNCdRADK8XuqIZg=" alt="" />

        </div>
        <div className='relative'>
          <span className="absolute top-7 left-4 bg-red-500 text-white text-xs px-4 py-2 rounded-full rotate-45
             ">
            50% Rabatt für heute
          </span>
          <img
            className='w-full h-48 object-cover '
            src="https://media.istockphoto.com/id/1493574434/de/foto/auto-rauscht-entlang-der-autobahn-bei-sonnenuntergang-seitenansicht-aus-niedrigem-winkel.jpg?s=2048x2048&w=is&k=20&c=NhhuGzq9EZNkJz1YSk16WVSSv2GsYNCdRADK8XuqIZg=" alt="" />

        </div>

      </div>


      {/* food cards */}
      <div className='flex flex-col w-full sm:w-4/4 md:w-3/4 px-1 my-2'>
        <div className='w-full py-3 px-2 bg-orange-100 text-orange-900 font-bold'>
          <input type="text" className='font-bold w-full placeholder:font-bold md:p-2 border-b-3 border-b-orange-500 md:w-1/2 focus:outline-none'
            placeholder='Search...'
            ref={searchRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>

          {loading && <p className='font-bold text-2xl text-orange-500'>Lade die Essen... </p>}
          {
            searchedFoods.map((food) => (
              <Link to={`/foods/${food.id}`} key={food.id}>
                <FoodCard
                  title={food.title}
                  image={food.img}
                  description={food.description}
                  time={food.time}
                  category={food.category}
                />
              </Link>
            ))
          }
        </div>
      </div>

    </div >
  )
}
export default Home;