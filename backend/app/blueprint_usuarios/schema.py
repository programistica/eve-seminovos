from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_sqlalchemy.fields import Nested

from .models import Usuarios


class UsuariosSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Usuarios
        load_instance = True
        include_relationships = True
        include_fk = True
        fields = ("id", "nome", "usuario", "senha", "admin")
