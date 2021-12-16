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
  const conn: any = await mongoose.connect(
    MONGO_URL,
    options as ConnectOptions,
    (error) => {
      // handle the error case
      if (error) {
        console.log(error);
        throw error;
      } else {
        console.log("connected to mongo server");
      }
    }
  );
  console.log(conn);
  // console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
