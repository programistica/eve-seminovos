from .. import db


class Usuarios(db.Model):
    id = db.Column(
        db.Integer, primary_key=True, autoincrement=True, unique=True, nullable=False
    )
    usuario = db.Column(db.String(255), unique=True, nullable=False)
    senha = db.Column(db.String(500), nullable=False)
    admin = db.Column(db.Boolean, nullable=False)
