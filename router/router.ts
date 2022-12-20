import { Router } from "express";
const router = Router();

import {
  deleteTask,
  getAllTasks,
  postTask,
  searchStatus,
  updateTask,
} from "../controller/controller";

router.route("/newtask").post(postTask);
router.route("/alltask").get(getAllTasks);
router.route("/delete/:id").delete(deleteTask);
router.route("/update/:id").patch(updateTask);
router.route("/search/").get(searchStatus);

export default router;
