import express, { Application } from "express";
import pingRouter from "./Ping";
import userRouter from "./Users";

export default class Routes {
  constructor(app: Application) {
    // ping reoutes
    app.use("/api/ping", pingRouter);
    // user routes
    app.use("/api/users", userRouter);
  }
}
