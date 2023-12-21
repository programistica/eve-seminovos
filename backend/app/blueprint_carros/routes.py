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


@blueprint_carros.route("/<int:id>", methods=["GET"])
def get_by_id(id):
    carro = Carros.query.filter_by(id=id).first()

    return (
        jsonify(
            {
                "id": carro.id,
                "nome": carro.nome,
                "marca": carro.marca,
                "ano": carro.ano,
                "preco": carro.preco,
                "img": carro.img,
            }
        ),
        200,
    )


@blueprint_carros.route("/create", methods=["POST"])
@jwt_required()
def create():
    body = request.get_json()

    carro = Carros()
    carro.nome = body.get("nome")
    carro.marca = body.get("marca")
    carro.ano = body.get("ano")
    carro.preco = body.get("preco")
    carro.img = body.get("img")

    db.session.add(carro)
    db.session.commit()

    return jsonify({"message": "Carro criado com sucesso"}), 201


@blueprint_carros.route("/delete/<int:id>", methods=["DELETE"])
@jwt_required()
def delete(id):
    carro = Carros.query.filter_by(id=id).first()

    if not carro:
        return jsonify({"error": "Carro não encontrado"}), 404
    else:
        Carros.query.filter_by(id=id).delete()
        return jsonify({"message": "Carro deletado com sucesso"}), 200


@blueprint_carros.route("/update/<int:id>", methods=["PUT"])
@jwt_required()
def update(id):
    carro = Carros.query.filter_by(id=id).first()

    if not carro:
        return jsonify({"error": "Carro não encontrado"}), 404
    else:
        body = request.get_json()

        carro.nome = body.get("nome")
        carro.marca = body.get("marca")
        carro.ano = body.get("ano")
        carro.preco = body.get("preco")
        carro.img = body.get("img")

        db.session.add(carro)
        db.session.commit()

        return jsonify({"message": "Carro atualizado com sucesso"}), 200
