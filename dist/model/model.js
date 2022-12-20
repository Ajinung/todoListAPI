"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todoListSchema = new mongoose_1.default.Schema({
    task: String,
    // status: [{ done: String, undone: String }],
    status: String,
    description: String,
}, { timestamps: true });
const TodoListModel = mongoose_1.default.model("todoList", todoListSchema);
exports.default = TodoListModel;
