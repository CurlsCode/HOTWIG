from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import get_all_people

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "HOTWIG API is running"}

@app.get("/api/william")
def get_william():
    return {
        "name": "William the Conqueror",
        "born": 1028,
        "died": 1087,
        "title": "Duke of Normandy, King of England",
        "territories": ["Normandy", "England"]
    }

@app.get("/api/family")
def get_family():
    people = get_all_people()
    return people
        

@app.get("/api/territories/{year}")
def get_territories(year: int):
    # Simplified - in real version this would be more complex
    if year < 1066:
        return {"territories": ["Normandy"]}
    elif year < 1087:
        return {"territories": ["Normandy", "England"]}
    else:
        return {"territories": ["Normandy", "England", "Maine"]}