/**
 * Reading Environment Variables
 */
import { config } from "dotenv";
config();

export default {
  database: {
    connectionLimit: 10,
    host: process.env.DATABASE_HOST || "cluster-eks.czojgjwy6aok.ap-south-1.rds.amazonaws.com",
    user: process.env.DATABASE_USER || "eksrds",
    password: process.env.DATABASE_PASSWORD || "Shiva1234",
    database: process.env.DATABASE_NAME || "dblinks",
  },
  port: process.env.PORT || 4000,
};
