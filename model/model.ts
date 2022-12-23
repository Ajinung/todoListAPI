import mongoose from "mongoose";

interface todoList {
  task: string;
  status: boolean;
  description: string;
}

interface iTodoList extends todoList, mongoose.Document {}

const todoListSchema = new mongoose.Schema(
  {
    task: String,

    status: Boolean,
    description: String,
  },
  { timestamps: true }
);

const TodoListModel = mongoose.model<iTodoList>("todoList", todoListSchema);

export default TodoListModel;
