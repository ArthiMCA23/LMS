const express = require("express");
const router = express.Router();
const { addQuiz, getQuizByCourse } = require("../controllers/quizController");

// Route for instructor to add a quiz
router.post("/add", addQuiz);

// Route for students to fetch quiz by course ID
router.get("/:courseId", getQuizByCourse);

module.exports = router;
