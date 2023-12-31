from app import db

from .models import Usuarios


class UsuarioRepository:
    @staticmethod
    def add_usuario(usuario: Usuarios) -> None:
        db.session.add(usuario)
        db.session.commit()

    @staticmethod
    def get_usuarios() -> list[Usuarios]:
        return Usuarios.query.all()

    @staticmethod
    def get_usuario_by_id(id: int) -> Usuarios:
        return Usuarios.query.filter_by(id=id).first()

    @staticmethod
    def get_usuario_by_usuario(usuario: str) -> Usuarios:
        return Usuarios.query.filter_by(usuario=usuario).first()

    @staticmethod
    def update_usuario(usuario: Usuarios) -> None:
        Usuarios.query.filter_by(id=usuario.id).update(
            {
                "usuario": usuario.usuario,
                "senha": usuario.senha,
                "admin": usuario.admin,
            }
        )
        db.session.commit()

    @staticmethod
    def delete_usuario(usuario_id: int) -> None:
        Usuarios.query.filter_by(id=usuario_id).delete()
        db.session.commit()
