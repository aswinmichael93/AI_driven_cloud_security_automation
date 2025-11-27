from pydantic import BaseModel


class CloudResource(BaseModel):
    id: str
    type: str      # vm | storage | iam | db
    provider: str  # aws | azure | gcp
