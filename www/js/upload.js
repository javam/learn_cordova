const pathLoad = server + 'php/upload.php';

let files; // переменная. будет содержать данные файлов

// заполняем переменную данными, при изменении значения поля file 
$('input[type=file]').on('change', function () {
    files = this.files;
});

// обработка и отправка AJAX запроса при клике на кнопку upload_files
$('.upload_files').on('click', function (event) {

    event.stopPropagation(); // остановка всех текущих JS событий
    event.preventDefault(); // остановка дефолтного события для текущего элемента - клик для <a> тега

    // ничего не делаем если files пустой
    if (typeof files == 'undefined') return;

    // создадим объект данных формы
    let data = new FormData();

    // заполняем объект данных файлами в подходящем для отправки формате
    $.each(files, function (key, value) {
        data.append(key, value);
    });

    // добавим переменную для идентификации запроса
    data.append('my_file_upload', 1);

    // AJAX запрос
    $.ajax({
        url: pathLoad,
        type: 'POST', // важно!
        data: data,
        cache: false,
        dataType: 'json',
        // отключаем обработку передаваемых данных, пусть передаются как есть
        processData: false,
        // отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
        contentType: false,
        // функция успешного ответа сервера
        success: function (respond, status, jqXHR) {
            // ОК - файлы загружены
            if (typeof respond.error === 'undefined') {
                // выведем пути загруженных файлов в блок '.ajax-reply'
                let file_name = respond.file;
                $('.ajax-reply').html(file_name);
                openPhoto(file_name);
            }
            // ошибка
            else {
                console.log('ОШИБКА: ' + respond.error);
            }
        },
        // функция ошибки ответа сервера
        error: function (jqXHR, status, errorThrown) {
            console.log('ОШИБКА AJAX запроса: ' + status, jqXHR);
        }

    });

});