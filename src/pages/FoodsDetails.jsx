import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
export default function FoodsDetails() {
  const { id } = useParams();
  const [food, setFood] = useState({});
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => setFood(data.meals[0]));

  }, [id]);

  // ingredients 
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = food[`strIngredient${i}`];
    const measure = food[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${measure} ${ingredient}`);
    }
    // console.log(ingredients);
  }
  // loading
  if (!food) {
    return <div>Loading...</div>;
  }

  // handle Click
  const addToCart = () => {
    toast.success("Food added to cart");
  }
  const addToFav = () => {
    toast.info("Food added to favorite");
  }
  return (
    <div className='flex flex-col text-left'>

      {/* food details */}
      <div className="w-[98%] h-[300px] my-2 mx-auto relative bg-center md:h-[400px] "
        style={{
          backgroundImage: `url(${food.strMealThumb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="backdrop-blur-[4px] bg-black/50 p-10 text-center  w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-lg md:text-2xl md:text-5xl font-bold text-white mb-4">
            {food.strMeal}
          </h1>
          <p className="text-md md:text-xl text-white mb-6 max-w-2xl mx-auto font-bold">
            {food?.strInstructions?.slice(0, 100)}
          </p>
          <button className="text-sm md:text-lg bg-green-400 hover:bg-green-600 text-slate-900 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
            {food.strCategory} | {food.strArea}
          </button>
        </div>

      </div>
      {/* <img src={food.img} alt="" className='w-[90%] h-[200px] md:w-[90%] md:h-[400px] mx-auto rounded-md mt-10' /> */}
      <div className='flex flex-col sm:flex-row md:flex-row justify-between items-center mx-5'>
        <p className='text-lg mt-5 text-gray-600 font-semibold w-[90%] mx-auto'><span> {food.strArea} </span> | <span className='text-orange-500 cursor-pointer'>{food.strCategory}</span></p>
        <p className='text-lg mt-5 text-gray-600 font-semibold w-[90%] mx-auto'><span> {food.strArea} </span> | <span className='text-orange-500 cursor-pointer'>{food.strCategory}</span></p>

      </div>
      <div className='leading-8 w-[90%] mx-auto'>
        <h1 className='text-xl md:text-2xl font-bold my-5 text-orange-500'>{food.strMeal}</h1>
        <p className='text-lg mt-5 text-gray-600 font-semibold selection:bg-green-400 selection:text-gray-800'
        >{food?.strInstructions?.slice(0, 500)}
          <br />
          <button
            onClick={() => window.open(`${food.strSource}`, "_blank")}
            className='text-orange-500 cursor-pointer '>Read More</button> </p>
        {
        /* youtube video   */}
        {food.strYoutube &&
          (
            <div>
              <iframe
                className='w-[90%] h-[200px] md:w-[90%] md:h-[400px] mx-auto rounded-md mt-10'
                src={food.strYoutube.replace("watch?v=", "embed/")}
                title={food.strMeal + " Youtob Video for this food"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )
        }
        {/* food details section */}
        <h2 className='text-lg md:text-2xl font-bold text-orange-500 mt-5 font-semibold'>Ingredients | Zutaten</h2>
        <ul>
          {ingredients.map((item, index) =>
          (
            <li key={index} className='text-lg mt-3 text-gray-600 font-semibold'>{index + 1} - {item} </li>
          ))}
        </ul>

        <div>
          <button
            onClick={addToCart} className='w-2/5 bg-orange-500 text-white text-sm py-2 my-3 rounded hover:bg-orange-600 transition mx-2'>Add to Cart</button>
          <button
            onClick={addToFav} className='w-2/5 bg-orange-500 text-white text-sm py-2 my-3 rounded hover:bg-orange-600 transition mx-2'> Add to Favorite </button>
        </div>
      </div>
    </div >
  )
}
