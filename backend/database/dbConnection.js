import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "CBIT_CAREER_HUB_ASSIGNMENT",
    })
    .then(() => {
      console.log(`Connected to database ${mongoose.connection.name}!!`);
    })
    .catch((err) => {
      console.log(`Some Error occured: ${err}`);
    });
};
