from app import db


class Carros(db.Model):
    __tablename__ = "carros"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, unique=True)
    nome = db.Column(db.String(255))
    marca = db.Column(db.String(255))
    ano = db.Column(db.Integer)
    preco = db.Column(db.Float)
    carro_images = db.relationship("CarrosImages", backref="carros")

    def __init__(self, nome, marca, ano, preco):
        self.nome = nome
        self.marca = marca
        self.ano = ano
        self.preco = preco


class CarrosImages(db.Model):
    __tablename__ = "carros_images"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, unique=True)
    carro_id = db.Column(db.Integer, db.ForeignKey("carros.id"))
    image = db.Column(db.String(255))
    carro = db.relationship("Carros", backref="carros_images")

    def __init__(self, carro_id, image):
        self.carro_id = carro_id
        self.image = image
