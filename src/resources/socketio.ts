import { Manager } from "socket.io-client";

const manager = new Manager(import.meta.env.VITE_SOCKETIO_URL, {
  transports: ["websocket"],
  extraHeaders: {
    "HTTP-AUTHORIZATION": `Bearer ${localStorage.getItem("token") || ""}`,
    "Content-Type": "application/json",
  },
  autoConnect: false,
});

export default manager;
