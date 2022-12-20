"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb://localhost";
const LiveURI = "mongodb+srv://Izick:Bashiware97@cluster0.xntposv.mongodb.net/todolist?retryWrites=true&w=majority";
mongoose_1.default.connect(LiveURI);
mongoose_1.default.connection
    .on("open", () => {
    console.log(`connection to databse established`);
})
    .once("error", () => {
    console.log(`error estabblishing connection to database`);
});
