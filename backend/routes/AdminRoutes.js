const express = require('express');
const router = express.Router();
const SchoolController = require('../controllers/SchoolController');

router.post('/new', SchoolController.createSchool);
router.put('/:id', SchoolController.updateSchool);
router.delete('/:id', SchoolController.deleteSchool);

module.exports = router;
