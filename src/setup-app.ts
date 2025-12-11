import express, { Express, Request, Response } from "express";
import videosRouter from "./routers/videos-router";
import { testingRouter } from "./routers/testing-router";

export const setupApp = (app: Express) => {
    app.use(express.json());

    app.use("/videos", videosRouter);
    app.use("/testing", testingRouter);

    app.get("/", (req: Request, res: Response) => {
        res.status(200).send("My first API!");
    });

    return app;
};



