/*
  CHANGE-LOG сайта 7В.
  Структура записей и функции управления повторяют логику news-data.js.
  Новые записи добавляйте в начало массива changelogData.
*/

let changelogData = [
    {
        id: 1,
        date: "20.10.2026",
        title: "Добавлен Change-log, смена тем, режим для слабых устройств. Изменение иконок, а также шифрование пароля",
        text: "Добавлен отдельный раздел, куда будут выходить новости о сайте. Также была добавлена смена тем для того, чтобы каждый мог настроить так, как ему нравится. Режим для слабых телефонов позволяет отключить анимацию, тем самым экономя ресурсы телефона. Были изменены иконки выбора вкладок для удобства. Изменение пароля тоже было переписано под Web-Crypt "
    }
];

function addChangelog(date, title, text) {
    const newId = Math.max(...changelogData.map(item => item.id), 0) + 1;

    const entry = {
        id: newId,
        date: date,
        title: title,
        text: text
    };

    changelogData.push(entry);
    return entry;
}

function deleteChangelog(changelogId) {
    const index = changelogData.findIndex(
        item => item.id === changelogId
    );

    if (index === -1) return false;

    changelogData.splice(index, 1);
    return true;
}

function editChangelog(changelogId, newDate, newTitle, newText) {
    const entry = changelogData.find(
        item => item.id === changelogId
    );

    if (!entry) return false;

    entry.date = newDate || entry.date;
    entry.title = newTitle || entry.title;
    entry.text = newText || entry.text;

    return true;
}

function getAllChangelog() {
    return [...changelogData].sort((a, b) => b.id - a.id);
}
