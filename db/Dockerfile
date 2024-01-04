FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
ENV MYSQL_DATABASE=${MYSQL_DATABASE}
ENV MYSQL_USER=${MYSQL_USER}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}

# Copiar el script de inicialización de la base de datos en el directorio /docker-entrypoint-initdb.d
# Este script se ejecutará automáticamente durante el inicio del contenedor
COPY ./initial/init.sql /docker-entrypoint-initdb.d/

# Exponer el puerto 3306 para permitir la conexión
EXPOSE 3306