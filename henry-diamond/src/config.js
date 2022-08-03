const dotenv = require('dotenv')
dotenv.config();


  const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
  // const URL = process.env.BACK || process.env.back || "https://pf-g1-backend-production-3e79.up.railway.app/";
  const URL = process.env.BACK || process.env.back || "http://localhost:9000/";
  

  if (!CLIENT_ID) {
    throw new Error("falta env.clientid")
  }

  if (!AUTH0_DOMAIN) {
    throw new Error("falta env.domain")
  }

  if (!URL) {
    console.log(URL)
    throw new Error("falta env.URL")
  }


  module.exports = {
    CLIENT_ID,
    AUTH0_DOMAIN,
    URL
  }