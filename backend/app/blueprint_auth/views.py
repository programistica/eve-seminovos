from flask import jsonify, make_response, request

from .repository import UsuarioRepository
from .schema import UsuariosSchema


def add_usuario_view() -> tuple[dict, int]:
    try:
        data = request.get_json()
        usuario_schema = UsuariosSchema()
        usuario_data = usuario_schema.load(data)
        UsuarioRepository.add_usuario(usuario_data)
        return make_response(jsonify({"message": "Usuário criado com sucesso!"}), 200)
    except Exception as error:
        return make_response(
            jsonify({"message": f"Erro ao criar usuário: {error}"}), 500
        )


def get_usuarios_view() -> tuple[dict, int]:
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
