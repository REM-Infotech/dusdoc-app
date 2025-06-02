import io from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL, {
  transports: ["websocket"],
  autoConnect: false,
  extraHeaders: {
    Authentication: `Bearer ${sessionStorage.getItem("token") || ""}`,
    "Content-Type": "application/json",
  },
});

socket.on("connect", () => {
  console.log("Socket connected:", socket.id);
});

export default socket;
