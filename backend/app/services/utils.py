import os
import time
import uuid

from werkzeug.datastructures import FileStorage

UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), "../assets/carro_images")


def image_unique_name_generator(image_name: str) -> str:
    timestamp = int(time.time())
    unique_name = f"{uuid.uuid4()}-{timestamp}-{image_name}"
    return unique_name


def upload_image(carro_id: int, image: FileStorage) -> str:
    generated_name = image_unique_name_generator(image.filename)
    image_name = f"{carro_id}-{generated_name}.png"
    image_path = os.path.join(UPLOAD_FOLDER / str(carro_id), image_name)
    image.save(image_path)
    return image_path
