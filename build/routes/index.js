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
const express_1 = __importDefault(require("express"));
const ping_1 = __importDefault(require("../controllers/ping"));
const pong_1 = __importDefault(require("../controllers/pong"));
const router = express_1.default.Router();
router.get("/ping/:id/edit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const controller = new ping_1.default();
    const query = req.query;
    const limit = (_a = query.limit) === null || _a === void 0 ? void 0 : _a.toString();
    console.log("id:", limit);
    const response = yield controller.getMessage(limit);
    return res.send(response);
}));
router.get("/pong", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new pong_1.default();
    const response = yield controller.getMessage();
    return res.send(response);
}));
exports.default = router;
