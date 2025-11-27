"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRouter = void 0;
const express_1 = require("express");
const videos_data_1 = require("../db/videos-data");
exports.testingRouter = (0, express_1.Router)();
exports.testingRouter.delete('/all-data', (req, res) => {
    videos_data_1.videos.length = 0;
    res.sendStatus(204);
});
