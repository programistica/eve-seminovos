from app import db
from flask import jsonify, make_response, request
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    set_access_cookies,
    unset_jwt_cookies,
)

from ..blueprint_auth import blueprint_auth
from .views import *


@blueprint_auth.route("/login", methods=["POST"])
def login():
    body = request.get_json()

    usuario = Usuarios.query.filter_by(usuario=body.get("usuario")).first()

    if not usuario:
        return make_response(jsonify({"error": "Usuário não encontrado"}), 404)
    elif not usuario.senha == body.get("senha"):
        return make_response(jsonify({"error": "Senha incorreta"}), 401)
    else:
        access_token = create_access_token(identity=usuario.id)
        refresh_token = create_access_token(identity=usuario.id, fresh=True)
        response = make_response(jsonify(logged_in_as=usuario.id), 200)
        response.set_cookie("access_token_cookie", access_token, httponly=True)
        set_access_cookies(response, refresh_token)

        return response


@blueprint_auth.route("/login/refresh", methods=["POST"])
@jwt_required()
def refresh():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user, fresh=True)
    response = jsonify(access_token=access_token)
    set_access_cookies(response, access_token)
    return response


@blueprint_auth.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    response = jsonify({"logout": True})
    unset_jwt_cookies(response)
    return response


@blueprint_auth.route("/usuarios", methods=["GET"])
def listar_usuarios():
    return get_usuarios_view()


@blueprint_auth.route("/usuarios/criar", methods=["POST"])
def criar_usuario():
    return add_usuario_view()
