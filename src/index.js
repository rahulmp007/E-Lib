const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");

const connectDb = require("./database/database");

dotenv.config({ path: path.join(__dirname, ".env") });

const PORT = process.env.PORT || 4000;

connectDb()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`server running on http://localhost:${PORT}`)
    );
  })
  .catch(() => {
    console.log('db connection failed');
    
  });
