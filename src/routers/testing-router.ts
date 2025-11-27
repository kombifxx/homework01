import { Router, Request, Response } from "express";
import { videos } from '../db/videos-data'
export const testingRouter = Router();
testingRouter.delete('/all-data', (req: Request, res: Response) =>  {
    videos.length = 0
    res.sendStatus(204)
})