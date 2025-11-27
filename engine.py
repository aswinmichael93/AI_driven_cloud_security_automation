from enum import Enum
from typing import List, Dict, Any

from app.core.logger import log
from app.services.remediation.terraform_executor import apply_terraform_fix


class Mode(str, Enum):
    AUTO_HEAL = "AUTO_HEAL"
    APPROVAL = "APPROVAL"


class RemediationEngine:
    def __init__(self, mode: Mode = Mode.APPROVAL):
        self.mode = mode

    def execute_plan(self, plan: List[str], context: Dict[str, Any]) -> Dict[str, Any]:
        if self.mode == Mode.APPROVAL:
            log.info("Remediation plan generated for approval: %s", plan)
            return {"status": "PENDING_APPROVAL", "plan": plan, "resource": context}

        log.info("Executing remediation plan: %s", plan)
        apply_terraform_fix(plan, context)
        return {"status": "EXECUTED", "plan": plan, "resource": context}
