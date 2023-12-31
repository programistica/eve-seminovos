import os
import time
import uuid

from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), "assets/carros_images")


def image_unique_name_generator(image_name: str) -> str:
    timestamp = int(time.time())
    name = secure_filename(image_name)
    unique_name = f"{uuid.uuid4()}-{timestamp}-{name}"
    return unique_name


def upload_image(carro_id: int, image: FileStorage) -> str:
    generated_name = image_unique_name_generator(image.filename)
    image_name = f"{carro_id}-{generated_name}"
    image_path = os.path.join(UPLOAD_FOLDER, str(carro_id))
    if not os.path.exists(image_path):
        os.makedirs(image_path)
    image_file = os.path.join(image_path, image_name)
    image.save(image_file)
    return image_name
