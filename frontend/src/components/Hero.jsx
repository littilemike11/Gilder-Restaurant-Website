import restaurant_gilder from "/src/assets/restaurant_gilder.jpg"

export default function Hero(){
    return(
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${restaurant_gilder})`,
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">The Restaurant at Gilder</h1>
                <p className="mb-5">
                An exciting new table-service dining option at the American Museum of Natural History
                </p>
                <button className="btn btn-primary">Make a Reservation</button>
                </div>
            </div>
            </div>
    )
}