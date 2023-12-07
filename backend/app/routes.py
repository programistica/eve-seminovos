import json

import pandas as pd
from flask import jsonify, request

from . import app, db
from .models import Carros


@app.route("/carros", methods=["GET"])
def get_Carros():
    carros = Carros.query.all()

    return (
        jsonify(
            [
                {
                    "id": carro.id,
                    "nome": carro.nome,
                    "marca": carro.marca,
                    "ano": carro.ano,
                    "preco": carro.preco,
                    "img": carro.img,
                }
                for carro in carros
            ]
        ),
        200,
    )
