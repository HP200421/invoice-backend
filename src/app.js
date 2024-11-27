import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

// We will import the routes here
import userRouter from "./routes/user.routes.js";
import placeRouter from "./routes/place.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/place", placeRouter);

app.use(errorHandler);
export default app;
