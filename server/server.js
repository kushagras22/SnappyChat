import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";

await connectDB();
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.json({limit: "4mb"}));
app.use(cors());
app.use("/api/status", (req, res) => res.send("Server is live!"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

server.listen(PORT, () => {
    console.log(`Server started running on port ${PORT}`);
})