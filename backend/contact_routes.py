<file>
      <absolute_file_name>/app/backend/contact_routes.py</absolute_file_name>
      <content">from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
import logging
from models import ContactMessageCreate, ContactMessageResponse, ContactMessagesResponse, StatusUpdateRequest, StatusUpdateResponse
from supabase_client import create_contact_message, get_contact_messages, update_message_status, test_supabase_connection

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create router
contact_router = APIRouter()

@contact_router.post("/contact", response_model=ContactMessageResponse, status_code=status.HTTP_201_CREATED)
async def submit_contact_message(message_data: ContactMessageCreate):
    """
    Submit a new contact message
    """
    try:
        # Validate input
        logger.info(f"Received contact message from: {message_data.email}")
        
        # Create message in Supabase
        result = await create_contact_message(
            name=message_data.name,
            email=message_data.email,
            message=message_data.message
        )
        
        if result["success"]:
            logger.info(f"Contact message saved successfully: {result.get('id')}")
            return JSONResponse(
                status_code=status.HTTP_201_CREATED,
                content=result
            )
        else:
            logger.error(f"Failed to save contact message: {result.get('error')}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=result.get('error', 'Failed to save message')
            )
            
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in submit_contact_message: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        )

@contact_router.get("/contact/messages", response_model=ContactMessagesResponse)
async def get_all_contact_messages(limit: int = 50):
    """
    Get all contact messages (admin endpoint)
    """
    try:
        logger.info(f"Retrieving contact messages with limit: {limit}")
        
        result = await get_contact_messages(limit=limit)
        
        if result["success"]:
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content=result
            )
        else:
            logger.error(f"Failed to retrieve messages: {result.get('error')}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=result.get('error', 'Failed to retrieve messages')
            )
            
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in get_all_contact_messages: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        )

@contact_router.patch("/contact/messages/{message_id}/status", response_model=StatusUpdateResponse)
async def update_contact_message_status(message_id: str, status_data: StatusUpdateRequest):
    """
    Update contact message status
    """
    try:
        logger.info(f"Updating message {message_id} status to: {status_data.status}")
        
        result = await update_message_status(message_id, status_data.status)
        
        if result["success"]:
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content=result
            )
        else:
            logger.error(f"Failed to update message status: {result.get('error')}")
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND if "not found" in result.get('error', '').lower() else status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=result.get('error', 'Failed to update status')
            )
            
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in update_contact_message_status: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        )

@contact_router.get("/contact/health")
async def contact_health_check():
    """
    Health check for contact service and Supabase connection
    """
    try:
        supabase_connected = test_supabase_connection()
        
        return {
            "status": "healthy" if supabase_connected else "degraded",
            "supabase_connected": supabase_connected,
            "service": "contact_service"
        }
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        return {
            "status": "unhealthy",
            "supabase_connected": False,
            "service": "contact_service",
            "error": str(e)
        }</content>
    </file>