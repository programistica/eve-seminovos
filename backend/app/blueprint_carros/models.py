from .. import db


class Carros(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255))
    marca = db.Column(db.String(255))
    ano = db.Column(db.Integer)
    preco = db.Column(db.Float)
    img = db.Column(db.String(255))
