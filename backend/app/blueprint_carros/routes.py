from flask import jsonify

from ..blueprint_carros import blueprint_carros
from .models import Carros


@blueprint_carros.route("/todos", methods=["GET"])
def get():
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
