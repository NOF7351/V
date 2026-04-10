// navigation-data.js - Данные о планировке школы с реальными координатами

// ============ КООРДИНАТЫ ШКОЛЫ ============
// ЗАМЕНИТЕ эти значения на реальные координаты вашей школы!
const SCHOOL_COORDINATES = {
    // Центральный вход в школу (главная точка отсчёта)
    entrance: {
        latitude: 54.710000,  // ЗАМЕНИТЕ: широта входа в школу
        longitude: 20.500000  // ЗАМЕНИТЕ: долгота входа в школу
    },
    // Границы здания школы (для определения, находится ли пользователь внутри)
    bounds: {
        nw: { lat: 54.710050, lng: 20.499950 },
        se: { lat: 54.709950, lng: 20.500050 }
    },
    // Ориентация здания (угол в градусах относительно севера)
    buildingAngle: 15,
    // Высота первого этажа над уровнем моря (метров)
    groundFloorAltitude: 25
};

// ============ ПРИВЯЗКА КАБИНЕТОВ К РЕАЛЬНЫМ КООРДИНАТАМ ============
// 1 метр ≈ 0.000009 градусов по широте
const METER_TO_LAT = 0.000009;
// 1 метр ≈ 0.000012 градусов по долготе (зависит от широты)
const METER_TO_LNG = 0.000012;

function calculateRoomCoordinates(offsetX, offsetY, floor) {
    const angle = SCHOOL_COORDINATES.buildingAngle * Math.PI / 180;
    const rotatedX = offsetX * Math.cos(angle) - offsetY * Math.sin(angle);
    const rotatedY = offsetX * Math.sin(angle) + offsetY * Math.cos(angle);
    
    return {
        lat: SCHOOL_COORDINATES.entrance.latitude + (rotatedY * METER_TO_LAT),
        lng: SCHOOL_COORDINATES.entrance.longitude + (rotatedX * METER_TO_LNG),
        floor: floor
    };
}

// ============ ПЛАН ШКОЛЫ ============
const schoolMap = {
    dimensions: {
        width: 80,
        depth: 40,
        floorHeight: 3.5
    },
    
    floors: [
        // 1 этаж
        {
            level: 1,
            height: 0,
            corridors: [
                { start: { x: 5, y: 18 }, end: { x: 75, y: 18 }, width: 4, name: 'Главный коридор' },
                { start: { x: 35, y: 5 }, end: { x: 35, y: 35 }, width: 3, name: 'Поперечный коридор' }
            ],
            stairs: [
                { id: 'stairs_east', name: 'Восточная лестница', position: { x: 70, y: 18 }, width: 4, depth: 6, connectsTo: [2, 3] },
                { id: 'stairs_west', name: 'Западная лестница', position: { x: 10, y: 18 }, width: 4, depth: 6, connectsTo: [2, 3] }
            ],
            rooms: [
                { id: 'entrance', name: 'Вход', type: 'entrance', position: { x: 35, y: 20 }, width: 8, depth: 6, description: 'Главный вход в школу', coordinates: calculateRoomCoordinates(0, 0, 1) },
                { id: 'wardrobe', name: 'Гардероб', type: 'service', position: { x: 10, y: 25 }, width: 8, depth: 6, description: 'Школьный гардероб', coordinates: calculateRoomCoordinates(-25, 5, 1) },
                { id: 'canteen', name: 'Столовая', type: 'service', position: { x: 55, y: 30 }, width: 15, depth: 10, description: 'Школьная столовая', coordinates: calculateRoomCoordinates(20, 10, 1) },
                { id: 'gym', name: 'Спортзал', type: 'special', position: { x: 15, y: 5 }, width: 20, depth: 12, description: 'Спортивный зал', coordinates: calculateRoomCoordinates(-20, -15, 1) },
                { id: 'medical', name: 'Медпункт', type: 'service', position: { x: 65, y: 8 }, width: 6, depth: 5, description: 'Медицинский кабинет', coordinates: calculateRoomCoordinates(30, -12, 1) }
            ]
        },
        // 2 этаж
        {
            level: 2,
            height: 3.5,
            corridors: [
                { start: { x: 5, y: 18 }, end: { x: 75, y: 18 }, width: 4, name: 'Главный коридор' },
                { start: { x: 35, y: 5 }, end: { x: 35, y: 35 }, width: 3, name: 'Поперечный коридор' }
            ],
            stairs: [
                { id: 'stairs_east', name: 'Восточная лестница', position: { x: 70, y: 18 }, width: 4, depth: 6, connectsTo: [1, 3] },
                { id: 'stairs_west', name: 'Западная лестница', position: { x: 10, y: 18 }, width: 4, depth: 6, connectsTo: [1, 3] }
            ],
            rooms: [
                { id: 'history', name: '2-106', type: 'classroom', position: { x: 20, y: 8 }, width: 8, depth: 6, description: 'Кабинет истории', teacher: 'Петров А.В.', subjects: ['История', 'Обществознание'], coordinates: calculateRoomCoordinates(-15, -12, 2) },
                { id: 'math1', name: '2-102', type: 'classroom', position: { x: 45, y: 8 }, width: 8, depth: 6, description: 'Кабинет математики', teacher: 'Сидорова Е.Н.', subjects: ['Математика', 'Алгебра', 'Геометрия'], coordinates: calculateRoomCoordinates(10, -12, 2) },
                { id: 'physics', name: '2-110', type: 'classroom', position: { x: 60, y: 12 }, width: 10, depth: 7, description: 'Кабинет физики', teacher: 'Козлов Д.М.', subjects: ['Физика', 'Астрономия'], coordinates: calculateRoomCoordinates(25, -8, 2) },
                { id: 'library', name: 'Библиотека', type: 'special', position: { x: 15, y: 28 }, width: 12, depth: 8, description: 'Школьная библиотека', coordinates: calculateRoomCoordinates(-20, 8, 2) },
                { id: 'teachers', name: 'Учительская', type: 'staff', position: { x: 55, y: 28 }, width: 8, depth: 6, description: 'Учительская', coordinates: calculateRoomCoordinates(20, 8, 2) }
            ]
        },
        // 3 этаж
        {
            level: 3,
            height: 7.0,
            corridors: [
                { start: { x: 5, y: 18 }, end: { x: 75, y: 18 }, width: 4, name: 'Главный коридор' },
                { start: { x: 35, y: 5 }, end: { x: 35, y: 35 }, width: 3, name: 'Поперечный коридор' }
            ],
            stairs: [
                { id: 'stairs_east', name: 'Восточная лестница', position: { x: 70, y: 18 }, width: 4, depth: 6, connectsTo: [1, 2] },
                { id: 'stairs_west', name: 'Западная лестница', position: { x: 10, y: 18 }, width: 4, depth: 6, connectsTo: [1, 2] }
            ],
            rooms: [
                { id: 'russian', name: '1-74', type: 'classroom', position: { x: 15, y: 6 }, width: 8, depth: 6, description: 'Кабинет русского языка и литературы', teacher: 'Иванова М.С.', subjects: ['Русский язык', 'Литература'], coordinates: calculateRoomCoordinates(-20, -14, 3) },
                { id: 'mgn', name: '3-93', type: 'classroom', position: { x: 45, y: 10 }, width: 6, depth: 5, description: 'Санитарный узел для МГН', accessible: true, coordinates: calculateRoomCoordinates(10, -10, 3) },
                { id: 'english1', name: '3-88', type: 'classroom', position: { x: 65, y: 6 }, width: 8, depth: 6, description: 'Кабинет английского языка', teacher: 'Смирнова А.П.', subjects: ['Английский язык'], coordinates: calculateRoomCoordinates(30, -14, 3) },
                { id: 'chemistry', name: '3-95', type: 'classroom', position: { x: 25, y: 30 }, width: 10, depth: 7, description: 'Кабинет химии', teacher: 'Васильев Н.К.', subjects: ['Химия'], coordinates: calculateRoomCoordinates(-10, 10, 3) },
                { id: 'biology', name: '3-100', type: 'classroom', position: { x: 55, y: 30 }, width: 10, depth: 7, description: 'Кабинет биологии', teacher: 'Михайлова Л.В.', subjects: ['Биология', 'Экология'], coordinates: calculateRoomCoordinates(20, 10, 3) },
                { id: 'informatics', name: '3-85', type: 'classroom', position: { x: 10, y: 22 }, width: 10, depth: 7, description: 'Кабинет информатики', teacher: 'Фёдоров И.С.', subjects: ['Информатика', 'Программирование'], coordinates: calculateRoomCoordinates(-25, 2, 3) }
            ]
        }
    ]
};

// ============ ФУНКЦИИ ДЛЯ РАБОТЫ С КООРДИНАТАМИ ============
function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function isUserInSchool(lat, lng) {
    const bounds = SCHOOL_COORDINATES.bounds;
    return lat <= bounds.nw.lat && lat >= bounds.se.lat &&
           lng >= bounds.nw.lng && lng <= bounds.se.lng;
}

function findNearestRoom(lat, lng, floor) {
    const floorData = schoolMap.floors[floor - 1];
    let nearestRoom = null;
    let minDistance = Infinity;
    
    floorData.rooms.forEach(room => {
        if (room.coordinates) {
            const distance = getDistanceFromLatLonInMeters(lat, lng, room.coordinates.lat, room.coordinates.lng);
            if (distance < minDistance) {
                minDistance = distance;
                nearestRoom = room;
            }
        }
    });
    
    return { room: nearestRoom, distance: minDistance };
}

function calculateUserFloor(altitude) {
    const relativeHeight = altitude - SCHOOL_COORDINATES.groundFloorAltitude;
    const floorHeight = schoolMap.dimensions.floorHeight;
    if (relativeHeight < 0) return 1;
    const floor = Math.floor(relativeHeight / floorHeight) + 1;
    return Math.min(Math.max(floor, 1), 3);
}
