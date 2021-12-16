"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from "mongoose";
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = "mongodb+srv://sami:sami1234@saikat.2ccr0.mongodb.net/training?retryWrites=true&w=majority";
// process.env.
const connectDB = () => {
    const options = {
        useNewUrlParser: true,
        keepAlive: true,
    };
    const conn = mongoose_1.default.connect(MONGO_URL, options, (error) => {
        // handle the error case
        // if (error) {
        //   console.log(error);
        //   throw error;
        // } else {
        //   console.log("connected to mongo server");
        // }
        console.log(error);
    });
    console.log(conn);
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
};
exports.default = connectDB;
