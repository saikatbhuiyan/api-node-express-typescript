// import * as mongoose from "mongoose";
import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URL =
  "mongodb+srv://sami:<password>@saikat.2ccr0.mongodb.net/training?retryWrites=true&w=majority";

// process.env.

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    keepAlive: true,
  };
  const conn: any = await mongoose
    .connect(MONGO_URL, options as ConnectOptions)
    .then((res) => {
      console.log(`MongoDB Connected: ${res.connection.host}`);
    })
    .catch((err) => {
      console.log(
        `Initial Distribution API Database connection error occured -`,
        err
      );
    });
};

export default connectDB;
