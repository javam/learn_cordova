page_type_global = 'subscribes';
// page_num_global = 0;

loadPhotos(page_type_global, 0);

function loadPhotos(page_type, page_num) {
    console.log(" page_num = " + page_num);
    page_num_global = page_num;
    page_type_global = page_type;

    document.querySelector(".menuIdChoosed").classList.remove("menuIdChoosed");
    document.getElementById(page_type).classList.add("menuIdChoosed");

    if (page_num == 0) $("#photosMain").empty();

    $.post(
        pathPhoto, {
            token: token,
            type: page_type,
            page_num: page_num
        },
        function (data) {
            // console.log("get photos data = " + data);
            if (data) {
                showBlockPhoto(data);
            } else {
                $("#photosMain").append("<br/><br/><br/><br/><br/><center><p> Подписок нет <br/> Подпишитесь на кого-нибудь </p></center>");
            }

        }
    );
}

function showBlockPhoto(data) {
    data = JSON.parse(data);
    console.log("showBlockPhoto = " + data);
    if (data == null) return;

    for (let i = 0; i < data.length; i++) {
        let likes = data[i][2];
        let photo_id = data[i][3];
        let is_liked = data[i][4];
        $("#photosMain").append(
            $(
                "<img class='gallery_photo'src='" +
                server +
                "photo/" +
                data[i][0] +
                "'/>"
            ).click(openPhoto(photo_id))
        );
        $("#photosMain").append(
            $("<div class='gallery_photo_info_name'>" + data[i][1] + "</div>")
        );
        $("#photosMain")
            .append($("<div class='like_make'>save</div>"))
            .click(savePhoto(photo_id));
        if (is_liked) {
            $("#photosMain").append(
                $(
                    "<div class='like_make' id='" + photo_id + "'>" + likes + "</div>"
                ).click(addLike(photo_id))
            );
        } else {
            $("#photosMain").append(
                $(
                    "<div class='like_make' id='" + photo_id + "'>" + "like" + "</div>"
                ).click(addLike(photo_id))
            );
        }
    }
}

function savePhoto(photo_id) {}

function openPhoto(photo_id_func) {
    // photo_id = photo_id;

    return function () {
        // alert("INDEX = " + photo_id);
        showPage("photo_view"); // возможно переместить ниже запроса фото

        $.post(pathPhoto, {
            type: "add_open",
            photo_id: photo_id_func
        });
        photo_id = photo_id_func;

        showPage("photo_view");
    };
}

function addLike(photo_id) {
    return function () {
        $.post(
            pathPhoto, {
                token: token,
                type: "add_like",
                photo_id: photo_id
            },
            function (data) {
                document.getElementById(photo_id).innerHTML = data;
            }
        );
    };
}

jQuery(window).scroll(function () {
    // проверка на докрутку до определенного элемента
    // var scroll_picca = jQuery('.scroll_picca').offset().top;
    // console.log(scroll_picca); // выводим в консоль смещение  элемента пицца
    // //если мы докрутили до нужного элемента
    // if (jQuery(this).scrollTop() > scroll_picca) {
    //     // создаем эффекты и анимацию
    //     jQuery(".bottom_float_menu").show();

    // } else {
    //     jQuery(".bottom_float_menu").hide();

    // }
    // если докрутил до низа страницы
    if (
        jQuery(window).scrollTop() + jQuery(window).height() >=
        jQuery(document).height() - 100
    ) {
        loadPhotos(page_type_global, ++page_num_global); // тут ошибка
        console.log(
            "the end of page '" + page_type_global + "' # " + page_num_global
        );
    }
});