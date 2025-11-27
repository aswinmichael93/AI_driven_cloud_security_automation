from app.models.detection import DetectionOutput, Severity


class DBDetector:
    def __init__(self):
        pass

    def analyze(self, db_id: str, public: bool, tls_enabled: bool, injection_score: float) -> DetectionOutput:
        risk = 0.0
        issue_parts = []

        if public:
            risk += 0.5
            issue_parts.append("Public DB endpoint")
        if not tls_enabled:
            risk += 0.3
            issue_parts.append("TLS disabled")
        risk += 0.2 * injection_score
        if injection_score > 0.5:
            issue_parts.append("Suspicious SQL patterns")

        risk = min(1.0, risk)
        issue = " + ".join(issue_parts) if issue_parts else "No issues detected"

        if risk >= 0.8:
            severity = Severity.CRITICAL
        elif risk >= 0.6:
            severity = Severity.HIGH
        elif risk >= 0.3:
            severity = Severity.MEDIUM
        else:
            severity = Severity.LOW

        return DetectionOutput(
            resource_id=db_id,
            resource_type="db",
            risk_score=risk,
            issue=issue,
            severity=severity,
            recommended_fix="Privatize DB endpoint and enable SSL/TLS.",
        )
