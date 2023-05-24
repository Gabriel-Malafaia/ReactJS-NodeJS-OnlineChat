import "dotenv/config";
import { main } from "./database/connection";
import { app } from "./app";
import { Server, Socket } from "socket.io";
import http from "http";
import { connectionUser } from "./sockets/connection";

const PORT = process.env.PORT || 3001;

main();

const onlineUsers = new Set();

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  path: "/socket.io",
  cors: {
    origin: "http://localhost:5173", // Substitua pela URL do seu frontend React
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  connectionUser(socket);
});

httpServer.listen(PORT, () => {
  console.log(`App is running in http://localhost:${PORT}`);
});

export { io };
