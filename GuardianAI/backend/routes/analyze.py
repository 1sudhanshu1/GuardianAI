from fastapi import APIRouter
from pydantic import BaseModel
from services.ai_service import analyze_text

router = APIRouter()


class MessageRequest(BaseModel):
    message: str


@router.post("/analyze-text")
def analyze(request: MessageRequest):
    return analyze_text(request.message)