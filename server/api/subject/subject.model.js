let database = require('../../config/db')
let sequelize=database.sequelize
let connection=database.connection

let init = function () {
    return subject  = connection.define('subject',{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
         	type :sequelize.STRING,
            allowNull:false
        },
        status:{
            type:sequelize.BOOLEAN,
            allowNull:false,
            defaultValue:true
        }
    },
    {
        classMethods: {
            getSubjects: (models) => {
                let subject = models.subject
                return subject.findAll({
                    attributes: ['id', 'name'],
                    where: {status: true}
                })
            },

            getSubjectWithTopic: (models) => {
                let subject = models.subject
                let topic = models.topic
                return subject.findAll({
                    attributes: ['id', 'name'],
                    where: {status: true},
                    include: {
                        model: topic,
                        attributes: [['id', 'topicId'], ['name', 'topicName']]
                    }
                }).then((response)=>{
                    return response;
                })
            },

            findAllClassSubject: (models) =>{
                let Subject = models.subject;
                let Class = models.class_detail;
                let topic = models.topic;
                let task = models.task;
                let result = {};
                return Subject.findAll({
                    attributes: ['id', 'name'],
                    include: [{
                        attributes: ['id', 'name'],
                        model: topic,
                        include: [{
                            attributes: ['id', 'name', 'class_id'],
                            model: concept,
                            group: ['class_id']
                        }]

                    }]
                })
                .then(subjects=>{
                    result.subjects = subjects;
                    return Class.findAll({
                      attributes: ['id', 'name', 'level']
                    })
                })
                .then(classes=>{
                    result.classes = classes;
                    return task.max('end_timestamp', {where: {end_timestamp: {$gte: new Date()}}})
                })
                .then(endDateOfLatestTask=>{
                    if(endDateOfLatestTask)
                        endDateOfLatestTask.setDate(endDateOfLatestTask.getDate()+1)
                    result.startDateOfNewTask = endDateOfLatestTask;
                    return result;
                })


            } 
        }
    })
}

module.exports = init