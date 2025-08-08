import express, { json } from "express";
import { connect } from "mongoose";
import { configDotenv } from "dotenv";
import cors from "cors";
import registerRouter from "./routes/register_routes.js";
import userRouter from "./routes/user_routes.js";
import teamRouter from "./routes/team_routes.js";
import authRouter from "./routes/auth_routes.js";
import MongoStore from "connect-mongo";
import session from "express-session";

configDotenv();

const URI = process.env.URI;
const PORT = process.env.PORT || 8000;
const ORIGIN = process.env.ORIGIN;
const SECRET_KEY = process.env.SECRET_KEY;

const app = express();

const mongoStore = MongoStore.create({
  mongoUrl: URI,
  collectionName: "sessions",
});

app.use(json());
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    store: mongoStore,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      secure: false, // true when only production
    },
  })
);

app.use("/api/v1", registerRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", teamRouter);
app.use("/api/v1", authRouter);



try {
  await connect(URI);
  console.log("Database successfully connected");
  app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.log(error);
}
