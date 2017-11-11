'use strict';
let path = require('path');
let lodash= require('lodash');
function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }

  return process.env[name];

}
// All configurations will extend these options
// ============================================
let all = {
  env: process.env.NODE_ENV,
  // Root path of server
  root: path.normalize(__dirname + '/../../..'),
  // Server port
  port: process.env.PORT || 3000,
   // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'fundamenthol-IITJEE-secret'
  },

  passwordResetSecret: {
    session: 'fundare-IITJEE-secret'
  },
  /*facebook: {
    clientID: process.env.FACEBOOK_ID || 'id',// 1606344659627241
    clientSecret: process.env.FACEBOOK_SECRET || 'secret', //a8b9427ed12527eb7d87922ef64fa625
    callbackURL: (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },*/

  facebook: {
    clientID: '315648658906658',
    clientSecret: '937cd6511ea9365289cd828bcabdd88f',
    callbackURL: '/auth/facebook/callback'
  },

  twitter: {
    clientID: process.env.TWITTER_ID || 'id',
    clientSecret: process.env.TWITTER_SECRET || 'secret',
    callbackURL: (process.env.DOMAIN || '') + '/auth/twitter/callback'
  },

  google: {
    clientID: '825221948162-g1hvhf6nj8r06eoq7jlt7b9ugjact04e.apps.googleusercontent.com',
    clientSecret: 'icyraxVaOjATVDMr2l6xVZsE',
    callbackURL: (process.env.DOMAIN || '') + '/auth/google/callback'
  } 


};
// Export the config object based on the NODE_ENV
// ==============================================

//module.exports= require('./development.js') || {};

//module.exports= require('./' + process.env.NODE_ENV + '.js') || {};
module.exports = lodash.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});