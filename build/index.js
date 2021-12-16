"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./db/db"));
// Connect database
(0, db_1.default)();
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.static("public"));
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
// app.get("/ping",async (_req, res)=>{
//     res.send({
//         message:"pong-new",
//     });
// });
// app.get("/pong",async (_req, res)=>{
//     res.send({
//         message:"ping",
//     });
// });
// app.get("/ping-ping",async (_req, res)=>{
//     res.send({
//         message:"pong-png",
//     });
// });
// app.listen(PORT, ()=>{
//     console.log("Server is running out on port",PORT);
// })
