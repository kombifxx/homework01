"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const videos_data_1 = require("../db/videos-data");
const video_1 = require("../types/video");
const app = (0, express_1.Router)();
app.get('/', (_, res) => {
    res.status(200).json(videos_data_1.videos);
});
app.post('/', (req, res) => {
    const { title, author, availableResolutions } = req.body;
    const errors = [];
    if (!title || typeof title !== "string" || title.length > 40) {
        errors.push({
            message: "Invalid title",
            field: "title"
        });
    }
    if (!author || typeof author !== "string" || author.length > 20) {
        errors.push({
            message: "Invalid author",
            field: "author"
        });
    }
    if (availableResolutions.length === 0 || !Array.isArray(availableResolutions) || availableResolutions.some(r => !video_1.allowedResolutions.includes(r))) {
        errors.push({
            message: "Invalid resolution",
            field: "availableResolutions"
        });
    }
    if (errors.length > 0) {
        return res.status(400).json({ errorsMessages: errors });
    }
    const newVideo = {
        id: videos_data_1.videos.length ? videos_data_1.videos[videos_data_1.videos.length - 1].id + 1 : 1,
        title: title,
        author: author,
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: new Date().toISOString(),
        publicationDate: new Date().toISOString(),
        availableResolutions: availableResolutions
    };
    videos_data_1.videos.push(newVideo);
    res.status(201).json(newVideo);
});
app.get('/:id', (req, res) => {
    const video = videos_data_1.videos.find(v => v.id === +req.params.id);
    if (!video) {
        return res.status(404);
    }
    res.status(200).json(video);
});
app.put('/:id', (req, res) => {
    const video = videos_data_1.videos.find(v => v.id === +req.params.id);
    if (!video) {
        return res.status(404);
    }
    const { title, author, availableResolutions, canBeDownloaded, minAgeRestriction, publicationDate } = req.body;
    const errorMessages = [];
    if (!title || title.length > 40) {
        errorMessages.push({ message: "Invalid title", field: "title" });
    }
    if (!author || author.length > 20) {
        errorMessages.push({ message: "Invalid author", field: "author" });
    }
    if (availableResolutions && (!Array.isArray(availableResolutions) || availableResolutions.some(r => !video_1.allowedResolutions.includes(r)))) {
        errorMessages.push({ message: "Invalid available resolutions", field: "availableResolutions" });
    }
    if (minAgeRestriction && (minAgeRestriction < 1 || minAgeRestriction > 18)) {
        errorMessages.push({ message: "Invalid minAgeRestriction", field: "minAgeRestriction" });
    }
    if (publicationDate && isNaN(Date.parse(publicationDate))) {
        errorMessages.push({ message: "Invalid publicationDate", field: "publicationDate" });
    }
    if (errorMessages.length > 0) {
        return res.status(400).json({ errorMessages });
    }
    video.title = title;
    video.author = author;
    if (availableResolutions)
        video.availableResolutions = availableResolutions;
    if (canBeDownloaded !== undefined)
        video.canBeDownloaded = canBeDownloaded;
    video.minAgeRestriction = minAgeRestriction !== null && minAgeRestriction !== void 0 ? minAgeRestriction : null;
    if (publicationDate)
        video.publicationDate = publicationDate;
    return res.sendStatus(204);
});
app.delete('/:id', (req, res) => {
    const index = videos_data_1.videos.find(v => v.id === +req.params.id);
    if (index === -1)
        return res.sendStatus(404);
    videos_data_1.videos.splice(index, 1);
    return res.sendStatus(204);
});
exports.default = app;
