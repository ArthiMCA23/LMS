const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    courseId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course', 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    questions: [
        {
            question: { type: String, required: true },
            options: { type: [String], required: true },
            answer: { type: String, required: true }
        }
    ],
    instructorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    completedBy: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }]
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
