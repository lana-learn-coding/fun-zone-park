function loadIncludedTemplate() {
    $('[data-include-template]').each(function () {
        const file = 'templates/' + $(this).data('include-template') + '.html';
        $(this).load(file);
    });
}

$(function () {
    loadIncludedTemplate();
});
