from pydantic import BaseSettings


class Settings(BaseSettings):
    project_name: str = "AI Cloud Security Automation Platform"
    version: str = "1.0.0"

    class Config:
        env_file = ".env"


settings = Settings()
