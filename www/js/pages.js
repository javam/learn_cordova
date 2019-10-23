const ids = ['index', 'profile', 'swipe', 'swipe_ex'];

function showPage(pageId) {
    for (let i = 0; i < ids.length; i++) {
        if (pageId == ids[i]) {
            document.getElementById(pageId).style.display = "block";
            if (pageId != 'index')
                $('#' + pageId).load(pageId + '.html', function () {
                    if (pageId == 'swipe')
                        $.getScript("js/swipe.js");
                });
        } else {
            document.getElementById(ids[i]).style.display = "none";
        }
    }
}