import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'

//  import react-toastify
import { ToastContainer, Bounce } from 'react-toastify';

// import css
import './App.css'

// import componets
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Foods from './pages/Foods'
import FoodsDetails from './pages/FoodsDetails'
import About from './pages/About'
import Login from './pages/Login'
function App() {
  return (
    <>
      {/* <ToastContainer /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/foods/:id" element={<FoodsDetails />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/*
            <Route path="*" element={<NotFound404 />} />  */}
          </Route>
        </Routes>

      </Router>
    </>
  )
}

export default App
