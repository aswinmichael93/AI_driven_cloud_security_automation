from typing import List, Optional
from pydantic import BaseModel


class FixRequest(BaseModel):
    resource_id: str
    plan: List[str]
    mode: Optional[str] = "APPROVAL"  # or AUTO_HEAL
