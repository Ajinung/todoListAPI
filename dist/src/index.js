"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("../router/router"));
const app = (0, express_1.default)();
const port = process.env.port || 1999;
require("../config/db");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(200).json({
        message: `server is up and running ✨`,
    });
});
app.use("/api", router_1.default);
app.listen(port, () => {
    console.log(`server listening on ${port}`);
});
