import app from "./app.js";
import { config } from "./config/config.js";
import connectDB from "./db/db.js";

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}.`);
    connectDB();
});