import os

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    CORS(app)
    load_dotenv(dotenv_path=".env")

    DATABASE_HOST = os.getenv("DATABASE_HOST")
    DATABASE_USER = os.getenv("DATABASE_USER")
    DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
    DATABASE_NAME = os.getenv("DATABASE_NAME", "EveSeminovos")
    app.config[
        "SQLALCHEMY_DATABASE_URI"
    ] = f"postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:5432/{DATABASE_NAME}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    app.config["JWT_SECRET_KEY"] = JWT_SECRET_KEY
    JWTManager(app)

    db.init_app(app)

    from .blueprint_auth.models import Usuarios
    from .blueprint_carros.models import Carros, CarrosImages

    with app.app_context():
        db.create_all()

    from .blueprint_auth import blueprint_auth
    from .blueprint_carros import blueprint_carros

    app.register_blueprint(blueprint_carros, url_prefix="/carros")
    app.register_blueprint(blueprint_auth, url_prefix="/auth")

    return app
