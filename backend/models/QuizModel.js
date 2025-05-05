const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  questions: [
    {
      question: String,
      options: [String], // Multiple-choice options
      correctAnswer: String,
    },
  ],
});

module.exports = mongoose.model("Quiz", QuizSchema);
