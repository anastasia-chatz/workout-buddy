import express from "express";
import { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } from "../controllers/workoutController.js";

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

//GET single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

export default router;