
function Message() {
    const name = "Kanna";
    if (name)
        return <h1>Wake up, {name}. Follow the white rabbit.</h1>;
    return <h1>Wake up, Neo. Follow the white rabbit.</h1>;
}

export default Message;