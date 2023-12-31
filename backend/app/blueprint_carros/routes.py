from flask_jwt_extended import jwt_required

from ..blueprint_carros import blueprint_carros
from .views import *


@blueprint_carros.route("/", methods=["GET"])
def find_carros():
    return find_carros_view()


@blueprint_carros.route("/<int:id>", methods=["GET"])
def find_carros_by_id(id):
    return find_carros_by_id_view(id)


@blueprint_carros.route("/create", methods=["POST"])
def create_carro() -> tuple[dict, int]:
    return create_carro_view()


@blueprint_carros.route("/delete/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_carro(id: int) -> tuple[dict, int]:
    return delete_carro_view(id)


@blueprint_carros.route("/update/<int:id>", methods=["PUT"])
@jwt_required()
def update_carro() -> tuple[dict, int]:
    return update_carro_view()


# Path: backend/app/blueprint_carros/routes.py
# Compare this snippet from backend/app/blueprint_carros/views.py:
