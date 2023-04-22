// require("dotenv").db();

import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  // password: process.env.DB_KEY,
  password: "",
  database:"klink",
  //  urlDB: 'mysql://root:idqCAmKNgeATaaAaQfrC@containers-us-west-126.railway.app:5488/railway'
///okkkkk
// ookk
})


// / * start Comment JS