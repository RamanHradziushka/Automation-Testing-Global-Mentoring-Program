const platform = require('../../data/constants');

const testConfig = {
    userName: process.env.ADMINUSERNAME,
    password: process.env.ADMINPASSWORD,
    platform: platform.LOCAL,
}

module.exports = testConfig;