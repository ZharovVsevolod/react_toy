// To run this server app:
// npm install tsx
// npm tsx scr/server.tsx

import { WebSocket, WebSocketServer } from 'ws';
import axios from 'axios';
import { useState } from 'react';

// Some config constants
const apiUrl = "http://localhost:1702/ask";
const WebSocketPort = 8080;


const wss = new WebSocketServer({ port: WebSocketPort });
const [answer, setAnswer] = useState("");

function getApiAnswer(userMessage: string) {
    axios.get(`${apiUrl}?q=${userMessage}`)
        .then(responce => { setAnswer(responce.data) }).catch(error => { console.error(error) });
};

// ---------------

wss.on('connection', (ws: WebSocket) => {
    console.log('New client connected');

    ws.on('message', (message: string) => {
        console.log(`Received message: ${message}`);

        // ws.send(`Follow the white rabbit.`);

        getApiAnswer(message);
        ws.send(answer);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});