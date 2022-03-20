# Photo App Challenge

## Descripción de funcionalidades

### Login Screen

Se creó una pantalla de inicio que muestra imágenes de forma aleatoría, tiene dos botones que de momento te llevan a la sección Discovery.

### Discovery

Se creó una pantalla donde se muestra una lista de imágenes en una distribución tipo Masonry. También se agregó un carrusel de imágenes que cambia automáticamente y también puede cambiarse usando el gesto `swipe`.

Las imágenes puede visualizarse en pantalla completa al dar click sobre ellas mostrando la imagen en una resolución más alta y también la información del autor.

### Search

Se creó una pantalla con un campo de texto donde se muestran imágenes como resultados a tu búsqueda. La búsuqeda se ejecuta una vez hayas terminado de escribir para prevenir hacer peticiones innecesarias.

### API

Para las imágenes se implementó el API abierto de la plataforma [unsplash](https://unsplash.com/).

### CI/CD

Se implementó un pipe con Github Actions para la distribución continua. La aplicación se publica con cada `push` en la rama `main`.

## Cómo ejecutar localmente

Para poder ejecutar localmente es necesario seguir los siguientes pasos:

1. Clonar este repositorio en tu máquina local usando el comando

```bash
$ git clone git@github.com:dannegm/frog-photo.git
```

2. Asegurarse de tener instalado Yarn

```bash
$ npm install --g yarn
```

3. Instalar las dependencias

```bash
$ yarn
```

4. Copiar el archivo de configuración

```bash
$ cp .env.example .env
```

5. Abrir el archivo de configuración y reemplazar el texto `<api-key>` con el que fue porporcionado por correo electrónico

6. Ejecutar el proyect

```
$ yarn dev
```
