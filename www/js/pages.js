const ids = ['logo', 'main', 'profile', 'swipe', 'profile_edit', 'login', 'signup', 'photo'];

function showPage(pageId) {

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
    switch (pageId) {
        case 'main':
            subscriptionPhotos();
            break;
        case 'swipe':
            firstPhoto();
            // nextPhoto("");
            break;
        case 'profile':
            getUserData();
            break;
        case 'photo':
            getPhoto();
            break;

        default:
            break;
    }
}