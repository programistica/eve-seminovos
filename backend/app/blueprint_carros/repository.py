from app import db

from .models import Carros, CarrosImages


class CarroRepository:
    id: int
    nome: str
    marca: str
    ano: int
    preco: float

    @staticmethod
    def add_carro(carro: Carros) -> None:
        db.session.add(carro)
        db.session.commit()

    @staticmethod
    def get_carros() -> list[Carros]:
        return Carros.query.all()

    @staticmethod
    def get_carro_by_id(id: int) -> Carros:
        return Carros.query.filter_by(id=id).first()

    @staticmethod
    def update_carro(carro: Carros) -> None:
        Carros.query.filter_by(id=carro.id).update(
            {
                "nome": carro.nome,
                "marca": carro.marca,
                "ano": carro.ano,
                "preco": carro.preco,
            }
        )
        db.session.commit()

    @staticmethod
    def delete_carro(carro_id: int) -> None:
        Carros.query.filter_by(id=carro_id).delete()
        db.session.commit()

    @staticmethod
    def create_carro_images(carro_images: list[dict]) -> None:
        for image in carro_images:
            carro_image = CarrosImages(
                carro_id=image.get("carro_id"), image=image.get("image")
            )
            db.session.add(carro_image)
        db.session.commit()
