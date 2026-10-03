require("./src/config/env");

const app = require("./app");
const connectDB = require("./src/config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`WisdomHub API running on port ${PORT}`);
});