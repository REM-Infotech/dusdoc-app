import io from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL, {
  transports: ["websocket"],
  extraHeaders: {
    "HTTP-AUTHORIZATION": `Bearer ${localStorage.getItem("token") || ""}`,
    "Content-Type": "application/json",
  },
});

socket.connect();

export default socket;
