import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
}

export { main };
