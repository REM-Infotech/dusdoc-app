import { io as sio } from "socket.io-client";

const io = sio(import.meta.env.VITE_SOCKET_URL, {
  transports: ["websocket"],
  autoConnect: true,
  query: {
    token: localStorage.getItem("token") || "",
  },
});

export default io;
