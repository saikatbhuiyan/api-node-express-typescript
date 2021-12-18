import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import Routers from "./routes";
import connectDB from "./db/db";

// Connect database
connectDB();

const PORT = process.env.PORT || 8000;
const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

new Routers(app);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
