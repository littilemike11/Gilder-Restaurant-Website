import menu from "/src/menu.js"
import MenuItem from "./MenuItem"
import { FaDownload } from "react-icons/fa6";
export default function Menu() {

    return (
        <>
            <h1 className="sectionTitle">Menu</h1>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border ">
                <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="First" defaultChecked />
                <div className="tab-content border-base-300 bg-base-200 p-10">
                    <h2 className="text-left p-4 text-3xl">First</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {menu.filter((item => item.type == "First")).map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Second" />
                <div className="tab-content border-base-300 bg-base-200 p-10">
                    <h2 className="text-left p-4 text-3xl">Second</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {menu.filter((item => item.type == "Second")).map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Chef Specials" />
                <div className="tab-content border-base-300 bg-base-200 p-10">
                    <h2 className="text-left p-4 text-3xl">Chef Specials</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {menu.filter((item => item.type == "Chef Specials")).map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Dessert" />
                <div className="tab-content border-base-300 bg-base-200 p-10">
                    <h2 className="text-left p-4 text-3xl">Desserts</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {menu.filter((item => item.type == "Desserts")).map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Specialty Beverages" />
                <div className="tab-content border-base-300 bg-base-200 p-10">
                    <h2 className="text-left p-4 text-3xl">Specialty Beverages</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {menu.filter((item => item.type == "Specialty Beverages")).map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </div>
                </div>
                <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Sides" />
                <div className="tab-content border-base-300 bg-base-200 p-10">
                    <h2 className="text-left p-4 text-3xl">Sides</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {menu.filter((item => item.type == "Sides")).map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </div>
                </div>
                <input type="radio" name="my_tabs_2" className="tab text-xl" aria-label="Addons" />
                <div className="tab-content border-base-300 bg-base-200 p-10">
                    <h2 className="text-left p-4 text-3xl">Addons</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {menu.filter((item => item.type == "Addons")).map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </div>
                </div>

            </div>
            <a className="flex justify-center items-center link link-hover link-info w-fit m-auto p-2" title="Download The Restaurant at Gilder Menu" target="_blank" href="https://www.amnh.org/content/download/413316/5979973/file/the-restaurant-at-gilder-menu.pdf">
                <FaDownload />
                The Restaurant at Gilder Menu
            </a>
        </>
    )
}