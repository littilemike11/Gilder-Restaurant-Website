import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
export default function DeleteItemForm({ isAdmin, id, name, deleteFoodItem, menu, setMenu }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleDelete = async () => {
        try {

            if (isAdmin) {
                setMenu(menu.filter(item => item._id !== id)); // remove item locally
                const response = await deleteFoodItem(id);
            } else {
                // placeholder until server setup
                setMenu(menu.filter(item => item.name !== name))
            }

            closeModal(); // Close the modal after deleting
        } catch (error) {
            console.error("Delete Failed:", error)
        }

    };

    return (
        <>
            <button className="btn btn-ghost btn-xs" onClick={openModal}><FaTrashAlt /></button>

            {/* Modal */}
            {isOpen && (
                <dialog open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Caution!</h3>
                        <p className="py-4 font-normal">Are you sure you want to delete <span className="italic font-medium text-lg">{name}</span></p>

                        <div className="modal-action flex justify-between">
                            <form className="flex w-full justify-between" method="dialog">
                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    className="btn btn-error">Delete</button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="btn">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );

}