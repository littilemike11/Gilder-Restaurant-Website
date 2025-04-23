import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = 3000;

app.use(express.json());

const uri = process.env.MONGO_URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDb() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log("Error: " + error);
    await mongoose.disconnect();
  }
}

app.listen(PORT, async () => {
  await connectDb().catch(console.dir);
  console.log(`Express API started: http://localhost:${PORT}`);
});
