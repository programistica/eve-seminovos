from app import db
from flask import jsonify, make_response, request
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    set_access_cookies,
    unset_jwt_cookies,
)

from ..blueprint_usuarios import blueprint_usuarios
from .views import *


@blueprint_usuarios.route("/login", methods=["POST"])
def login():
    return login_view()


@blueprint_usuarios.route("/login/refresh", methods=["POST"])
@jwt_required()
def refresh():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user, fresh=True)
    response = jsonify(access_token=access_token)
    set_access_cookies(response, access_token)
    return response


@blueprint_usuarios.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    response = jsonify({"logout": True})
    unset_jwt_cookies(response)
    return response


@blueprint_usuarios.route("/", methods=["GET"])
def listar_usuarios():
    return find_usuarios_view()


@blueprint_usuarios.route("/<string:usuario>", methods=["GET"])
def busca_usuario(usuario: str) -> tuple[dict, int]:
    return find_usuario_by_usuario_view(usuario)


@blueprint_usuarios.route("/create", methods=["POST"])
def create_usuario():
    return create_usuario_view()
