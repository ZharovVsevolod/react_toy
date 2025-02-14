
function Message(message: string) {
    const name = "Kanna";

    console.log(`Here is the received message: ${message}`)

    if (name)
        return <h1>Wake up, {name}. {message}</h1>;
    return <h1>Wake up, Neo. Follow the white rabbit.</h1>;
}

export default Message;