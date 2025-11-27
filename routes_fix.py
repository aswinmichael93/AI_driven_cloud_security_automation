from fastapi import APIRouter
from app.models.fix_request import FixRequest
from app.services.remediation.engine import RemediationEngine, Mode

router = APIRouter(tags=["fix"])


@router.post("/applyFix")
async def apply_fix(req: FixRequest):
    engine = RemediationEngine(mode=Mode.APPROVAL)
    result = engine.execute_plan(req.plan, {"resource_id": req.resource_id})
    return result
