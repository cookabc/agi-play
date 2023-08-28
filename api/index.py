from fastapi import FastAPI

from .database import Base, engine
from .routers import items, users

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(items.router)
app.include_router(users.router)


@app.get("/")
def hello_world():
    return "Hello World"
