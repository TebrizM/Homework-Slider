$(document).ready(function() {
    $('.next').on('click', function() {
        let currentImg = $('.active');
        let nextImg = currentImg.next();
        let firstImg = $('div img').first();

        if (nextImg.length) {
            let imgId = $(this).attr('data-Id')
            console.log(imgId);
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);

        } else if ($("div img").last()) {
            currentImg.removeClass("active").css("z-index", -10);
            firstImg.addClass("active").css("z-index", 10);
        }
    });

    $('.prev').on('click', function() {
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        } else if ($("div img").first()) {
            currentImg.removeClass("active").css("z-index", -10);
            $("div img").last().addClass("active").css("z-index", 10);
        }
    });
});