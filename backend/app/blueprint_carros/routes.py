from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    set_access_cookies,
    unset_jwt_cookies,
)
from flask_sqlalchemy import SQLAlchemy

from ..blueprint_carros import blueprint_carros
from .views import *


@blueprint_carros.route("/", methods=["GET"])
def get():
    return get_view()


@blueprint_carros.route("/<int:id>", methods=["GET"])
def get_by_id(id):
    return get_by_id_view(id)


@blueprint_carros.route("/create", methods=["POST"])
@jwt_required()
def create() -> tuple[dict, int]:
    return create_view()


@blueprint_carros.route("/delete/<int:id>", methods=["DELETE"])
@jwt_required()
def delete(id: int) -> tuple[dict, int]:
    return delete_view(id)


@blueprint_carros.route("/update/<int:id>", methods=["PUT"])
@jwt_required()
def update() -> tuple[dict, int]:
    return update_view()
