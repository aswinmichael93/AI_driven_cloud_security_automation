from fastapi import APIRouter
from typing import List

from app.models.detection import DetectionOutput, Severity

router = APIRouter(tags=["database"])


@router.get("/database", response_model=List[DetectionOutput])
async def list_db_findings():
    return [
        DetectionOutput(
            resource_id="db-prod-01",
            resource_type="db",
            risk_score=0.88,
            issue="Public DB endpoint with TLS disabled.",
            severity=Severity.CRITICAL,
            recommended_fix="Move DB to private subnet and enable SSL/TLS.",
        ),
        DetectionOutput(
            resource_id="db-analytics",
            resource_type="db",
            risk_score=0.52,
            issue="Suspicious SQL query patterns detected.",
            severity=Severity.MEDIUM,
            recommended_fix="Review queries and tighten IAM/roles.",
        ),
    ]
