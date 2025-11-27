import express, { Express, Request, Response } from "express";
import videosRouter from "./routers/videos-router";
import { testingRouter } from "./routers/testing-router";

export const setupApp = (app: Express) => {
    app.use(express.json());

    app.use("/hometask_01/api/videos", videosRouter);
    app.use("/hometask_01/api/testing", testingRouter);

    app.get("/", (req: Request, res: Response) => {
        res.status(200).send("Hello world!");
    });

    return app;
};



