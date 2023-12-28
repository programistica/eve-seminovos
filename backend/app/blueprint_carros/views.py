from app import db
from flask import jsonify, make_response

from .models import Carros, CarrosImages
from .repository import CarroRepository


def get_view() -> tuple[dict, int]:
    try:
        return make_response(jsonify(CarroRepository.get_carros()), 200)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)


def get_by_id_view(id: int) -> tuple[dict, int]:
    try:
        return make_response(jsonify(CarroRepository.get_carro_by_id(id)), 200)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)


def create_view(carro: Carros, carro_image: CarrosImages) -> tuple[dict, int]:
    try:
        CarroRepository.add_carro(carro)
        CarroRepository.add_carro_image(carro_image)
        return make_response(jsonify({"message": "Carro criado com sucesso"}), 200)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)


def delete() -> tuple[dict, int]:
    carro_id = request.view_args["id"]
    try:
        CarroRepository.delete_carro(carro_id)
        return make_response(jsonify({"message": "Carro deletado com sucesso"}), 200)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)


def update(carro: Carros) -> tuple[dict, int]:
    try:
        CarroRepository.update_carro(carro)
        return make_response(jsonify({"message": "Carro atualizado com sucesso"}), 200)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)


def create_carro_images(carro_images: list[dict]) -> tuple[dict, int]:
    try:
        CarroRepository.create_carro_images(carro_images)
        return jsonify({"message": "Imagens do carro criadas com sucesso"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
