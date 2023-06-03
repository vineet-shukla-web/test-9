const Sequelize = require('sequelize')

// const Sequelize: any = sequelize

const config = new Sequelize(
  // "nemr_final",
  // "nemr_final_cloud",
  // "NeMrCloudRead1234",

  // "nemr_final",
  // "nemr_mig_prod",
  // "NeMrMiggusr1234",

  // "nemr_final_testing",
  // "nemr_mig_user",
  // "NeMrMiggusr1234",VK

  "nemr_testing_on_prod",
  "nemr_mig_user",
  "NeMrMiggusr1234",
  {
    host: "65.1.83.82",
    logging: true,
    dialect: "mysql",
    operatorsAliases: false,
    define: {
      engine: 'InnoDB'
    },
    logging: true,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = config