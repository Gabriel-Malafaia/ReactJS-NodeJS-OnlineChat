import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import express from "express";
import { usersRoutes } from "./routes/users";
import { errorHandler } from "./errors";
import { sessionsRoutes } from "./routes/sessions";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/login", sessionsRoutes);

app.use(errorHandler);

export { app };

