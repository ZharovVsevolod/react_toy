import Message from "./components/Message";
// import ListGroup from "./components/ListGroup";
// import SetupWebSocket from "./components/client";
import { useState, useRef, useEffect } from "react";

function App() {
    const ipAddress = "ws://localhost:8080"

    const ws = useRef<WebSocket | null>(null);
    const [messageToShow, setMessageToShow] = useState(<h1>Hello there</h1>);
    const [input, setInput] = useState('');

    function setupWebSocket() {
        ws.current = new WebSocket(ipAddress);

        ws.current.onopen = (() => {
            console.log("WebSocket connected!");
        }) as EventListener;

        ws.current.onmessage = ((message) => {
            setMessageToShow(Message(message.data));
            console.log(messageToShow);
        });

        ws.current.onerror = (event) => {
            console.error("WebSocket error observed:", event);
        };
    }

    // Effect hook to setup and cleanup the WebSocket connection
    useEffect(() => {
        setupWebSocket(); // Setup WebSocket on component mount
    }, []);


    function handleInputChange(msg: any){
        setInput(msg.target.value);
    };

    function handleSubmit(event: { preventDefault: () => void; }){
        event.preventDefault();
        console.log(`Send button! Message is: ${input}`);
        if (ws.current !== null){
            ws.current.send(input); // Send message through WebSocket
        }
        setInput(''); // Clear input field
    };

    return (
        <div>
            <div>{messageToShow}</div>
            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default App;