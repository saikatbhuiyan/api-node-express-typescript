import { Router } from "express";

import { getAllUsers } from "../controllers/Users";

class UserRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.route("/").get(getAllUsers);
  }
}
export default new UserRoutes().router;
