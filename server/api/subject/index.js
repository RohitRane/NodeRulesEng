let express = require('express'	);
let router = express.Router();
let controller 	= require('./subject.controller');
router.post('/getSubjects', controller.getSubjects)
router.post('/getSubjectsWithTopics', controller.getSubjectsWithTopics);
router.get('/findAllClassSubject', controller.findAllClassSubject)


module.exports = router ;