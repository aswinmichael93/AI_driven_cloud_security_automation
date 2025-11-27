from sqlalchemy import create_engine
from sqlalchemy.engine import Engine

from app.core.config import DB_URL

engine: Engine = create_engine(DB_URL, future=True, echo=False)


def get_db():
    conn = engine.connect()
    try:
        yield conn
    finally:
        conn.close()
