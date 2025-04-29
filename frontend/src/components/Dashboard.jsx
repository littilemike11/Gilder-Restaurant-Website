import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMenu, updateFoodItem, deleteFoodItem, AddFoodItem } from "../api";
import { FaEye, FaEyeSlash, FaCaretDown, FaPlus, FaTrashAlt } from "react-icons/fa";
import AddItemForm from "./AddItemForm";
import DeleteItemForm from "./DeleteItemForm";
import UpdateItemForm from "./UpdateItemForm";
export default function Dashboard() {
    const [menu, setMenu] = useState([])
    const itemTypes = [
        "First",
        "Second",
        "Chef Special",
        "Dessert",
        "Specialty Beverage",
        "Side",
        "Addon",
    ];
    const fetchMenu = async () => {
        const response = await getMenu();
        setMenu(response.data)
        console.log(response.data)

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
                            <th>{/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                                {/* For TSX uncomment the commented types below */}
                                <button className="btn" popovertarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                                    Type <FaCaretDown />
                                </button>

                                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                                    {itemTypes.map((type, index) => (
                                        <li key={index}><a>{type}</a></li>
                                    ))}

                                </ul></th>
                            <th>Description</th>
                            <th>Price($)</th>
                            <th>Vegan</th>
                            <th>Vegetarian</th>
                            <th>Hidden</th>
                            <th> <AddItemForm itemTypes={itemTypes} AddFoodItem={AddFoodItem} menu={menu} setMenu={setMenu} /> </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {menu.map((item, index) => (
                            <tr key={index}>
                                <th>
                                    {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
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
                                            <div className="text-sm opacity-50">{item.type}</div>
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