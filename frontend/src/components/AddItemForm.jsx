import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function AddItemForm({ isAdmin, itemTypes, AddFoodItem, menu, setMenu }) {
    const [name, setName] = useState("");
    const [itemType, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [preview, setPreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            console.log(file)
            console.log(preview)
            setImageFile(file); // Save actual file to state
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // most be FormData for images instead of regular js object
        const formData = new FormData();
        formData.append("name", name);
        formData.append("type", itemType);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("isVegan", vegan);
        formData.append("isVegetarian", vegetarian);
        formData.append("isHidden", hidden);
        if (imageFile) {
            formData.append("image", imageFile); // 🔥 this must match `.single("image")`
            console.log(typeof imageFile)
        }

        try {
            if (isAdmin) {
                const response = await AddFoodItem(formData); // 👈 this sends FormData
                console.log("Created Item", response.data);
                setMenu([...menu, response.data.data]);
            } else {
                setMenu([...menu, formData]);
                console.log("Created Item (mock)", formData);
            }

            document.getElementById('my_modal_4').close();

            // Reset form
            setName("");
            setType("");
            setDescription("");
            setPrice("");
            setVegan(false);
            setVegetarian(false);
            setHidden(false);
            setPreview(null);
            setImageFile(null);
        } catch (error) {
            console.error("Creation Failed", error);
        }
    };


    return (
        <>
            <button className="btn btn-circle btn-sm btn-ghost" onClick={() => document.getElementById('my_modal_4').showModal()}>
                <FaPlus />
            </button>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-max ">
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
                            <label className="label">Image</label>
                            <input
                                type="file"
                                className="file-input"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <div className="avatar mt-4 justify-center">
                                <div className="w-24 rounded overflow-hidden">
                                    {preview && <img src={preview} alt="Preview" />}
                                </div>
                            </div>


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
            </dialog >
        </>
    );
}
