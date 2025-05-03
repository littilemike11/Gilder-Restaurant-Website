import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "/api/v1";

//get all menu items -> staff
export const getMenu = () => axios.get(`${API_URL}/`);

//get all active menu -> customers
export const getActiveMenu = () => axios.get(`${API_URL}/active`);

//add food item
export const AddFoodItem = (item) => axios.post(`${API_URL}/`, item);

//update food item
export const updateFoodItem = (id, item) => axios.put(`${API_URL}/${id}`, item);

//delete food item
export const deleteFoodItem = (id) => axios.delete(`${API_URL}/${id}`);
