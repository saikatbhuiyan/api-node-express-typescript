"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = require("../controllers/Users");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route("/").get(Users_1.getAllUsers);
    }
}
exports.default = new UserRoutes().router;
