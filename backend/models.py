from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=255, description="Sender's name")
    email: EmailStr = Field(..., description="Sender's email address")
    message: str = Field(..., min_length=10, max_length=5000, description="Message content")

class ContactMessageResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None
    error: Optional[str] = None
    details: Optional[str] = None

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "unread"

class ContactMessagesResponse(BaseModel):
    success: bool
    messages: list = []
    error: Optional[str] = None
    details: Optional[str] = None

class StatusUpdateRequest(BaseModel):
    status: str = Field(..., description="New status for the message")

class StatusUpdateResponse(BaseModel):
    success: bool
    message: str
    error: Optional[str] = None

# Project models (for future enhancement)
class ProjectCreate(BaseModel):
    title: str = Field(..., max_length=255)
    subtitle: Optional[str] = Field(None, max_length=255)
    description: str
    features: list = []
    tech_stack: list = []
    status: str = "In Development"
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    display_order: int = 0

class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    subtitle: Optional[str] = None
    description: str
    features: list = []
    tech_stack: list = []
    status: str = "In Development"
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    display_order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectsResponse(BaseModel):
    success: bool
    projects: list = []
    error: Optional[str] = None