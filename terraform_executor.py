from typing import List, Dict, Any
from app.core.logger import log


def apply_terraform_fix(plan: List[str], context: Dict[str, Any]) -> None:
    # Here you would write files / run terraform apply, or call cloud SDKs directly
    log.info("Applying remediation (mock): plan=%s context=%s", plan, context)
