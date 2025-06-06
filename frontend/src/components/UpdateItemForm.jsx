import { useState } from "react";
export default function UpdateItemForm({ isAdmin, item, updateFoodItem, itemTypes, menu, setMenu }) {
    const [name, setName] = useState(item.name);
    const [itemType, setType] = useState(item.type);
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);
    const [vegan, setVegan] = useState(item.isVegan);
    const [vegetarian, setVegetarian] = useState(item.isVegetarian);
    const [hidden, setHidden] = useState(item.isHidden);

    const [isOpen, setIsOpen] = useState(false);
    const [preview, setPreview] = useState(item.image);
    const [imageFile, setImageFile] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setImageFile(file); // Save actual file to state
        }
    };

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newItem = {}
        const formData = new FormData();
        if (isAdmin) {
            formData.append("name", name);
            formData.append("type", itemType);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("isVegan", vegan);
            formData.append("isVegetarian", vegetarian);
            formData.append("isHidden", hidden);
            if (imageFile) {
                formData.append("image", imageFile); // 🔥 this must match `.single("image")`
            }
        } else {

            newItem.name = name
            newItem.type = itemType
            newItem.description = description
            newItem.price = price
            newItem.isVegan = vegan
            newItem.isVegetarian = vegetarian
            if (imageFile) {
                newItem.image = preview // Directly use preview for non-admin
            }
        }

        try {
            if (isAdmin) {
                const response = await updateFoodItem(item._id, formData);
                // Update local menu
                setMenu(menu.map(m => m._id === item._id ? response.data.data : m));
            } else {
                // placeholder until server setup
                setMenu(menu.map(m => m.name === item.name ? newItem : m));
            }

            closeModal();
        } catch (err) {
            console.error("Update failed:", err);
        }

    };


    return (
        <>
            <button className="btn btn-ghost btn-xs" onClick={openModal}>
                edit
            </button>

            {isOpen &&
                <dialog open className="modal">
                    <div className="modal-box w-max">
                        <form onSubmit={handleSubmit}>
                            <h3 className="font-bold text-lg">Edit a Menu Item</h3>
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
                                <button type="submit" className="btn btn-success">Save</button>
                                <button type="button" onClick={closeModal} className="btn btn-error">Cancel</button>
                            </div>
                        </form>
                    </div>
                </dialog>}
        </>
    );
}