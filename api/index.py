from fastapi import FastAPI

from .database import Base, engine
from .routers import comments, posts, users

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(comments.router)
app.include_router(posts.router)
app.include_router(users.router)


@app.get("/")
def hello_world():
    return "Hello World"
