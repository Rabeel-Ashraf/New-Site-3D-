import os
from supabase import create_client, Client
from dotenv import load_dotenv
import logging

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Supabase configuration
SUPABASE_URL = os.environ.get('SUPABASE_URL')
SUPABASE_SERVICE_KEY = os.environ.get('SUPABASE_SERVICE_KEY')

if not SUPABASE_URL or not SUPABASE_SERVICE_KEY:
    logger.error("Missing Supabase credentials in environment variables")
    raise ValueError("SUPABASE_URL and SUPABASE_SERVICE_KEY must be set")

# Create Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

# Initialize database tables
async def initialize_database():
    """
    Initialize database tables if they don't exist
    """
    try:
        # Create messages table
        create_messages_table = """
        CREATE TABLE IF NOT EXISTS messages (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            status VARCHAR(50) DEFAULT 'unread'
        );
        """
        
        # Execute table creation
        result = supabase.rpc('create_messages_table_if_not_exists').execute()
        logger.info("Database initialization attempted")
        
    except Exception as e:
        logger.warning(f"Database initialization warning: {e}")
        # Table might already exist, which is fine

# Contact message operations
async def create_contact_message(name: str, email: str, message: str):
    """
    Create a new contact message in Supabase
    """
    try:
        data = {
            "name": name,
            "email": email,
            "message": message,
            "status": "unread"
        }
        
        result = supabase.table('messages').insert(data).execute()
        
        if result.data and len(result.data) > 0:
            logger.info(f"Contact message created successfully: {result.data[0]['id']}")
            return {
                "success": True,
                "message": "Thank you for your message! I'll get back to you within 24 hours.",
                "id": result.data[0]['id']
            }
        else:
            logger.error("Failed to create contact message - no data returned")
            return {
                "success": False,
                "error": "Failed to save message"
            }
            
    except Exception as e:
        logger.error(f"Error creating contact message: {str(e)}")
        return {
            "success": False,
            "error": "Failed to save message",
            "details": str(e)
        }

async def get_contact_messages(limit: int = 50):
    """
    Get contact messages from Supabase (for admin use)
    """
    try:
        result = supabase.table('messages').select('*').order('timestamp', desc=True).limit(limit).execute()
        
        if result.data:
            logger.info(f"Retrieved {len(result.data)} contact messages")
            return {
                "success": True,
                "messages": result.data
            }
        else:
            return {
                "success": True,
                "messages": []
            }
            
    except Exception as e:
        logger.error(f"Error retrieving contact messages: {str(e)}")
        return {
            "success": False,
            "error": "Failed to retrieve messages",
            "details": str(e)
        }

async def update_message_status(message_id: str, status: str):
    """
    Update message status (read, replied, etc.)
    """
    try:
        result = supabase.table('messages').update({"status": status}).eq('id', message_id).execute()
        
        if result.data:
            logger.info(f"Message {message_id} status updated to {status}")
            return {
                "success": True,
                "message": "Status updated successfully"
            }
        else:
            return {
                "success": False,
                "error": "Message not found"
            }
            
    except Exception as e:
        logger.error(f"Error updating message status: {str(e)}")
        return {
            "success": False,
            "error": "Failed to update status",
            "details": str(e)
        }

# Test connection
def test_supabase_connection():
    """
    Test Supabase connection
    """
    try:
        # Try a simple query
        result = supabase.table('messages').select('count').execute()
        logger.info("Supabase connection successful")
        return True
    except Exception as e:
        logger.error(f"Supabase connection failed: {str(e)}")
        return False