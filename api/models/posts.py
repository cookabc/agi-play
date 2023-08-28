from datetime import datetime

from pydantic import BaseModel
from sqlalchemy import Column, DateTime, ForeignKey, Integer, Text

from ..database import Base, SessionLocal

db = SessionLocal()


class PostBase(BaseModel):
    body: str
    author_id: int


class PostCreate(PostBase):
    pass


class PostUpdate(PostBase):
    pass


class PostObject(PostBase):
    id: int
    timestamp: datetime

    class Config:
        orm_mode = True


class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    body = Column(Text)
    timestamp = Column(DateTime, index=True, default=datetime.utcnow)
    author_id = Column(Integer, ForeignKey('users.id'))
