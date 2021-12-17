"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from "mongoose";
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = "mongodb+srv://sami:sami1234@saikat.2ccr0.mongodb.net/training?retryWrites=true&w=majority";
// process.env.
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        useNewUrlParser: true,
        keepAlive: true,
    };
    const conn = yield mongoose_1.default
        .connect(MONGO_URL, options)
        .then((res) => {
        console.log(res.models);
        console.log(`MongoDB Connected: ${res.connection.host}`);
    })
        .catch((err) => {
        console.log(`Initial Distribution API Database connection error occured -`, err);
    });
});
exports.default = connectDB;
