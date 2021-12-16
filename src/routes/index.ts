import express from "express";
import PingController from "../controllers/ping";
import PongController from "../controllers/pong";

const router = express.Router();

router.get("/ping/:id/edit", async (req, res) => {
  const controller = new PingController();
  const query = req.query;
  const limit: string | any = query.limit?.toString();
  console.log("id:", limit);
  const response = await controller.getMessage(limit);
  return res.send(response);
});

router.get("/pong", async (_req, res) => {
  const controller = new PongController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;
