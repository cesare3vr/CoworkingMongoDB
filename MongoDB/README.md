
# MongoDB - Sistema Coworking

## Descripción
Base de datos MongoDB utilizada para almacenar
los registros de actividad de la API REST
del Sistema de Reservas Coworking.

## Tecnologías
- MongoDB Community Server
- MongoDB Compass
- MongoDB Shell (mongosh)

## Base de datos
Nombre: CoworkingLogs

## Colección
Nombre: logs

## Archivos
- esquema_logs.js: crea la colección logs con
  reglas de validación si todavía no existe.
- insertMany.js: inserta tres registros iniciales
  de ejemplo.

## Estructura de los registros
Cada documento puede contener:
- metodo: método HTTP utilizado.
- ruta: dirección consultada.
- estado: código de respuesta HTTP.
- duracion_ms: duración de la petición.
- fecha: fecha y hora del registro.
- origen: procedencia del registro.

## Ejecución
1. Iniciar MongoDB Community Server.
2. Abrir una terminal con MongoDB Shell (mongosh).
3. Ejecutar primero esquema_logs.js.
4. Ejecutar después insertMany.js.

Los scripts están diseñados para MongoDB Shell,
no para ejecutarse directamente con Node.js.

Nota: ejecutar insertMany.js varias veces
insertará nuevamente los registros de ejemplo.

## Integración con Node.js
La API se conecta a MongoDB mediante MongoClient.

El middleware loggerMongo.js registra
automáticamente las actividades en la
colección CoworkingLogs.logs.
