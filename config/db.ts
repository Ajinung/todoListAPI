import mongoose from "mongoose";

const URI: string = "mongodb://localhost";

const LiveURI =
  "mongodb+srv://Izick:Bashiware97@cluster0.xntposv.mongodb.net/todolist?retryWrites=true&w=majority";

mongoose.connect(LiveURI);

mongoose.connection
  .on("open", () => {
    console.log(`connection to databse established`);
  })
  .once("error", () => {
    console.log(`error estabblishing connection to database`);
  });
