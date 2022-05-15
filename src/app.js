import express from "express";
import cors from "cors";
import UserRoutes from "./routers/user.routes";
import PostRoutes from "./routers/post.routes";
const app = express();
//settings
app.set("port", process.env.PORT || 5000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//Routes
app.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});
app.use("/api/users", UserRoutes);
app.use("/api/posts", PostRoutes);
export default app;
