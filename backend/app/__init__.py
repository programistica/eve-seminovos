import os

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

load_dotenv(dotenv_path=".env.local", override=True)
load_dotenv(dotenv_path=".env")


DATABASE_HOST = os.getenv("DATABASE_HOST")

app.config[
    "SQLALCHEMY_DATABASE_URI"
] = f"postgresql://postgres:postgres@{DATABASE_HOST}:5432/EveSeminovos"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

from app import models, routes
