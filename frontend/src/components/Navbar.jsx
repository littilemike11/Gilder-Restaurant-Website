import Hero from "./Hero";
import HoursLocation from "./HoursLocation";
import Menu from "./Menu";
import Press from "./Press";
import Footer from "./Footer";
import TranslateWidget from "./TranslateWidget";

export default function Navbar() {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-300 w-full text-xl">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <TranslateWidget />
                        <div className="mx-2 flex-1 px-2">The Restaurant at Gilder</div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal gap-2 text-xl">
                                {/* Navbar menu content here */}
                                <li><a>Menu</a></li>
                                <li><a>Hours of Operation & Location</a></li>
                                <li><a>Press</a></li>
                                <li><a className="btn btn-primary" href="https://resy.com/cities/new-york-ny/venues/the-restaurant-at-gilder">Make a Reservation</a></li>

                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <div className="flex flex-col gap-y-12">
                        <Hero />
                        <Menu />
                        <HoursLocation />
                        <Press />
                        <Footer />
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 gap-y-6 p-4 text-xl">
                        {/* Sidebar content here */}
                        <li><a>Menu</a></li>
                        <li><a>Hours of Operation & Location</a></li>
                        <li><a>Press</a></li>
                        <li><a className="btn btn-primary text-xl" href="https://resy.com/cities/new-york-ny/venues/the-restaurant-at-gilder">Make a Reservation</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
