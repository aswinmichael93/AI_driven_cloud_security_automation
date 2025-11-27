from typing import List
from pydantic import BaseModel


class MetricPoint(BaseModel):
    timestamp: float
    value: float


class VMMetricSeries(BaseModel):
    vm_id: str
    cpu: List[MetricPoint]
    network: List[MetricPoint]
