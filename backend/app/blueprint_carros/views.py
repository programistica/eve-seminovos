from app import db
from app.utils import upload_image
from flask import jsonify, make_response, request

from .repository import CarroRepository, CarrosImagesRepository
from .schema import CarrosImagesSchema, CarrosSchema


def find_carros_view() -> tuple[dict, int]:
    try:
        carros_schema = CarrosSchema(many=True)
        carros_data = carros_schema.dump(CarroRepository.find_carros())
        if not carros_data:
            return make_response(jsonify({"message": "Nenhum carro encontrado"}), 404)
        return make_response(jsonify(carros_data), 200)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)


def find_carros_by_id_view(id: int) -> tuple[dict, int]:
    try:
        carros_schema = CarrosSchema()
        carros_data = carros_schema.dump(CarroRepository.find_carro_by_id(id))
        if not carros_data:
            return make_response(jsonify({"message": "Carro nao encontrado"}), 404)
        return make_response(jsonify(carros_data), 200)
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)


def create_carro_view() -> tuple[dict, int]:
    try:
        data_json = request.form.to_dict()
        data_files = request.files.getlist("images")
        print(data_files)
        carros_schema = CarrosSchema()
        carros_data = carros_schema.load(
            data_json,
            session=db.session,
        )
        try:
            CarroRepository.create_carro(carros_data)

        except Exception as e:
            return make_response(jsonify({"error": str(e)}), 500)

        images = []
        for image in data_files:
            image_path = upload_image(carros_data.id, image)
            images_data = {"carro_id": carros_data.id, "image": image_path}
            images.append(images_data)

        for image_instance in images:
            carros_images_schema = CarrosImagesSchema()
            carros_images_data = carros_images_schema.load(
                image_instance,
                session=db.session,
            )
            try:
                CarrosImagesRepository.create_image(carros_images_data)
            except Exception as e:
                return make_response(jsonify({"error": str(e)}), 500)

    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)
    carro = CarroRepository.find_carro_by_id(carros_data.id)
    return make_response(
        jsonify(
            {"message": "Carro criado com sucesso", "carro": carros_schema.dump(carro)}
        ),
        200,
    )


def delete_carro_view(id: int) -> tuple[dict, int]:
    carros_schema = CarrosSchema()
    carros_data = carros_schema.delete(
        CarroRepository.find_carro_by_id(id), session=db.session
    )
    if not carros_data:
        return make_response(jsonify({"message": "Carro nao encontrado"}), 404)
    else:
        try:
            CarroRepository.delete_carro(carros_data)
            return make_response(
                jsonify({"message": "Carro deletado com sucesso"}), 200
            )
        except Exception as e:
            return make_response(jsonify({"error": str(e)}), 500)


def update_carro_view() -> tuple[dict, int]:
    try:
        data = request.get_json()
    except Exception as e:
        return make_response(jsonify({"error": str(e)}), 500)

    carros_schema = CarrosSchema()
    carros_data = carros_schema.load(data, session=db.session)
    carro = CarroRepository.find_carro_by_id(carros_data.id)
    if not carro:
        return make_response(jsonify({"message": "Carro nao encontrado"}), 404)
    else:
        try:
            CarroRepository.update_carro(carros_data)
            return make_response(
                jsonify({"message": "Carro atualizado com sucesso"}), 200
            )
        except Exception as e:
            return make_response(jsonify({"error": str(e)}), 500)


# Path: backend/app/blueprint_usuarios/views.py
# Compare this snippet from backend/app/blueprint_usuarios/repository.py:
