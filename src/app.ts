import express from "express";
import createHttpError from "http-errors";

import globalErrorHandler from "./middleware/globalErrorHandler";

const app = express();

app.get("/", (req, res, next) => {
    const error = createHttpError(400, "Something Went Wrong");
    throw error;
});

app.use(globalErrorHandler);

export default app;
