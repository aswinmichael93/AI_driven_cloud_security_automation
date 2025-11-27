import numpy as np

from app.models.detection import DetectionOutput, Severity


class VMDetector:
    def __init__(self):
        # In real project: load trained models here
        pass

    def analyze(self, vm_id: str, cpu_values, net_values, process_logs=None) -> DetectionOutput:
        cpu_arr = np.array(cpu_values) if len(cpu_values) else np.array([0.0])
        net_arr = np.array(net_values) if len(net_values) else np.array([0.0])

        cpu_score = float(cpu_arr.mean() / 100.0)
        net_score = float(net_arr.mean() / 100.0)
        anomaly_score = min(1.0, (cpu_score + net_score) / 2.0)

        severity = Severity.LOW
        if anomaly_score > 0.8:
            severity = Severity.CRITICAL
        elif anomaly_score > 0.6:
            severity = Severity.HIGH
        elif anomaly_score > 0.4:
            severity = Severity.MEDIUM

        return DetectionOutput(
            resource_id=vm_id,
            resource_type="vm",
            risk_score=anomaly_score,
            issue="CPU/Network anomaly detected.",
            severity=severity,
            recommended_fix="Quarantine VM and close public access ports.",
        )
