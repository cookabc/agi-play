from datetime import datetime

from pydantic import BaseModel
from sqlalchemy import Column, DateTime, ForeignKey, Integer, Text

from ..database import Base, SessionLocal

db = SessionLocal()


class PostBase(BaseModel):
    body: str


class PostCreate(PostBase):
    author_id: int


class PostObject(PostBase):
    id: int
    author_id: int
    timestamp: datetime

    class Config:
        orm_mode = True


class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    body = Column(Text)
    timestamp = Column(DateTime, index=True, default=datetime.utcnow)
    author_id = Column(Integer, ForeignKey('users.id'))
