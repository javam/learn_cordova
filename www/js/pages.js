const ids = ['logo', 'main', 'profile', 'swipe', 'profile_edit', 'login', 'signup', 'photo_view', 'upload'];
// let backPage;
// let thisPage;
// let feedType = 'subscribes';

// page_type_global = 'subscribes';
// page_num_global = 0;

function showPage(pageId) {
    // backPage = thisPage;

    for (let i = 0; i < ids.length; i++) {
        if (pageId == ids[i]) {
            document.getElementById(pageId).style.display = "block";
            $('#' + pageId).load(pageId + '.html', getContent(pageId));
        } else {
            document.getElementById(ids[i]).style.display = "none";
        }
    }
}

function getContent(pageId) {
    // thisPage = pageId;
    switch (pageId) {
        case 'main':
            // loadPhotos(page_type_global, page_num_global);
            // console.log("show page  ---" + " page_type_global = " + page_type_global + " page_num_global = " + page_num_global);
            break;
        case 'swipe':
            // firstPhoto();
            // nextPhoto("");
            break;
        case 'profile':
            break;
        case 'photo_view':
            // getPhoto();
            break;

        default:
            break;
    }
}