$(document).ready(function () {
    $('.mgt-developer-toolbar-sidebar-block-parent a').click(function() {
        $(this).next('ul.mgt-developer-toolbar-sidebar-block-properties').toggle();
    });
});
