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
      <img src={restaurant_gilder} alt="image of Gilder Restaurant from within" />
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage: restaurant_gilder,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </>

  )
}


