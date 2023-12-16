from flask import Blueprint

blueprint_carros = Blueprint("Blueprint_carros", __name__)

from . import routes
