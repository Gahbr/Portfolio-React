import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import usersRoute from "./users.route";

const statusRoute = Router();

statusRoute.get('/status', (req:Request, res:Response, next:NextFunction)=>{
res.sendStatus(StatusCodes.OK);
});

export default statusRoute;