"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const videos_router_1 = __importDefault(require("./routers/videos-router"));
const testing_router_1 = require("./routers/testing-router");
const setupApp = (app) => {
    app.use(express_1.default.json());
    app.use("/hometask_01/api/videos", videos_router_1.default);
    app.use("/hometask_01/api/testing", testing_router_1.testingRouter);
    app.get("/", (req, res) => {
        res.status(200).send("Hello world!");
    });
    return app;
};
exports.setupApp = setupApp;
