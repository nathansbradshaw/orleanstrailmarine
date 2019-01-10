$(document).ready(function() {
    $('#faq-list h2').click(function() {

        $(this).next('.answer').slideToggle(400);

    });
});