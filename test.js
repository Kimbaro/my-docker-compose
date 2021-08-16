console.log(process.env.NODE_ENV);
require("dotenv").config({path: process.env.NODE_ENV == "production" ? ".env.prod" : ".env.dev"});// .env 파일에서 환경변수 불러오기
const env_data = process.env;
console.log(`${env_data.DB}`);