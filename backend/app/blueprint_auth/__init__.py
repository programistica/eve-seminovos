from flask import Blueprint

blueprint_auth = Blueprint("Blueprint_auth", __name__)

from . import models, routes
