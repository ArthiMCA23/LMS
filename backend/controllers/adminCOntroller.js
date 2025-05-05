// assignmentController.js
const Assignment = require('../models/HomeWorkModel');

// Create Assignment
exports.createAssignment = async (req, res) => {
    const { courseId, title, questions, instructorId } = req.body;
    try {
        const newAssignment = new Assignment({
            courseId,
            title,
            questions,
            instructorId
        });
        await newAssignment.save();
        res.status(201).json(newAssignment);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create assignment' });
    }
};

// Get Assignments by Course ID
exports.getAssignmentsByCourseId = async (req, res) => {
    const { courseId } = req.params;
    try {
        
        const assignments = await Assignment.find({ courseId });
        
        res.status(200).json(assignments);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch assignments' });
    }
};

// Mark Assignment as Completed
exports.markAssignmentComplete = async (req, res) => {
    const { assignmentId } = req.body;
    const studentId = req?.user?.id
    try {
        const assignment = await Assignment.findByIdAndUpdate(
            assignmentId,
            { $addToSet: { completedBy: studentId } },
            { new: true }
        );
       
        console.log(assignment);
        
        res.status(200).json(assignment);
    } catch (err) {
        res.status(500).json({ error: 'Failed to mark assignment as complete' });
    }
};