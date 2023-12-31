from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from .models import Carros, CarrosImages


class CarrosSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Carros
        load_instance = True
        include_relationships = True
        include_fk = True
        fields = ("id", "nome", "marca", "ano", "preco", "carros_images")


class CarrosImagesSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = CarrosImages
        load_instance = True
        include_relationships = True
        include_fk = True
        fields = ("id", "carro_id", "image")


# Path: backend/app/blueprint_usuario/schema.py
# Compare this snippet from backend/app/blueprint_usuario/repository.py:
