require('dotenv').config();
//import {Platform} from './testData/testData';

export const testConfig = {
    userName: process.env.ADMINUSERNAME,
    password: process.env.ADMINPASSWORD,
    platform: 'http://localhost:8080/',
}