// ============ ДАННЫЕ НОВОСТЕЙ ============

let newsData = [
    {
        id: 4,
        date: "11.03.2026",
        title: "Элжур не работает",
        text: "На данный момент, элжур может не работать// Д/З по русскому: §81-82, упр. 575"
    },
    
    {
        id: 3,
        date: "03.03.2026",
        title: "Открытый урок",
        text: "Сегодня по словам учительницы музыки должен быть открытый урок. Все должны быть в школьной форме, а также иметь тетради."
    },
    
    {
        id: 2,
        date: "17.01.2026",
        title: "Благодарность за помощь",
        text: "Спасибо большое за помощь Андрею и Вике!"
    },
    {
        id: 1,
        date: "15.01.2026",
        title: "Первая новость!",
        text: "Сайт создан :) Новости уже скоро будут."
    }
];

// Функция для добавления новой новости
function addNews(date, title, text) {
    const newId = Math.max(...newsData.map(n => n.id), 0) + 1;
    const news = {
        id: newId,
        date: date,
        title: title,
        text: text
    };
    newsData.push(news);
    return news;
}

// Функция для удаления новости по ID
function deleteNews(newsId) {
    const index = newsData.findIndex(n => n.id === newsId);
    if (index !== -1) {
        newsData.splice(index, 1);
        return true;
    }
    return false;
}

// Функция для редактирования новости
function editNews(newsId, newDate, newTitle, newText) {
    const news = newsData.find(n => n.id === newsId);
    if (news) {
        news.date = newDate || news.date;
        news.title = newTitle || news.title;
        news.text = newText || news.text;
        return true;
    }
    return false;
}

// Функция для получения всех новостей
function getAllNews() {
    return [...newsData].sort((a, b) => b.id - a.id); // сортировка по ID (новые сверху)
}
