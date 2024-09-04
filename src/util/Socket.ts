import socketIO from 'socket.io-client';
const URL = process.env.VITE_NODE_ENV === 'production' ? process.env.VITE_API_BASE_URL ?? "" : 'http://localhost:3000';
export const socket = socketIO(URL, {
    transports: ["websocket"],
    reconnection: true,
    timeout: 5000
})