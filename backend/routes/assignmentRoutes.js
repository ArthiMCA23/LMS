const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/adminCOntroller');
const { auth } = require('../middleware/auth');

router.post('/', assignmentController.createAssignment);
router.get('/:courseId',auth , assignmentController.getAssignmentsByCourseId);
router.put('/complete',auth , assignmentController.markAssignmentComplete);

module.exports = router;