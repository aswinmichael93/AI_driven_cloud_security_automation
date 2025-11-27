from enum import Enum
from pydantic import BaseModel


class Severity(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


class DetectionOutput(BaseModel):
    resource_id: str
    resource_type: str  # vm | storage | iam | db
    risk_score: float   # 0-1
    issue: str
    severity: Severity
    recommended_fix: str
