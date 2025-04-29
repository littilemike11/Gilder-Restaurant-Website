import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function AddItemForm({ itemTypes, AddFoodItem, menu, setMenu }) {
    const [name, setName] = useState("");
    const [itemType, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const item = {
            name,
            type: itemType,
            description,
            price,
            isVegan: vegan,
            isVegetarian: vegetarian,
            isHidden: hidden
        };

        try {
            const response = await AddFoodItem(item);
            console.log("Created Item", response.data)
            setMenu([...menu, response.data.data])
            document.getElementById('my_modal_4').close();

            // Reset form (optional)
            setName("");
            setType("");
            setDescription("");
            setPrice("");
            setVegan(false);
            setVegetarian(false);
            setHidden(false);
        } catch (error) {
            console.error("Updated Failed", error)
        }


    };

    return (
        <>
            <button className="btn btn-circle btn-sm btn-ghost" onClick={() => document.getElementById('my_modal_4').showModal()}>
                <FaPlus />
            </button>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form onSubmit={handleSubmit}>
                        <h3 className="font-bold text-lg">Add a New Menu Item!</h3>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Food details</legend>

                            <label className="label">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="input validator"
                                placeholder="Name of Item"
                            />

                            <label className="label">Type</label>
                            <select
                                className="select validator"
                                required
                                value={itemType}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option disabled value="">Choose:</option>
                                {itemTypes.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))}
                            </select>

                            <label className="label">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="textarea"
                                placeholder="Describe the dish"
                            />

                            <label className="label">Price ($)</label>
                            <input
                                type="number"
                                className="input validator"
                                required
                                min="1"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />

                            <br />
                            <div className="flex gap-4">
                                <div className="flex gap-2 items-center">
                                    <label className="label">Vegan</label>
                                    <input
                                        type="checkbox"
                                        checked={vegan}
                                        onChange={(e) => setVegan(e.target.checked)}
                                        className="checkbox"
                                    />
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="label">Vegetarian</label>
                                    <input
                                        type="checkbox"
                                        checked={vegetarian}
                                        onChange={(e) => setVegetarian(e.target.checked)}
                                        className="checkbox"
                                    />
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label className="label">Hidden</label>
                                    <input
                                        type="checkbox"
                                        checked={hidden}
                                        onChange={(e) => { setHidden(e.target.checked) }}
                                        className="checkbox"
                                    />
                                </div>
                            </div>
                        </fieldset>

                        <div className="modal-action flex justify-between w-full">
                            <button type="submit" className="btn btn-success">Create</button>
                            <button type="button" onClick={() => document.getElementById('my_modal_4').close()} className="btn btn-error">Cancel</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}
