var $doc = $('html,body');

$('.scrollsuave').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000)
})

$('.cabecalhoPrincipal-nav-link').click(function () {
    $('.cabecalhoPrincipal-nav-link').removeClass('active');
    $(this).addClass('active');
});

