from app import db

from .models import Carros, CarrosImages
from .schema import CarrosImagesSchema


class CarroRepository:
    id: int
    nome: str
    marca: str
    ano: int
    preco: float
    carros_images: list[CarrosImages]

    @staticmethod
    def create_carro(carro: Carros) -> None:
        db.session.add(carro)
        db.session.commit()
        db.session.refresh(carro)

    @staticmethod
    def find_carros() -> list[Carros]:
        return Carros.query.all()

    @staticmethod
    def find_carro_by_id(id: int) -> Carros:
        return Carros.query.filter_by(id=id).first()

    @staticmethod
    def update_carro(carro: Carros) -> None:
        Carros.query.filter_by(id=carro.id).update(
            {
                "nome": carro.nome,
                "marca": carro.marca,
                "ano": carro.ano,
                "preco": carro.preco,
                "carros_images": carro.carros_images,
            }
        )
        db.session.commit()
        db.session.refresh(carro)

    @staticmethod
    def delete_carro(carro_id: int) -> None:
        carro = Carros()
        Carros.query.filter_by(id=carro_id).delete()
        db.session.commit()
        db.session.refresh(carro)


class CarrosImagesRepository:
    @staticmethod
    def create_image(images: CarrosImages) -> None:
        db.session.add(images)
        db.session.commit()

    @staticmethod
    def find_images_by_carro_id(carro_id: int) -> list[CarrosImages]:
        return CarrosImages.query.filter_by(carro_id=carro_id).all()

    @staticmethod
    def delete_image(image: CarrosImages) -> None:
        db.session.delete(image)
        db.session.commit()
        db.session.refresh(image)
