// To run this server app:
// npm install tsx
// npm tsx scr/server.tsx

import { WebSocket, WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
    console.log('New client connected');

    ws.on('message', (message: string) => {
        console.log(`Received message: ${message}`);
        ws.send(`Follow the white rabbit.`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});