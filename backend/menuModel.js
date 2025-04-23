import mongoose from "mongoose";
const itemTypes = [
  "First",
  "Second",
  "Chef Special",
  "Dessert",
  "Specialty Beverage",
  "Side",
  "Addon",
];
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  type: {
    type: String,
    enum: itemTypes,
    required: true,
  },
  isVegan: {
    type: Boolean,
    default: false,
    required: true,
  },
  isVegetarian: {
    type: Boolean,
    default: false,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: String,
  isHidden: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const MenuItem = mongoose.model("MenuItem", menuSchema);
export default MenuItem;
