from typing import List

from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from . import get_db
from ..models import comments as COMMENT
from ..models.posts import Post

router = APIRouter(
    prefix="/comments",
    tags=["comments"],
    responses={404: {"description": "Not found"}},
)


@router.post("/posts/{post_id}/", response_model=COMMENT.CommentObject)
def new_post_comment(post_id: int, comment: COMMENT.CommentCreate, db: Session = Depends(get_db)):
    post = db.query(Post).get(post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    new_comment = COMMENT.Comment(body=comment.body, author_id=comment.author_id, post_id=post_id)
    db.add(new_comment)
    db.commit()
    db.refresh(new_comment)
    return new_comment


@router.get("/posts/{post_id}/", response_model=List[COMMENT.CommentObject])
def get_post_comments(post_id: int, page_no: int = 1, page_size=10, db: Session = Depends(get_db)):
    post = db.query(Post).get(post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    comments = (
        db.query(COMMENT.Comment)
        .filter(COMMENT.Comment.post_id == post_id)
        .offset((page_no - 1) * page_size)
        .limit(page_size)
        .all()
    )
    return comments


@router.get("/", response_model=List[COMMENT.CommentObject])
def get_comments(page_no: int = 1, page_size=10, db: Session = Depends(get_db)):
    comments = db.query(COMMENT.Comment).offset((page_no - 1) * page_size).limit(page_size).all()
    return comments


@router.get("/{comment_id}", response_model=COMMENT.CommentObject)
def get_comment(comment_id: int, db: Session = Depends(get_db)):
    comment = db.query(COMMENT.Comment).get(comment_id)
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found")
    return comment
