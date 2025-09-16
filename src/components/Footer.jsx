// import icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// import hooks
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Footer = () => {
  // state for newsletter form
  const [email, setEmail] = useState('');

  // handle Clicks
  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();
    // check if email is valid
    if (!email) {
      toast.error("Please enter your email");
      return
    }
    else if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return
    }
    else if (!email.includes(".")) {
      toast.error("Please enter a valid email");
      return
    }
    else if (email.length < 5) {
      toast.error("Please enter a valid email");
      return
    }
    else if (email.length > 50) {
      toast.error("Please enter a valid email");
      return
    }
    else if (email.includes(" ")) {
      toast.error("Please enter a valid email");
      return
    }
    toast.success(`Thanks for subscribing ${email}`);
    setEmail('');

  }
  return (
    <footer className="bg-orange-50 text-gray-700 mt-10 font-semibold">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4 logo text-green-600">HZR FOOD</h2>
          <p className="text-sm text-left">
            Discover delicious recipes, cooking tips, and food inspiration every day. Your culinary adventure starts here!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className='hover:text-orange-500'><Link to="/">Home</Link></li>
            <li className='hover:text-orange-500'><Link to="/about">About</Link></li>
            <li className='hover:text-orange-500'><Link to="/foods">Food List</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-2">Get the best recipes straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div className=''>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center justify-center space-x-4 text-orange-500 text-xl ">
            <a href="#"><FaFacebookF className="hover:text-orange-600" /></a>
            <a href="#"><FaInstagram className="hover:text-orange-600" /></a>
            <a href="#"><FaTwitter className="hover:text-orange-600" /></a>
            <a href="#"><FaYoutube className="hover:text-orange-600" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HZR FOOD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
