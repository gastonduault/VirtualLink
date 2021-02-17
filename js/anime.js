window.onload = function () {
    window.scrollTo(0, 1);
};

$(window).scroll(function () {
    var scrolledFromTop = $(window).scrollTop() + $(window).height();
    $(".appear").each(function () {
        var distanceFromTop = $(this).offset().top;
        if (scrolledFromTop >= distanceFromTop) {
            var delaiAnim = $(this).data("delai");
            $(this).delay(delaiAnim).animate({
                opacity: 1,
            });
        }
    });
});

var angle = 0;

function galleryspin(sign) {
    spinner = document.querySelector("#spinner");
    if (!sign) {
        angle = angle + 45;
    } else {
        angle = angle - 45;
    }
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}