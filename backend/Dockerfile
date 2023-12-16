FROM python:3.9.5

WORKDIR /backend

EXPOSE 5000

COPY requirements.txt requirements.txt

RUN python3 -m venv venv

RUN venv/bin/pip3 install --upgrade pip

RUN pip3 install -r requirements.txt

COPY . .

RUN apt-get upgrade && apt-get update

RUN apt-get install vim -y

CMD ["python3", "run.py"]

