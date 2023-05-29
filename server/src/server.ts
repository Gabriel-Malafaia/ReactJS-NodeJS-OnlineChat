import "dotenv/config";
import http from "http";
import { app } from "./app";
import { main } from "./database/connection";
import { Server } from "socket.io";
import { conversations } from "./sockets/conversations";
import { connectionUser } from "./sockets/connection";

const PORT = process.env.PORT || 3001;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";

main();

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  path: "/socket.io",
  cors: {
    origin: corsOrigin,
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
} as any);

io.on("connection", (socket) => {
  connectionUser(socket);
  conversations(socket);
});

httpServer.listen(PORT, () => {
  console.log(`App is running in http://localhost:${PORT}`);
});

export { io };
