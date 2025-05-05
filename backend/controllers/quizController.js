const Quiz = require("../models/QuizModel");

// Instructor assigns a quiz
const addQuiz = async (req, res) => {
  try {
    const { courseId, questions } = req.body;

    const newQuiz = new Quiz({ courseId, questions });
    await newQuiz.save();

    res.status(201).json({ message: "Quiz added successfully!", quiz: newQuiz });
  } catch (error) {
    res.status(500).json({ message: "Failed to add quiz", error });
  }
};

// Get Quiz for Students
const getQuizByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const quiz = await Quiz.findOne({ courseId });

    if (!quiz) {
      return res.status(404).json({ message: "No quiz found for this course" });
    }

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz", error });
  }
};

module.exports = { addQuiz, getQuizByCourse };
