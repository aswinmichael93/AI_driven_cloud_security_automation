from fastapi import APIRouter
from typing import List

from app.models.detection import DetectionOutput, Severity

router = APIRouter(tags=["storage"])


@router.get("/storage", response_model=List[DetectionOutput])
async def list_storage_findings():
    return [
        DetectionOutput(
            resource_id="bucket-logs",
            resource_type="storage",
            risk_score=0.81,
            issue="Public bucket with sensitive logs detected.",
            severity=Severity.CRITICAL,
            recommended_fix="Encrypt bucket and block public access.",
        ),
        DetectionOutput(
            resource_id="backup-snapshots",
            resource_type="storage",
            risk_score=0.55,
            issue="Snapshot exposure to external account.",
            severity=Severity.MEDIUM,
            recommended_fix="Restrict snapshot sharing and rotate keys.",
        ),
    ]
