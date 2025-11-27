from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

from app.api import (
    routes_risk,
    routes_vm,
    routes_storage,
    routes_iam,
    routes_db,
    routes_fix,
)
from app.ws.manager import ws_manager

app = FastAPI(title="AI Cloud Security Automation Platform", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes_risk.router, prefix="/api")
app.include_router(routes_vm.router, prefix="/api")
app.include_router(routes_storage.router, prefix="/api")
app.include_router(routes_iam.router, prefix="/api")
app.include_router(routes_db.router, prefix="/api")
app.include_router(routes_fix.router, prefix="/api")


@app.get("/")
async def root():
    return {"status": "ok", "service": "ai-cloud-security-platform"}


@app.websocket("/live-alerts")
async def live_alerts_socket(websocket: WebSocket):
    await ws_manager.connect(websocket)
    try:
        while True:
            # optional: receive pings from client
            await websocket.receive_text()
    except WebSocketDisconnect:
        ws_manager.disconnect(websocket)
