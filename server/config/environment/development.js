'use strict';
// Development specific configuration
// ==================================
module.exports = {
  // Sequelize connection opions
  sequelize: {
    uri: 'postgres://postgres:postgres@localhost:5432/rule_engine',
    options: {
      dialect: 'postgres',
      logging : false,
      define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
      }
    }
  },

 // Seed database on startup

  seedDb: false,

  redirectUrl: 'http://localhost:8080/',

  callbackUrl: 'http://localhost:3000/',




};

//uri:
//postgres://ankitawal:postgres@localhost:5432/fundare
//postgres://ankitawal:5432/fundare
//      logging : false, in options
//postgres://postgres:akash@localhost:5432/fundare
//      logging : false, in options


// 'postgres://postgres:postgres@localhost:5432/fundare'

// shilpa : uri:  'postgres://postgres:postgres@localhost:5432/fundare'
