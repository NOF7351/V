// navigation-data.js - Данные о планировке школы с реальными координатами

// ============ КООРДИНАТЫ ШКОЛЫ ============
// ЗАМЕНИТЕ эти значения на реальные координаты вашей школы!
const SCHOOL_COORDINATES = {
    entrance: {
        latitude: 54.710000,  // ЗАМЕНИТЕ: широта входа в школу
        longitude: 20.500000  // ЗАМЕНИТЕ: долгота входа в школу
    },
    bounds: {
        nw: { lat: 54.710050, lng: 20.499950 },
        se: { lat: 54.709950, lng: 20.500050 }
    },
    buildingAngle: 15,
    groundFloorAltitude: 25
};

// 1 метр в градусах
const METER_TO_LAT = 0.000009;
const METER_TO_LNG = 0.000012;

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
            corridors: [
                { start: { x: 8, y: 48 }, end: { x: 92, y: 48 }, width: 8 },
                { start: { x: 45, y: 8 }, end: { x: 45, y: 88 }, width: 6 }
            ],
            stairs: [
                { id: 'stairs_east', name: 'Вост.', position: { x: 82, y: 44 }, width: 6, depth: 8, connectsTo: [2, 3] },
                { id: 'stairs_west', name: 'Зап.', position: { x: 12, y: 44 }, width: 6, depth: 8, connectsTo: [2, 3] }
            ],
            rooms: [
                { id: 'entrance', name: 'Вход', type: 'entrance', position: { x: 40, y: 52 }, width: 10, depth: 7, description: 'Главный вход' },
                { id: 'wardrobe', name: 'Гардероб', type: 'service', position: { x: 12, y: 58 }, width: 9, depth: 7 },
                { id: 'canteen', name: 'Столовая', type: 'service', position: { x: 70, y: 62 }, width: 14, depth: 10 },
                { id: 'gym', name: 'Спортзал', type: 'special', position: { x: 15, y: 15 }, width: 18, depth: 14 },
                { id: 'medical', name: 'Медпункт', type: 'service', position: { x: 75, y: 20 }, width: 8, depth: 7 },
                { id: 'director', name: 'Директор', type: 'staff', position: { x: 25, y: 20 }, width: 8, depth: 7 },
                { id: 'security', name: 'Охрана', type: 'service', position: { x: 50, y: 60 }, width: 6, depth: 5 },
                { id: 'toilet1_m', name: 'Туалет М', type: 'toilet', position: { x: 8, y: 75 }, width: 7, depth: 6 },
                { id: 'toilet1_w', name: 'Туалет Ж', type: 'toilet', position: { x: 85, y: 75 }, width: 7, depth: 6 }
            ]
        },
        // 2 этаж
        {
            level: 2,
            corridors: [
                { start: { x: 8, y: 48 }, end: { x: 92, y: 48 }, width: 8 },
                { start: { x: 45, y: 8 }, end: { x: 45, y: 88 }, width: 6 }
            ],
            stairs: [
                { id: 'stairs_east', name: 'Вост.', position: { x: 82, y: 44 }, width: 6, depth: 8, connectsTo: [1, 3] },
                { id: 'stairs_west', name: 'Зап.', position: { x: 12, y: 44 }, width: 6, depth: 8, connectsTo: [1, 3] }
            ],
            rooms: [
                { id: 'history', name: '2-106', type: 'classroom', position: { x: 20, y: 15 }, width: 9, depth: 8, description: 'Кабинет истории', teacher: 'Петров А.В.' },
                { id: 'math1', name: '2-102', type: 'classroom', position: { x: 50, y: 15 }, width: 9, depth: 8, description: 'Кабинет математики' },
                { id: 'physics', name: '2-110', type: 'classroom', position: { x: 75, y: 18 }, width: 10, depth: 8, description: 'Кабинет физики' },
                { id: 'library', name: 'Библиотека', type: 'special', position: { x: 15, y: 70 }, width: 14, depth: 10, description: 'Библиотека' },
                { id: 'teachers', name: 'Учительская', type: 'staff', position: { x: 65, y: 70 }, width: 10, depth: 8 },
                { id: 'geography', name: '2-104', type: 'classroom', position: { x: 35, y: 15 }, width: 9, depth: 8, description: 'Кабинет географии' },
                { id: 'toilet2_m', name: 'Туалет М', type: 'toilet', position: { x: 8, y: 75 }, width: 7, depth: 6 },
                { id: 'toilet2_w', name: 'Туалет Ж', type: 'toilet', position: { x: 85, y: 75 }, width: 7, depth: 6 }
            ]
        },
        // 3 этаж
        {
            level: 3,
            corridors: [
                { start: { x: 8, y: 48 }, end: { x: 92, y: 48 }, width: 8 },
                { start: { x: 45, y: 8 }, end: { x: 45, y: 88 }, width: 6 }
            ],
            stairs: [
                { id: 'stairs_east', name: 'Вост.', position: { x: 82, y: 44 }, width: 6, depth: 8, connectsTo: [1, 2] },
                { id: 'stairs_west', name: 'Зап.', position: { x: 12, y: 44 }, width: 6, depth: 8, connectsTo: [1, 2] }
            ],
            rooms: [
                { id: 'russian', name: '1-74', type: 'classroom', position: { x: 15, y: 12 }, width: 9, depth: 8, description: 'Кабинет русского языка и литературы', teacher: 'Иванова М.С.' },
                { id: 'mgn', name: '3-93', type: 'classroom', position: { x: 45, y: 15 }, width: 7, depth: 6, description: 'C/y для МГН', accessible: true },
                { id: 'english1', name: '3-88', type: 'classroom', position: { x: 70, y: 12 }, width: 9, depth: 8, description: 'Кабинет английского языка' },
                { id: 'chemistry', name: '3-95', type: 'classroom', position: { x: 25, y: 72 }, width: 11, depth: 9, description: 'Кабинет химии' },
                { id: 'biology', name: '3-100', type: 'classroom', position: { x: 60, y: 72 }, width: 11, depth: 9, description: 'Кабинет биологии' },
                { id: 'informatics', name: '3-85', type: 'classroom', position: { x: 10, y: 58 }, width: 10, depth: 8, description: 'Кабинет информатики' },
                { id: 'english2', name: '3-90', type: 'classroom', position: { x: 30, y: 12 }, width: 9, depth: 8, description: 'Кабинет английского языка' },
                { id: 'toilet3_m', name: 'Туалет М', type: 'toilet', position: { x: 8, y: 75 }, width: 7, depth: 6 },
                { id: 'toilet3_w', name: 'Туалет Ж', type: 'toilet', position: { x: 85, y: 75 }, width: 7, depth: 6 }
            ]
        }
    ]
};

// Функции для геолокации
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

// Добавляем координаты всем комнатам
schoolMap.floors.forEach((floor, floorIndex) => {
    const entrance = schoolMap.floors[0].rooms.find(r => r.id === 'entrance');
    floor.rooms.forEach(room => {
        const offsetX = room.position.x - entrance.position.x;
        const offsetY = room.position.y - entrance.position.y;
        room.coordinates = calculateRoomCoordinates(offsetX, offsetY, floorIndex + 1);
    });
});
