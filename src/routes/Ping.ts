import { Router } from "express";
import PingController from "../controllers/Ping";

class PingRoutes {
  router = Router();
  pingCtrl = new PingController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.route("/:id/edit").get(this.pingCtrl.getMessage);
  }
}
export default new PingRoutes().router;
