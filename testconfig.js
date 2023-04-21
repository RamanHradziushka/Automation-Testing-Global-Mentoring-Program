require('dotenv').config();

export const testConfig = {
    userName: process.env.ADMINUSERNAME,
    password: process.env.ADMINPASSWORD,
    platform: 'http://localhost:8080/',
}