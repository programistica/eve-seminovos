FROM postgres:latest

ENV POSTGRES_DB=EveSeminovos
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

EXPOSE 5432

RUN mkdir -p /var/opt/data

COPY data/* /var/opt/data/

COPY initial.sql /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/initial.sql

