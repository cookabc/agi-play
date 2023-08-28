from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from . import get_db
from ..models import users as USER

router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


@router.post("/", tags=["users"], response_model=USER.UserObject)
def create_user(user: USER.UserCreate, db: Session = Depends(get_db)):
    db_user = USER.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return USER.create_user(db=db, user=user)


@router.get("/", tags=["users"], response_model=list[USER.UserObject])
async def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = USER.get_users(db, skip=skip, limit=limit)
    return users


@router.get("/{user_id}", tags=["users"], response_model=USER.UserObject)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = USER.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user
