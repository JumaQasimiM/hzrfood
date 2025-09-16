import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [uError, setUError] = useState();
  const [passError, setPassError] = useState();
  const Navigate = useNavigate();

  // handle username and password
  const handleUsername = (e) => {
    setUsername(e.target.value);

  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setUError("Username is required");
      return;
    }
    if (!password) {
      setPassError("Password is required");
      return;
    }
    else {
      setUError("");
      setPassError("");
    }
    if (username === 'juma' && password === '1234') {
      toast.success("Login successful");
      localStorage.setItem("user", username);
      Navigate("/foods");
    }
    else {
      toast.error("Invalid username or password");
    }

  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center]">
      <div className='w-full h-full justify-center max-w-md  md:h-[50vh] md:max-w-2xl flex flex-col space-y-2 p-6 backdrop-blur-sm bg-black/40'>
        <h2 className='text-2xl text-orange-600 font-bold mb-10'>Sign In</h2>
        <form onSubmit={handleSubmit}
          className='flex flex-col space-y-2'
        >
          <input type="text"
            value={username}
            onChange={handleUsername}
            placeholder='Email'
            className='w-[90%] mx-auto border border-gray-500 rounded text-white px-3 py-2 focus:outline-none'
          />
          <span className='text-red-500 text-sm text-left mx-2'>{uError}</span>
          <input type="password"

            value={password}
            onChange={handlePassword}
            placeholder='Password'
            className='w-[90%] mx-auto border border-gray-500 rounded text-white px-3 py-2 focus:outline-none'
          />
          <span className='text-red-500 text-sm text-left mx-2'>{passError}</span>
          <button className='w-[90%] mx-auto bg-orange-500 text-white cursor-pointer text-sm py-2 rounded hover:bg-orange-600 transition'>Sign In</button>
        </form>
      </div>
    </div>
  )
}
