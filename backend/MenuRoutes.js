import express from "express";
const router = express.Router();
import upload from "./uploadMiddleware.js"; // adjust path if needed
import MenuItem from "./menuModel.js";

//Get all menu items (including hidden -> staff)
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    if (menuItems.length === 0) {
      return res.status(404).json({ message: "No menu items found" });
    }
    res.status(200).json(menuItems);
  } catch (error) {
    console.log("Error fetching menu:" + error);
    res.status(400).json({ error: error.message });
  }
});
//Get all active menu items (not including hidden -> for customer)
router.get("/active", async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ isHidden: false });
    if (menuItems.length === 0) {
      return res.status(404).json({ message: "No active menu items found" });
    }
    res.status(200).json(menuItems);
  } catch (error) {
    console.error("Error fetching active menu:" + error);
    res.status(400).json({ error: error.message });
  }
});
//Add menu item
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, type, isVegan, isVegetarian, price, isHidden } =
      req.body;
    const imageUrl = req.file?.path; // Cloudinary gives you a hosted image URL

    //create and save new menu item
    const newItem = new MenuItem({
      name,
      description,
      type,
      isVegan,
      isVegetarian,
      price,
      isHidden,
      image: imageUrl,
    });
    await newItem.save();
    res.status(201).json({
      success: true,
      message: "Item added successfully",
      data: newItem,
    });
  } catch (error) {
    console.error("Error adding food item:" + error);
    res.status(500).json({ error: error.message });
  }
});
// Update Menu item
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, type, isVegan, isVegetarian, price, isHidden } =
      req.body;

    const updatedFields = {
      name,
      description,
      type,
      isVegan,
      isVegetarian,
      price,
      isHidden,
    };

    // If a new image was uploaded
    if (req.file) {
      const item = await MenuItem.findById(id);

      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }

      // Delete the old image from Cloudinary (if it exists)
      if (item.image) {
        const url = item.image;
        const publicId = "restaurant-menu/ffmnuadeqjp57pnbrdvq";
        const response = await cloudinary.uploader.destroy(publicId);
        console.log(response); // helps debug
      }

      // Set the new image
      updatedFields.image = req.file.path;
    }

    const updatedItem = await MenuItem.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "item not found" });
    }
    res.status(200).json({
      success: true,
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    console.error("error updating menu:", error);
    res.status(400).json({ error: error.message });
  }
});
// Delete Menu Item
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const foundItem = await MenuItem.findById(id);

    if (!foundItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    // Delete the old image from Cloudinary (if it exists)
    if (foundItem.image) {
      const url = foundItem.image;
      const publicId = "restaurant-menu/ffmnuadeqjp57pnbrdvq";
      console.log(publicId);
      await cloudinary.uploader.destroy(publicId);
    }
    await MenuItem.findByIdAndDelete(id);
    res.status(200).json({ message: "Food Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item: ", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
