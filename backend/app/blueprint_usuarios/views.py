from app import db
from flask import jsonify, make_response, request
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    set_access_cookies,
    unset_jwt_cookies,
)
from psycopg2.errors import UniqueViolation
from sqlalchemy.exc import IntegrityError

from .repository import UsuarioRepository
from .schema import UsuariosSchema


def find_usuario_by_usuario_view(usuario: str) -> tuple[dict, int]:
    try:
        data = UsuarioRepository.get_usuario_by_usuario(usuario)
        usuario_schema = UsuariosSchema()
        usuario_data = usuario_schema.dump(data).get("usuario")
        if usuario_data:
            return make_response({"message": "Usuario ja existe"}, 200)
        else:
            return make_response({"message": "Usuario nao encontrado"}, 404)
    except Exception as error:
        return make_response(
            jsonify({"message": f"Erro ao buscar usuário: {error}"}), 500
        )


def create_usuario_view() -> tuple[dict, int]:
    try:
        data = request.get_json()
        usuario_schema = UsuariosSchema()
        usuario_data = usuario_schema.load(data, session=db.session)
        try:
            UsuarioRepository.add_usuario(usuario_data)
        except IntegrityError as error:
            if isinstance(error.orig, UniqueViolation):
                return make_response(jsonify({"message": "Usuario ja existe"}), 400)
            else:
                return make_response(
                    jsonify(
                        {"message": f"Erro desconhecido ao criar usuário: {error}"}
                    ),
                    500,
                )
        return make_response(jsonify({"message": "Usuário criado com sucesso!"}), 200)
    except Exception as error:
        return make_response(
            jsonify({"message": f"Erro ao criar usuário: {error}"}), 500
        )


def find_usuarios_view() -> tuple[dict, int]:
    try:
        usuarios = UsuarioRepository.get_usuarios()
        Usuarios_schema = UsuariosSchema(many=True)
        Usuarios_data = Usuarios_schema.dump(usuarios)
        return make_response(jsonify(Usuarios_data), 200)
    except Exception as error:
        return make_response(
            jsonify({"message": f"Erro ao buscar usuários: {error}"}), 500
        )


def get_by_id_view(id: int) -> tuple[dict, int]:
    try:
        usuario = UsuarioRepository.get_usuario_by_id(id)
        return make_response(jsonify(usuario), 200)
    except Exception as error:
        return make_response(
            jsonify({"message": f"Erro ao buscar usuário: {error}"}), 500
        )


def update_view(usuario: UsuarioRepository) -> tuple[dict, int]:
    try:
        UsuarioRepository.update_usuario(usuario)
        return make_response(
            jsonify({"message": "Usuário atualizado com sucesso!"}), 200
        )
    except Exception as error:
        return make_response(
            jsonify({"message": f"Erro ao atualizar usuário: {error}"}), 500
        )


def delete_usuario_view() -> tuple[dict, int]:
    try:
        Usuario_id = request.view_args["id"]
        UsuarioRepository.delete_usuario(id)
        return make_response(jsonify({"message": "Usuário deletado com sucesso!"}), 200)
    except Exception as error:
        return make_response(
            jsonify({"message": f"Erro ao deletar usuário: {error}"}), 500
        )


def login_view() -> tuple[dict, int]:
    try:
        data = request.get_json()
        print(data)
        usuario_info = UsuarioRepository.get_usuario_by_usuario(data.get("usuario"))
        print(usuario_info)
    except Exception as error:
        return make_response(
            jsonify({"message": f"Erro ao buscar usuário: {error}"}), 500
        )
    else:
        if not usuario_info:
            return make_response(jsonify({"message": "Usuário não encontrado"}), 404)
        elif not usuario_info.senha == data.get("senha"):
            return make_response(jsonify({"message": "Senha incorreta"}), 401)
        else:
            access_token = create_access_token(identity=usuario_info.id)
            refresh_token = create_access_token(identity=usuario_info.id, fresh=True)
            response = make_response(jsonify(logged_in_as=usuario_info.id), 200)
            response.set_cookie("access_token_cookie", access_token, httponly=True)
            set_access_cookies(response, refresh_token)
        return response
