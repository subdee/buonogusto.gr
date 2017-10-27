$(window).load(function () {
    $('.slider')._TMS({
        preset: 'diagonalExpand',
        easing: 'easeOutQuad',
        duration: 800,
        pagination: true,
        slideshow: 8000,
        banners: true,
        waitBannerAnimation: false,
        bannerShow: function (banner) {
            banner
                .css({opacity: '0'})
                .stop()
                .animate({opacity: '1'}, 700, function () {
                    $(this).css({opacity: 'none'})
                })
        },
        bannerHide: function (banner) {
            banner
                .stop()
                .animate({opacity: '0'}, 700)
        }
    })
})
