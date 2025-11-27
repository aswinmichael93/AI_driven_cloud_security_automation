import asyncio
from app.core.logger import log
from app.services.detection import VMDetector


async def detection_loop(interval: int = 30):
    detector = VMDetector()
    while True:
        # Dummy metrics
        result = detector.analyze("vm-001", [80, 85, 90], [70, 75, 80])
        log.info("Background detection result: %s", result.json())
        await asyncio.sleep(interval)


def start_background_detection(loop: asyncio.AbstractEventLoop, interval: int = 30):
    loop.create_task(detection_loop(interval))
