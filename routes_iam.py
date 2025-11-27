from fastapi import APIRouter
from typing import List

from app.models.detection import DetectionOutput, Severity

router = APIRouter(tags=["iam"])


@router.get("/iam", response_model=List[DetectionOutput])
async def list_iam_findings():
    return [
        DetectionOutput(
            resource_id="role-admin",
            resource_type="iam",
            risk_score=0.9,
            issue="Privilege escalation path from read-only user.",
            severity=Severity.HIGH,
            recommended_fix="Enforce MFA and trim admin permissions.",
        ),
        DetectionOutput(
            resource_id="svc-account-01",
            resource_type="iam",
            risk_score=0.6,
            issue="Excessive permissions compared to peers.",
            severity=Severity.MEDIUM,
            recommended_fix="Apply least-privilege policy from K-means cluster.",
        ),
    ]
