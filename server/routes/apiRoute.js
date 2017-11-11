let express=require('express')


 checkRole = (role) => {
  return (req, res, next) => {
    if(role == req.user.role)
     next()
    else{
       return res.json({
            message: 'Unauthorize Access'
        });
    }
  }
}

let apiRouter = (app) => {

     app.use('/api/classDetail', require('../api/classDetail'))
     app.use('/api/paytm', require('../api/paytm'))
     app.use('/api/userReferral', require('../api/userReferral'))
     app.use('/api/challengeOther', require('../api/challengeOther'))
     app.use('/api/notification', require('../api/notification'))
     app.use('/api/user', require('../api/student'))
     app.use('/api/classDetail', require('../api/classDetail'))
     app.use('/api/helpAskedFrom', require('../api/helpAskedFrom'))
     app.use('/api/task', require('../api/task'))
     app.use('/api/subject', require('../api/subject'))
     app.use('/api/setting', require('../api/setting'))
     //app.use('/api/question', checkRole(['ADMIN']) , require('../api/question'))
     app.use('/api/question', require('../api/question'))
     app.use('/api/challengeOfDay', require('../api/challengeOfDay'))
     app.use('/api/challengeTask', require('../api/challengeTask'))
     app.use('/api/topic', require('../api/topic'))
     app.use('/api/concept', require('../api/concept'))
     app.use('/api/conceptOfDay', require('../api/conceptOfDay'))
     app.use('/api/student', require('../api/student'))
     app.use('/api/askHelp', require('../api/askHelp'))
     app.use('/api/pointsRedeemed', require('../api/pointsRedeemed'))
     app.use('/api/giftCards', require('../api/giftCards'))
     app.use('/api/membershipType', require('../api/membershipType'))
     app.use('/api/member', require('../api/member'))
     app.use('/api/membership', require('../api/membershipType'))
     app.use('/api/redeemRequest', require('../api/redeemRequest'))
     app.use('/Paytm', require('../Paytm').route)

     app.get('/api/check', (req, res) => {
        let user ={};
        require('./../auth/auth.service').SendProfileToUser(req, res)
        // console.log('Requested User:--------------------- ', req.user)
       /* let reqUser = req.user;
        user.first_name= reqUser.first_name
        user.last_name= reqUser.last_name
        user.email= reqUser.email
        user.role= reqUser.role;
        user.profile_pic_url= reqUser.profile_pic_url
        user.classId = reqUser.class_id
        user.className = reqUser.class_detail? reqUser.class_detail.dataValues.className: null
        user.reedemable_points = reqUser.reedemable_points;
        user.membership_type = reqUser.membership_type;
        user.isMember = reqUser.membership_type_end_date>=new Date() ? true: false
        return res.json({ 

            isLogin: true,
            isComplete: reqUser.is_complete,
            message: 'You are already logged in',
            token : req.headers.authorization.split(' ')[1],
            user: user
        });*/
    })



};


module.exports = apiRouter
