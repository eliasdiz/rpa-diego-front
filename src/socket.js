import { io } from 'socket.io-client';

const socket = io('http://localhost:8080'); // Cambia el puerto si usas otro

export default socket;
