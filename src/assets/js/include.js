$(function () {
    const includes = $('[data-include-template]');
    jQuery.each(includes, function () {
        const file = 'templates/' + $(this).data('include-template') + '.html';
        $(this).load(file);
    });
});
