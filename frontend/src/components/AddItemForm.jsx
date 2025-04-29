import { FaPlus } from "react-icons/fa6";

export default function AddItemForm() {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-circle btn-sm btn-ghost" onClick={() => document.getElementById('my_modal_4').showModal()}><FaPlus /></button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Add a New Menu Item!</h3>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Food details</legend>

                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name of Item" />

                        <label className="label">Type</label>
                        <form>
                            <label className="select">
                                <span className="label">Type</span>
                                <select>
                                    <option>Personal</option>
                                    <option>Business</option>
                                </select>
                            </label>
                            <select className="select validator" required>
                                <option disabled selected value="">Choose:</option>
                                <option>Tabs</option>
                                <option>Spaces</option>
                            </select>
                            <p className="validator-hint">Required</p>
                        </form>


                        <label className="label">Author</label>
                        <input type="text" className="input" placeholder="Name" />
                    </fieldset>
                    <div className="modal-action">
                        <form className="flex justify-between w-full" method="dialog">
                            {/* if there is a button, it will close the modal */}

                            <button className="btn btn-success">Save</button>
                            <button className="btn btn-error">Cancel</button>


                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}