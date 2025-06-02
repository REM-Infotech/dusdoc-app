import io from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL, {
  transports: ["websocket"],
  extraHeaders: {
    "HTTP-AUTHORIZATION": `Bearer ${sessionStorage.getItem("token") || ""}`,
    "Content-Type": "application/json",
  },
});

export default socket;
