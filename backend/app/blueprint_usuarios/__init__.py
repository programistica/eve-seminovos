from flask import Blueprint

blueprint_usuarios = Blueprint("Blueprint_usuarios", __name__)

from . import routes
