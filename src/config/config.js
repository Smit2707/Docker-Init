import dotenv from 'dotenv';

dotenv.config();

export const config = {
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase",
    port: process.env.PORT || 3000,
};

Object.freeze(config);