const submissionSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
    answers: [{ question: String, selectedOption: String }],
    score: { type: Number, default: 0 },
    status: { type: String, enum: ['Completed', 'Pending'], default: 'Pending' },
    submittedAt: { type: Date, default: null }
  });
  
  const Submission = mongoose.model('Submission', submissionSchema);
  