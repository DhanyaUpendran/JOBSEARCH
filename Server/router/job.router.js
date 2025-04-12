// Routes
import express from "express";
import { getJob,AddJobs,getCategories } from "../controllers/job.controller.js";
const router = express.Router();

router.get("/jobs", getJob);
router.post("/jobs", AddJobs);
router.get("/categories", getCategories);


export default router;

