import { setupApp } from "../setup-app";
import express from 'express';

const app = express();
setupApp(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
;

