import { Request, Response, NextFunction } from "express";

import User from "../models/User";

// @desc      Get ALL Users
// @route     Get /api/v1/auth/users
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find();
  res.status(200).json({ data: users });
};
