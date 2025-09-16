import React from 'react'
import { FaAlignLeft } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const usename = localStorage.getItem('username');
  console.log(usename);
  // handle Clicks
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className='flex justify-between items-center font-bold bg-orange-100 px-5 py-5 relative text-orange-500'>
      <div className='font-bold cursor-pointer text-2xl logo text-green-600'> HZ<span className=''>R</span> FOOD</div>
      {/* Navigation links */}
      <ul className='hidden md:flex space-x-4 '>
        <li className='hover:text-white hover:bg-orange-500 px-2 py-1 rounded'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:text-white hover:bg-orange-500 px-2 py-1 rounded'>
          <Link to="/foods">Foods</Link>
        </li>
        <li className='hover:text-white hover:bg-orange-500 px-2 py-1 rounded'>
          <Link to="/about" >About</Link>
        </li>
        <li className='hover:text-white hover:bg-orange-500 px-2 py-1 rounded'>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      {/*icons */}
      {/* Mobile menu */}

      <div
        className={isOpen ? "w-[70%] md:hidden fixed top-14 left-0 sm:w-[60%] h-screen text-orange-800 font-bold bg-orange-100 ease-in-out duration-500 flex flex-col items-center z-10000"
          : "fixed top-14 bottom-0 left-[-100%] ease-in-out duration-500 w-full duration-500 z-10000"} >
        <ul className='w-1/2 mx-auto flex flex-col space-y-4 '>
          <li className='hover:text-white hover:bg-orange-500 px-2 py-1 rounded'
            onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:text-white hover:bg-orange-500 px-2 py-1 rounded'
            onClick={toggleMenu}>
            <Link to="/foods">Foods</Link>
          </li>
          <li className='hover:text-white hover:bg-orange-500 px-2 py-1 rounded'
            onClick={toggleMenu}>
            <Link to="/about">About</Link>
          </li>
          <button
            onClick={toggleMenu}
            className="w-full bg-orange-500 text-white text-sm py-2 rounded hover:bg-orange-600 transition" ><Link to={"/login"}>Sign In</Link></button>
        </ul>
      </div>

      <i className='cursor-pointer md:hidden ' onClick={() => setIsOpen(!isOpen)}><FaAlignLeft /> </i>
    </nav >
  )
}
