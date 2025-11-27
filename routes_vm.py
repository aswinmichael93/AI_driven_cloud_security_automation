from fastapi import APIRouter
from typing import List

from app.models.detection import DetectionOutput, Severity

router = APIRouter(tags=["vm"])


@router.get("/vm", response_model=List[DetectionOutput])
async def list_vm_findings():
    # Placeholder static data
    return [
        DetectionOutput(
            resource_id="vm-001",
            resource_type="vm",
            risk_score=0.92,
            issue="Public SSH (22) + CPU anomaly",
            severity=Severity.CRITICAL,
            recommended_fix="Quarantine VM and close port 22.",
        ),
        DetectionOutput(
            resource_id="vm-002",
            resource_type="vm",
            risk_score=0.63,
            issue="Outdated image with known CVEs",
            severity=Severity.MEDIUM,
            recommended_fix="Patch VM and update base image.",
        ),
    ]
