from app.models.detection import DetectionOutput, Severity


class StorageDetector:
    def __init__(self):
        pass

    def analyze(self, bucket_id: str, is_public: bool, has_secrets: bool) -> DetectionOutput:
        risk = 0.0
        issue_parts = []

        if is_public:
            risk += 0.6
            issue_parts.append("Public bucket")
        if has_secrets:
            risk += 0.4
            issue_parts.append("Secrets/PII detected")

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
            resource_id=bucket_id,
            resource_type="storage",
            risk_score=risk,
            issue=issue,
            severity=severity,
            recommended_fix="Encrypt and block public access for bucket.",
        )
