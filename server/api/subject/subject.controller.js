
let models = require('./../../sqldb')();
let subject = models.subject
module.exports = {

	getSubjects: (req, res) => {
		subject.getSubjects(models)
			.then((output) => {
				res.status(200).json({data:output, message: 'SUCCESS_OPERATION'});
			})
			.catch((err) => {
				console.log("Error in Get Subject: ", err);
				res.status(500).json({error: error, message: 'IS_INTERNAL_SERVER_ERROR'});
			})
	},

	getSubjectsWithTopics: (req, res) => {
		subject.getSubjectWithTopic(models)
			.then((output) => {
				console.log("output-->", output);
				res.status(200).json({data:output, message: 'SUCCESS_OPERATION'});
			})
			.catch((err) => {
				console.log("Error in Get Subject with Topic: ", err);
				res.status(500).json({error: error, message: 'IS_INTERNAL_SERVER_ERROR'});
			})
	},

	findAllClassSubject: (req, res) =>{
		subject.findAllClassSubject(models)
		.then(subjectClass=>{
            res.status(200).json({data:subjectClass, message: 'SUCCESS_OPERATION'});
		})
		.catch(err=>{
            console.log("Error in Find All Subject And Class Topic: ", err);
			res.status(500).json({error: error, message: 'IS_INTERNAL_SERVER_ERROR'});
		})
	}
}



