$('.custom-accordion ul.inner-list').hide();

$('.custom-accordion > li > a').click(function () {
    $('.custom-accordion .inner-list').slideToggle();
    $(this).toggleClass('active')
});
if ($(window).width() > 1025) {
    $('.closeBar').click(function () {
        $('.secondarySidebar').toggleClass('active');
        $('.profileCardwrap').toggleClass('shrink');
        
        $(this).toggleClass('rotateArrow');
    });

    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.leftIcons li:first').addClass('active');
    $('.leftIcons li ').click(function(event) {
        
        $('.leftIcons li ').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var selectTab = $(this).find('a').attr("href");

        $(selectTab).fadeIn();
    });
}
else{
    $('.closeBar').click(function () {
        $('.secondarySidebar').toggleClass('active');
    });

    $('.tab-content ul.inner-list').hide();

    $('.tab-content > li ').click(function () {
        if ($(this).next('ul.inner-list').css('display') == 'block') {
            $(this).next('ul.inner-list').slideUp();
            $(this).find('.fa-angle-up').removeClass('fa-angle-up');
            $(this).find('.fa').addClass('fa-angle-down');
        }
        else {
            $('.tab-content ul.inner-list').slideUp();
            $('a >.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
            $(this).next('ul.inner-list').slideDown();
            $(this).find('.fa-angle-down').removeClass('fa-angle-down');
            $(this).find('.fa').addClass('fa-angle-up');

        }
    });
}



$(".quesMark").tooltip({
    placement : 'bottom'
});

$(document).on('click','#nav-icon4',function(e) {
    $(this).toggleClass("open");
    $('.secondarySidebar').toggleClass('activeMob');
    $('.rightContainer').toggleClass('blurback');
    $('body').toggleClass('bodyLock')
});