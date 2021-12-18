import { Request, Response, NextFunction } from "express";

export default class PingController {
  constructor() {}

  async getMessage(req: Request, res: Response, next: NextFunction) {
    const query = req.query;
    const limit: string | any = query.limit?.toString();
    console.log("id:", limit);
    res.status(200).json({ message: "pong limit= " + limit + "  mode = edit" });
  }
}
