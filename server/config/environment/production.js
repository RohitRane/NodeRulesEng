'use strict';
// Production specific configuration
// =================================
module.exports = {
  sequelize: {
    uri:  'postgres://postgres:password@localhost:5432/rule_engine',
      options: {
        logging: false,
        dialect: 'postgres',
        define: {
          timestamps: true,
          underscored: true,
          freezeTableName: true,
        }
    } 

  },

  // Seed database on startup
  seedDb: false,

  redirectUrl: 'http://fundamenthol.cronj.com:3000/',

  callbackUrl: 'http://fundamenthol.cronj.com:3000/',

};
