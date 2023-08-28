from datetime import datetime
from typing import List

from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from . import get_db
from ..models import posts as POST

router = APIRouter(
    prefix="/posts",
    tags=["posts"],
    responses={404: {"description": "Not found"}},
)


@router.post("/", response_model=POST.PostObject)
def create_post(post: POST.PostCreate, db: Session = Depends(get_db)):
    new_post = POST.Post(body=post.body, author_id=post.author_id, timestamp=datetime.utcnow())
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post


@router.put("/{post_id}", response_model=POST.PostObject)
def edit_post(post_id: int, post: POST.PostUpdate, db: Session = Depends(get_db)):
    old_post = db.query(POST.Post).get(post_id)
    if not old_post:
        raise HTTPException(status_code=404, detail="Post not found")

    old_post.body = post.body
    db.add(old_post)
    db.commit()
    return old_post


@router.get("/{post_id}", response_model=POST.PostObject)
def get_post(post_id: int, db: Session = Depends(get_db)):
    post = db.query(POST.Post).get(post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


@router.get("/", response_model=List[POST.PostObject])
def get_posts(page_no: int = 1, page_size=10, db: Session = Depends(get_db)):
    posts = db.query(POST.Post).offset((page_no - 1) * page_size).limit(page_size).all()
    return posts
