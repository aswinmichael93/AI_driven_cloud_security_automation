from fastapi import APIRouter

router = APIRouter(tags=["risk-summary"])


@router.get("/risk-summary")
async def risk_summary():
    # In real system aggregate from DB
    return {
        "global_risk_score": 0.74,
        "vm": {"high": 3, "medium": 6, "low": 10},
        "storage": {"high": 2, "medium": 5, "low": 8},
        "iam": {"high": 1, "medium": 4, "low": 7},
        "database": {"high": 2, "medium": 3, "low": 5},
    }
