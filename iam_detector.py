from app.models.detection import DetectionOutput, Severity


class IAMDetector:
    def __init__(self):
        pass

    def analyze(self, principal_id: str, privilege_score: float, anomaly_score: float) -> DetectionOutput:
        # privilege_score: 0-1 how over-privileged
        # anomaly_score: 0-1 login/key misuse
        risk = min(1.0, (privilege_score * 0.6) + (anomaly_score * 0.4))

        if risk >= 0.8:
            severity = Severity.CRITICAL
            issue = "Extreme privilege escalation risk."
        elif risk >= 0.6:
            severity = Severity.HIGH
            issue = "High privilege and anomalous usage."
        elif risk >= 0.3:
            severity = Severity.MEDIUM
            issue = "Moderate over-privilege."
        else:
            severity = Severity.LOW
            issue = "Low IAM risk."

        return DetectionOutput(
            resource_id=principal_id,
            resource_type="iam",
            risk_score=risk,
            issue=issue,
            severity=severity,
            recommended_fix="Enforce MFA and apply least-privilege IAM policy.",
        )
