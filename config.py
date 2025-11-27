import os

DB_URL = os.getenv("DB_URL", "sqlite:///./config.db")
LOGS_URL = os.getenv("LOGS_URL", "http://localhost:9200")
METRICS_DB_URL = os.getenv("METRICS_DB_URL", "sqlite:///./metrics.db")

MODE = os.getenv("MODE", "DEV")  # DEV or PROD
AUTO_REMEDIATION_MODE = os.getenv("AUTO_REMEDIATION", "APPROVAL")
