import socketIO from 'socket.io-client';
const URL = process.env.NODE_ENV === 'production' ? "" : 'http://localhost:3000';
export const socket = socketIO(URL, {
    transports: ["websocket"],
    reconnection: true,
    timeout: 5000
})