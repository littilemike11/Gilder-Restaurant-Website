import './App.css'
import Navbar from './Navbar'
import restaurant_gilder from "./assets/restaurant_gilder.jpg"
export default function App() {
  return (
    <>
      <Navbar />
      {/* <h1 className="text-3xl font-bold underline">
        The Restaurant at Gilder
      </h1> */}
      <img src={restaurant_gilder} alt="" />
    </>

  )
}


