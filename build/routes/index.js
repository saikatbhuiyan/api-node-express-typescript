"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ping_1 = __importDefault(require("./Ping"));
const Users_1 = __importDefault(require("./Users"));
class Routes {
    constructor(app) {
        // ping reoutes
        app.use("/api/ping", Ping_1.default);
        // user routes
        app.use("/api/users", Users_1.default);
    }
}
exports.default = Routes;
