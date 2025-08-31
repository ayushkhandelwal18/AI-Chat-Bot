import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listners

const PORT = process.env.PORT || 3000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log("Server started"));
  })
  .catch((error) => console.log(error));
