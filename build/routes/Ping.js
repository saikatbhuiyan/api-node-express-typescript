"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Ping_1 = __importDefault(require("../controllers/Ping"));
class PingRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.pingCtrl = new Ping_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route("/:id/edit").get(this.pingCtrl.getMessage);
    }
}
exports.default = new PingRoutes().router;
