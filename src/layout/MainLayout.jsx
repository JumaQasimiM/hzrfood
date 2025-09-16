import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        {/* main content goes here */}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}




