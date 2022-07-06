export interface Estacion {
    id_unico_estacion: number
    nombre: string
}

// Scrapeado de https://webventas.sofse.gob.ar/ajax/busqueda/obtener_estaciones.php
const ESTACIONES: Estacion[] = [
    { "id_unico_estacion": 11, "nombre": "Alberdi" },
    { "id_unico_estacion": 4234, "nombre": "Alem" },
    { "id_unico_estacion": 16, "nombre": "Alta C\u00f3rdoba" },
    { "id_unico_estacion": 4289, "nombre": "Antartida Argentina" },
    { "id_unico_estacion": 24, "nombre": "Arg\u00fcello" },
    { "id_unico_estacion": 497, "nombre": "Arroyo Seco" },
    { "id_unico_estacion": 27, "nombre": "Azul" },
    { "id_unico_estacion": 28, "nombre": "Bah\u00eda Blanca" },
    { "id_unico_estacion": 480, "nombre": "Baradero" },
    { "id_unico_estacion": 31, "nombre": "Batalla de Salta" },
    { "id_unico_estacion": 463, "nombre": "Bell Ville" },
    { "id_unico_estacion": 40, "nombre": "Betania" },
    { "id_unico_estacion": 41, "nombre": "Bialet Mass\u00e9" },
    { "id_unico_estacion": 46, "nombre": "Bragado" },
    { "id_unico_estacion": 481, "nombre": "Buenos Aires" },
    { "id_unico_estacion": 465, "nombre": "Cachar\u00ed" },
    { "id_unico_estacion": 55, "nombre": "Campana" },
    { "id_unico_estacion": 493, "nombre": "Campo Quijano" },
    { "id_unico_estacion": 59, "nombre": "Ca\u00f1ada de G\u00f3mez" },
    { "id_unico_estacion": 4285, "nombre": "Carcara\u00f1a" },
    { "id_unico_estacion": 66, "nombre": "Casa Bamba" },
    { "id_unico_estacion": 496, "nombre": "Casa Grande" },
    { "id_unico_estacion": 69, "nombre": "Cassaffousth" },
    { "id_unico_estacion": 71, "nombre": "Castelli" },
    { "id_unico_estacion": 443, "nombre": "Castilla" },
    { "id_unico_estacion": 74, "nombre": "Ceres" },
    { "id_unico_estacion": 398, "nombre": "Cevil Pozo (Tuc)" },
    { "id_unico_estacion": 75, "nombre": "Chacabuco" },
    { "id_unico_estacion": 78, "nombre": "Chascom\u00fas" },
    { "id_unico_estacion": 80, "nombre": "Chivilcoy" },
    { "id_unico_estacion": 86, "nombre": "Cnel. Brandsen" },
    { "id_unico_estacion": 97, "nombre": "Cnel. Su\u00e1rez" },
    { "id_unico_estacion": 87, "nombre": "Cnel. Vidal" },
    { "id_unico_estacion": 92, "nombre": "Colonia Dora" },
    { "id_unico_estacion": 492, "nombre": "Combate de Rosario de Lerma" },
    { "id_unico_estacion": 95, "nombre": "C\u00f3rdoba" },
    { "id_unico_estacion": 4235, "nombre": "C\u00f3rdoba (TDS MITRE)" },
    { "id_unico_estacion": 4284, "nombre": "Correa" },
    { "id_unico_estacion": 99, "nombre": "Cosqu\u00edn" },
    { "id_unico_estacion": 487, "nombre": "Div. Pinamar" },
    { "id_unico_estacion": 114, "nombre": "Dolores" },
    { "id_unico_estacion": 122, "nombre": "Dumesnill" },
    { "id_unico_estacion": 124, "nombre": "El Bordo" },
    { "id_unico_estacion": 458, "nombre": "Empalme Villa Constituci\u00f3n" },
    { "id_unico_estacion": 442, "nombre": "Franklin" },
    { "id_unico_estacion": 4288, "nombre": "Funes" },
    { "id_unico_estacion": 145, "nombre": "G\u00e1lvez" },
    { "id_unico_estacion": 4498, "nombre": "G. Lavalle" },
    { "id_unico_estacion": 158, "nombre": "Gral. Guido" },
    { "id_unico_estacion": 460, "nombre": "Gral. Lamadrid" },
    { "id_unico_estacion": 490, "nombre": "Gral. Madariaga" },
    { "id_unico_estacion": 162, "nombre": "Gral. Pir\u00e1n" },
    { "id_unico_estacion": 446, "nombre": "G\u00dcEMES" },
    { "id_unico_estacion": 175, "nombre": "Hospital Neonatal" },
    { "id_unico_estacion": 4306, "nombre": "Iriarte" },
    { "id_unico_estacion": 187, "nombre": "James Craik" },
    { "id_unico_estacion": 194, "nombre": "Jose C Paz" },
    { "id_unico_estacion": 202, "nombre": "Jun\u00edn" },
    { "id_unico_estacion": 4506, "nombre": "Justo Daract" },
    { "id_unico_estacion": 206, "nombre": "La Banda" },
    { "id_unico_estacion": 4493, "nombre": "Laboulaye" },
    { "id_unico_estacion": 208, "nombre": "La Calera" },
    { "id_unico_estacion": 211, "nombre": "Laguna Larga" },
    { "id_unico_estacion": 221, "nombre": "Las Armas" },
    { "id_unico_estacion": 224, "nombre": "Las Flores" },
    { "id_unico_estacion": 227, "nombre": "La Tablada" },
    { "id_unico_estacion": 482, "nombre": "Leones" },
    { "id_unico_estacion": 230, "nombre": "Lezama" },
    { "id_unico_estacion": 4233, "nombre": "Lima" },
    { "id_unico_estacion": 247, "nombre": "Luj\u00e1n" },
    { "id_unico_estacion": 452, "nombre": "Maip\u00fa" },
    { "id_unico_estacion": 251, "nombre": "Manfredi" },
    { "id_unico_estacion": 464, "nombre": "Marcos Juarez" },
    { "id_unico_estacion": 255, "nombre": "Mar del Plata" },
    { "id_unico_estacion": 266, "nombre": "Mechita" },
    { "id_unico_estacion": 268, "nombre": "Mercedes" },
    { "id_unico_estacion": 476, "nombre": "Mercedes P" },
    { "id_unico_estacion": 276, "nombre": "Monte" },
    { "id_unico_estacion": 285, "nombre": "Narvaja" },
    { "id_unico_estacion": 478, "nombre": "O'Higgins" },
    { "id_unico_estacion": 288, "nombre": "Olavarr\u00eda" },
    { "id_unico_estacion": 289, "nombre": "Oliva" },
    { "id_unico_estacion": 292, "nombre": "Oncativo" },
    { "id_unico_estacion": 491, "nombre": "Pacto de los Cerrillos" },
    { "id_unico_estacion": 305, "nombre": "Pig\u00fc\u00e9" },
    { "id_unico_estacion": 306, "nombre": "Pilar" },
    { "id_unico_estacion": 456, "nombre": "Pilar (C\u00f3rdoba)" },
    { "id_unico_estacion": 307, "nombre": "Pinto" },
    { "id_unico_estacion": 323, "nombre": "Rafaela" },
    { "id_unico_estacion": 326, "nombre": "Ramallo" },
    { "id_unico_estacion": 444, "nombre": "Rawson" },
    { "id_unico_estacion": 336, "nombre": "R\u00edo Segundo" },
    { "id_unico_estacion": 477, "nombre": "Rivas" },
    { "id_unico_estacion": 338, "nombre": "Rod. del Busto" },
    { "id_unico_estacion": 4287, "nombre": "Roldan" },
    { "id_unico_estacion": 341, "nombre": "Rosario Norte" },
    { "id_unico_estacion": 342, "nombre": "Rosario Sur" },
    { "id_unico_estacion": 345, "nombre": "Rufino" },
    { "id_unico_estacion": 462, "nombre": "Saavedra" },
    { "id_unico_estacion": 348, "nombre": "Saenz Pe\u00f1a" },
    { "id_unico_estacion": 351, "nombre": "Salta" },
    { "id_unico_estacion": 4286, "nombre": "San Jeronimo" },
    { "id_unico_estacion": 4536, "nombre": "San Lorenzo" },
    { "id_unico_estacion": 362, "nombre": "San Nicol\u00e1s" },
    { "id_unico_estacion": 363, "nombre": "San Pedro" },
    { "id_unico_estacion": 364, "nombre": "San Roque" },
    { "id_unico_estacion": 366, "nombre": "Santa Mar\u00eda" },
    { "id_unico_estacion": 494, "nombre": "Serodino" },
    { "id_unico_estacion": 376, "nombre": "Sevigne" },
    { "id_unico_estacion": 484, "nombre": "Sto. Domingo" },
    { "id_unico_estacion": 382, "nombre": "Suipacha" },
    { "id_unico_estacion": 479, "nombre": "Sunchales" },
    { "id_unico_estacion": 390, "nombre": "Tio Pujio" },
    { "id_unico_estacion": 391, "nombre": "Toledo" },
    { "id_unico_estacion": 393, "nombre": "Tornquist" },
    { "id_unico_estacion": 403, "nombre": "Vaccarezza" },
    { "id_unico_estacion": 495, "nombre": "Valle Hermoso" },
    { "id_unico_estacion": 405, "nombre": "Vedia" },
    { "id_unico_estacion": 425, "nombre": "Villa Maria" },
    { "id_unico_estacion": 429, "nombre": "Vivorat\u00e1" },
    { "id_unico_estacion": 4501, "nombre": "V. Mackenna" },
    { "id_unico_estacion": 434, "nombre": "Zarate" }
];

const URL_API = 'https://trencito-api.giordano.ar/pedidos'; // 'http://localhost:8787/pedidos' //

export {
    ESTACIONES,
    URL_API,
};