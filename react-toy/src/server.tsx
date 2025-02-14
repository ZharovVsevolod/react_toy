// To run this server app:
// npm install tsx
// npx tsx scr/server.tsx

import { WebSocket, WebSocketServer } from 'ws';
import axios from 'axios';

// Some config constants
const apiUrl = "http://localhost:1702/ask";
const WebSocketPort = 8080;


const wss = new WebSocketServer({ port: WebSocketPort });
let answer = "placeholder";

async function getApiAnswer(userMessage: string) {
    let responce = await axios.get(`${apiUrl}?question=${userMessage}`);

    answer = responce.data.message;
    console.log(`Log in responce: ${answer}`);

    return answer
};

// ---------------

wss.on('connection', (ws: WebSocket) => {
    console.log('New client connected');

    ws.on('message', async (message: string) => {
        console.log(`Received message: ${message}`);

        answer = await getApiAnswer(message)
        console.log(`Message from python: ${answer}`)
        ws.send(answer);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});