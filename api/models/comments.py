from datetime import datetime

from pydantic import BaseModel
from sqlalchemy import Boolean, Column, DateTime, Integer, Text, ForeignKey
from sqlalchemy.orm import relationship

from ..database import Base, SessionLocal

db = SessionLocal()


class CommentBase(BaseModel):
    body: str
    author_id: int


class CommentCreate(CommentBase):
    pass


class CommentObject(CommentBase):
    id: int
    timestamp: datetime
    disabled: bool
    post_id: int


class Comment(Base):
    __tablename__ = 'comments'
    id = Column(Integer, primary_key=True)
    body = Column(Text)
    timestamp = Column(DateTime, index=True, default=datetime.utcnow)
    disabled = Column(Boolean, default=False)
    author_id = Column(Integer, ForeignKey('users.id'))
    post_id = Column(Integer, ForeignKey('posts.id'))
    post = relationship("Post", back_populates="comments")
