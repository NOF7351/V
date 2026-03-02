// ============ ДАННЫЕ РАСПИСАНИЯ ============

// ЗВОНКИ (исправлено: часы начинаются с 13:30)
const bellSchedule = [
    { start: "13:30", end: "14:10" },
    { start: "14:20", end: "15:00" },
    { start: "15:20", end: "16:00" },
    { start: "16:20", end: "17:00" },
    { start: "17:10", end: "17:50" },
    { start: "18:00", end: "18:40" }
];

// РАСПИСАНИЕ НА НЕДЕЛЮ (1-ПН, 2-ВТ, 3-СР, 4-ЧТ, 5-ПТ)
const weekSchedule = {
    1: ["Русский язык", "Литература", "Биология", "Математика", "Физическая культура", "Физическая культура"],
    2: ["Русский язык", "Литература", "История", "Английский язык", "Музыка", "Изобразительное искусство"],
    3: ["Математика", "География", "Русский язык", "Русский язык", "Труд (Технология)", "Труд (Технология)"],
    4: ["История", "Английский язык", "Английский язык", "Русский язык", "Литература", "Математика"],
    5: ["Математика", "История", "Русский язык", "Читательская грамотность КВ", "Математика", "Математика КВ"]
};

// Функция для получения расписания по дню недели
function getScheduleForDay(dayIndex) {
    return weekSchedule[dayIndex] || [];
}

// Функция для получения времени звонка по номеру урока
function getBellTimeForLesson(lessonIndex) {
    return bellSchedule[lessonIndex] || null;
}

// Функция для получения всего расписания
function getFullSchedule() {
    return {
        monday: weekSchedule[1],
        tuesday: weekSchedule[2],
        wednesday: weekSchedule[3],
        thursday: weekSchedule[4],
        friday: weekSchedule[5],
        bells: bellSchedule
    };
}

// Функция для обновления расписания (можно вызвать из консоли для тестирования)
function updateSchedule(newSchedule) {
    if (newSchedule && typeof newSchedule === 'object') {
        Object.keys(newSchedule).forEach(key => {
            if (key >= 1 && key <= 5) {
                weekSchedule[key] = newSchedule[key];
            }
        });
        console.log('Расписание обновлено!');
        return true;
    }
    return false;
}

// Функция для обновления времени звонков
function updateBellSchedule(newBellSchedule) {
    if (Array.isArray(newBellSchedule) && newBellSchedule.length === bellSchedule.length) {
        newBellSchedule.forEach((item, index) => {
            if (item.start && item.end) {
                bellSchedule[index] = item;
            }
        });
        console.log('Расписание звонков обновлено!');
        return true;
    }
    return false;
}
