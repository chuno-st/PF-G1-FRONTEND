import dotenv from "dotenv";
dotenv.config();

export default {
  CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
  URL: process.env.BACK 
};