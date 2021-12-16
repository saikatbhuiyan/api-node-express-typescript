import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import Router from "./routes";
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

app.use(Router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

// app.get("/ping",async (_req, res)=>{

//     res.send({
//         message:"pong-new",
//     });

// });

// app.get("/pong",async (_req, res)=>{

//     res.send({
//         message:"ping",
//     });

// });
// app.get("/ping-ping",async (_req, res)=>{

//     res.send({
//         message:"pong-png",
//     });

// });
// app.listen(PORT, ()=>{
//     console.log("Server is running out on port",PORT);

// })
