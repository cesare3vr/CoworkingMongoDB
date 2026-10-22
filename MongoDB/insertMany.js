
const baseDatos = db.getSiblingDB('CoworkingLogs');

baseDatos.logs.insertMany([
    {
        metodo: 'GET',
        ruta: '/api/usuarios',
        estado: 200,
        duracion_ms: 25,
        fecha: new Date('2026-10-21T10:00:00Z'),
        origen: 'carga_inicial'
    },
    {
        metodo: 'GET',
        ruta: '/api/salas',
        estado: 200,
        duracion_ms: 30,
        fecha: new Date('2026-10-21T10:05:00Z'),
        origen: 'carga_inicial'
    },
    {
        metodo: 'POST',
        ruta: '/api/reservas',
        estado: 201,
        duracion_ms: 45,
        fecha: new Date('2026-10-21T10:10:00Z'),
        origen: 'carga_inicial'
    }
]);

print('Datos iniciales insertados correctamente');
