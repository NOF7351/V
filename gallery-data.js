// ============ ДАННЫЕ ГАЛЕРЕИ ============

const albums = {
    class5: [
        {
            name: "Форд Боярд",
            items: [
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/1.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/2.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/3.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/4.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/5.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/6.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/7.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/8.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/9.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/5/FortBoyard/10.jpg" }
            ]
        },
        {
            name: "Зарница",
            items: [
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/5/Zarnica/1.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/5/Zarnica/2.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/5/Zarnica/3.jpg" },
                // ... остальные фото (я сократил для примера)
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/5/Zarnica/46.jpg" },
            ]
        }
    ],
    class6: [
        {
            name: "Первое сентября",
            items: [
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/6/FirstOfSeptember/1.jpg" },
            ]
        },
        {
            name: "Холмогорье",
            items: [
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/6/Holmogorye/1.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/6/Holmogorye/2.jpg" },
                // ... остальные фото (я сократил для примера)
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/6/Holmogorye/47.jpg" },
                {
                    type: 'video',
                    url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/6/Holmogorye/49.mp4",
                    preview: "https://placehold.co/600x400"
                },
                {
                    type: 'video',
                    url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/6/Holmogorye/50.mp4",
                    preview: "https://placehold.co/600x400"
                },
                {
                    type: 'video',
                    url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/6/Holmogorye/52.mp4",
                    preview: "https://placehold.co/600x400"
                },
            ]
        },
        {
            name: "Поездка на башню \"Хардерсхоф\"",
            items: [
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/6/Hardershof/1.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/6/Hardershof/2.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/6/Hardershof/3.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/6/Hardershof/4.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/6/Hardershof/5.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/main/Resourses/Album/6/Hardershof/6.jpg" },
            ]
        },
        {
            name: "Рой Джой",
            items: [
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/6/RoyDjoy/1.jpg" },
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/6/RoyDjoy/2.jpg" },
                // ... остальные фото (я сократил для примера)
                { type: 'photo', url: "https://raw.githubusercontent.com/NOF7351/V/refs/heads/main/Resourses/Album/6/RoyDjoy/16.jpg" },
            ]
        }
    ]
};

// Функция для получения альбомов по классу
function getAlbumsByClass(className) {
    return albums[className] || [];
}

// Функция для добавления нового альбома
function addAlbum(className, albumName, items) {
    if (!albums[className]) {
        albums[className] = [];
    }
    const newAlbum = {
        name: albumName,
        items: items
    };
    albums[className].push(newAlbum);
    return newAlbum;
}

// Функция для добавления медиа в существующий альбом
function addMediaToAlbum(className, albumName, mediaItem) {
    const album = albums[className]?.find(a => a.name === albumName);
    if (album) {
        album.items.push(mediaItem);
        return true;
    }
    return false;
}
