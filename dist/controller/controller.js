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
exports.updateTask = exports.searchStatus = exports.deleteTask = exports.getAllTasks = exports.postTask = void 0;
const model_1 = __importDefault(require("../model/model"));
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, status, description } = req.body;
        const newTask = yield model_1.default.create({
            task,
            status,
            description,
        });
        return res.status(201).json({
            message: `new task created`,
            data: newTask,
        });
    }
    catch (error) {
        return res.status(401).json({
            message: `error posting new task`,
            error: error,
        });
    }
});
exports.postTask = postTask;
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myTasks = yield model_1.default.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: `all task gotten`,
            data: myTasks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `error getting all task`,
            error: error,
        });
    }
});
exports.getAllTasks = getAllTasks;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rmvTask = yield model_1.default.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            message: `Task deleted successfully`,
        });
    }
    catch (error) {
        return res.status(401).json({
            message: `error deleting task`,
            error: error,
        });
    }
});
exports.deleteTask = deleteTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status } = req.body;
        const updatedTask = yield model_1.default.findByIdAndUpdate(req.params.id, { status }, { new: true });
        return res.status(200).json({
            message: `status updated successfully`,
            data: updatedTask,
        });
    }
    catch (error) {
        return res.status(401).json({
            message: `error updating task`,
            error: error,
        });
    }
});
exports.updateTask = updateTask;
const searchStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querySearch = yield model_1.default.find(req.query);
        return res.status(200).json({
            message: `data found`,
            data: querySearch,
        });
    }
    catch (error) {
        return res.status(401).json({
            message: `error searching task`,
            error: error,
        });
    }
});
exports.searchStatus = searchStatus;
