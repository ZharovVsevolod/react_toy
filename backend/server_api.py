from fastapi import FastAPI
import uvicorn

from config import (
    HOST,
    PORT
)

from typing import Dict


app = FastAPI()

@app.get("/")
def check_connection() -> Dict[str, str]:
    """Check if the connection is stable"""
    return {"message": "Wake up, Neo"}

@app.get("/ask")
def ask_question(question: str) -> Dict[str, str]:
    """Ask for something API and return the message"""
    match question:
        case "Hello there": 
            return {"message": "General Kenobi!"}
        
        case "Good morning!": 
            return {"message": "Mornin'! Nice day for fishin', ain't it? Hu-ha!"}
    
    # General return if there was no matches in question
    return {"message": "Follow the white rabbit."}


if __name__ == "__main__":
    uvicorn.run(
        app = app,
        host = HOST,
        port = PORT
    )