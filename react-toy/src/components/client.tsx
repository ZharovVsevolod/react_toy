// import WebSocket from 'ws';

function setupWebSocket() {
    // Connect to WebScoket Server URL
    const ws: WebSocket = new WebSocket("ws://localhost:8080");

    // // Send handle message on open connection
    // ws.on("open", () => {
    //     console.log("WebSocket connected!");

    //     // ws.send("Anybody here?");
    // })

    // // Receive and show message from server
    // ws.on("message", (message: string) => {
    //     console.log(`Received message from server: ${message}`);
    // })

    // // Console log if connection is closed
    // ws.on("close", () => {
    //     console.log("Disconnected from server");
    // })

    return ws;
}

export default setupWebSocket;