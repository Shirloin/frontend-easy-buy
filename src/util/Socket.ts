import socketIO from 'socket.io-client';
const URL = import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_SOCKET_URL ?? "" : 'https://easy-buy-api.shirloin.my.id';
export const socket = socketIO(URL, {
    transports: ["websocket"],
    reconnection: true,
    timeout: 5000
})