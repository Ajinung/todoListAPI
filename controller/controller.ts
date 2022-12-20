import { Request, Response } from "express";
import TodoListModel from "../model/model";

const postTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { task, status, description } = req.body;

    const newTask = await TodoListModel.create({
      task,
      status,
      description,
    });

    return res.status(201).json({
      message: `new task created`,
      data: newTask,
    });
  } catch (error) {
    return res.status(401).json({
      message: `error posting new task`,
      error: error,
    });
  }
};

const getAllTasks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const myTasks = await TodoListModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      message: `all task gotten`,
      data: myTasks,
    });
  } catch (error) {
    return res.status(400).json({
      message: `error getting all task`,
      error: error,
    });
  }
};

const deleteTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const rmvTask = await TodoListModel.findByIdAndRemove(req.params.id);

    return res.status(200).json({
      message: `Task deleted successfully`,
    });
  } catch (error) {
    return res.status(401).json({
      message: `error deleting task`,
      error: error,
    });
  }
};

const updateTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { status } = req.body;

    const updatedTask = await TodoListModel.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    return res.status(200).json({
      message: `status updated successfully`,
      data: updatedTask,
    });
  } catch (error) {
    return res.status(401).json({
      message: `error updating task`,
      error: error,
    });
  }
};

const searchStatus = async (req: Request, res: Response): Promise<Response> => {
  try {
    const querySearch = await TodoListModel.find(req.query);

    return res.status(200).json({
      message: `data found`,
      data: querySearch,
    });
  } catch (error) {
    return res.status(401).json({
      message: `error searching task`,
      error: error,
    });
  }
};

export { postTask, getAllTasks, deleteTask, searchStatus, updateTask };
