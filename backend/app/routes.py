from flask import jsonify, request

from . import app, db
from .models import Carro


@app.route("/carros", methods=["GET"])
def get_carros():
    carros = Carro.query.all()
    return jsonify([carro.serialize() for carro in carros])
