import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuPlaceholder from "../menu.js"
import { getMenu, updateFoodItem, deleteFoodItem, AddFoodItem } from "../api";
import { FaEye, FaEyeSlash, FaCaretDown } from "react-icons/fa";
import AddItemForm from "./AddItemForm";
import DeleteItemForm from "./DeleteItemForm";
import UpdateItemForm from "./UpdateItemForm";
export default function Dashboard({ isAdmin = false }) {
    const [menu, setMenu] = useState(isAdmin ? [] : menuPlaceholder)
    const itemTypes = [
        "First",
        "Second",
        "Chef Special",
        "Dessert",
        "Specialty Beverage",
        "Side",
        "Addon",
    ];
    const [filterType, setFilterType] = useState(""); // empty = show all
    const filteredMenu = filterType ? menu.filter(item => item.type === filterType) : menu;

    const fetchMenu = async () => {
        if (!isAdmin) return
        const response = await getMenu();
        setMenu(response.data)

    }
    useEffect(() => {
        fetchMenu()
    }, [])
    return (
        <>
            <div className="p-8">
                <Link to={"/"}>
                    <button className="btn btn-secondary">Back to Site</button>
                </Link>
            </div>


            <div className="overflow-x-auto w-full py-4">
                <table className="table table-zebra bg-base-100 rounded-box shadow-md">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>
                                <select
                                    className="select w-32 rounded-box bg-base-100 shadow-sm"
                                    value={filterType}
                                    onChange={(e) => setFilterType(e.target.value)}>

                                    <option value={""}>All</option> {/* Reset filter */}

                                    {itemTypes.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </th>
                            <th>Description</th>
                            <th>Price($)</th>
                            <th>Vegan</th>
                            <th>Vegetarian</th>
                            <th>Hidden</th>
                            <th> <AddItemForm isAdmin={isAdmin} itemTypes={itemTypes} AddFoodItem={AddFoodItem} menu={menu} setMenu={setMenu} /> </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {filteredMenu.map((item, index) => (
                            <tr key={index}>
                                <th>
                                    {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}

                                    {item.img &&
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.img}
                                                    alt={`image of ${item.name}`} />
                                            </div>
                                        </div>}
                                </th>

                                <td>
                                    <div className="flex items-center gap-3">
                                        {/* <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div> */}
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="badge badge-ghost h-fit w-max badge-sm">{item.type}</div>
                                </td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.isVegan && <div className="badge badge-primary badge-sm mask mask-circle">VG</div>}</td>
                                <td>{item.isVegetarian && <div className="badge badge-primary badge-sm mask mask-circle">V</div>}</td>
                                <td>{item.isHidden ? <FaEyeSlash /> : <FaEye />}</td>
                                <td>
                                    <UpdateItemForm item={item} updateFoodItem={updateFoodItem} itemTypes={itemTypes} menu={menu} setMenu={setMenu} />
                                </td>
                                <th>
                                    <DeleteItemForm id={item._id} name={item.name} deleteFoodItem={deleteFoodItem} menu={menu} setMenu={setMenu} />
                                </th>

                            </tr>
                        ))}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Vegan</th>
                            <th>Vegetarian</th>
                            <th>Hidden</th>
                            <th><AddItemForm itemTypes={itemTypes} AddFoodItem={AddFoodItem} menu={menu} setMenu={setMenu} /></th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="p-8">
                <Link to={"/"}>
                    <button className="btn btn-secondary">Back to Site</button>
                </Link>
            </div>
        </>
    )
}