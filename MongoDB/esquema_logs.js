
const baseDatos = db.getSiblingDB('CoworkingLogs');

// Crear la colección logs si todavía no existe
if (!baseDatos.getCollectionNames().includes('logs')) {

    baseDatos.createCollection('logs', {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: ['metodo', 'ruta', 'estado', 'origen'],
                properties: {
                    metodo: {
                        bsonType: 'string'
                    },
                    ruta: {
                        bsonType: 'string'
                    },
                    estado: {
                        bsonType: 'int'
                    },
                    duracion_ms: {
                        bsonType: ['int', 'long', 'double']
                    },
                    fecha: {
                        bsonType: 'date'
                    },
                    origen: {
                        bsonType: 'string'
                    }
                }
            }
        }
    });

    print('Colección logs creada correctamente');

} else {
    print('La colección logs ya existe');
}
