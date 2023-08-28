from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from . import get_db
from ..models import items as ITEM

router = APIRouter(
    prefix="/items",
    tags=["items"],
    responses={404: {"description": "Not found"}},
)


@router.get("/")
async def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = ITEM.get_items(db, skip=skip, limit=limit)
    return items


@router.post("/{user_id}", response_model=ITEM.ItemCreate)
def create_item_for_user(user_id: int, item: ITEM.ItemCreate, db: Session = Depends(get_db)):
    return ITEM.create_user_item(db=db, item=item, user_id=user_id)
