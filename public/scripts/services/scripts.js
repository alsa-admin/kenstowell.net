/**
 * Created by JetBrains PhpStorm.
 * User: Ken
 * Date: 5/6/12
 * Time: 7:04 PM
 */



/**********************************************************************************************************************************************************
 * GLOBAL VARS/FUNCTIONS                                                                                                                                                                                                                                                                    *
 *********************************************************************************************************************************************************/

/************************************************************* END GLOBAL VARS ***************************************************************************/


/**********************************************************************************************************************************************************
 * DOCUMENT READY                                                                                                                                                                                                                                                                              *
 *********************************************************************************************************************************************************/
$(document).ready(function () {

});

/**********************************************************************************************************************************************************
 * WINDOW LOAD                                                                                                                                                                                                                                                                              *
 *********************************************************************************************************************************************************/
$(window).load(function () {
    var s = new Services();
    window.SERV = s;
});


/**********************************************************************************************************************************************************
 * SERVICES Obect                                                                                                                                                                                                                                                                              *
 **********************************************************************************************************************************************************
 *
 *
 *
 *
 *
 *
 */
var Services = function() {
    //INIT
    this.init();
};

Services.prototype = {
    init: function() {
        var self = this;
        
        //bind events
        this.bindEvents();
        
        //load styles
        this.loadStyles();
    },
    /**
     * BIND EVENTS
     */
    bindEvents: function() {
        var self = this;
        var timer;
        //service item event management
        $('.service-item').live('mouseenter', function(e) {
            var base = this;
            if($(this).is('.active') == false) {
							$(this).stop().animate({
								'top' : '+10px'
							}, 400).css({
									'cursor': 'pointer'
								})
            }
            if($('.active').length == 0) {
                timer = setTimeout(function() {
                    self.displayService(base)
                }, 1500);
            }
          }
        ).live('mouseleave', function(e) {
            clearTimeout(timer);
                if($(this).is('.active') == false) {
                    $(this).stop().animate({
											'top' : '0'
										},200).css({
												'cursor': 'default'
											})
                }
          }
        ).live('click', function(e) {
                console.trace();
          if($('.active').length == 0) {
              self.displayService(this);
          }
         }
        );

        $('#page-wrapper, #blackout').live('click', function(e) {
            if($('.active').length != 0 ) {
                console.log(e.target)
                if(($(e.target).is('.active, .active span, .active p, .active h4, .active div')) == false ) {
                    self.hideService($('.active'));
                }
            }
        })

    },
    /**
     * LOAD STYLES
     */
    loadStyles: function() {
        var self = this;

        //Window props
        var w = {
            h: $(window).height(),
            w: $(window).width()
        };

        //services content styles
        $('#services-content').height((w.h) - ($('#services-header').height() + $('#services-footer').height()));
        //$('#services-content').css({'margin-right' : (w.w - ($('#services-content').width()))/2});
        $('#services_bg').css({
            'width' : w.w,
            'height': w.h
        });

				$('section#services-wrapper section#services-content article ul#services-list').css({
					//'margin-left' : (w.w - $('section#services-wrapper section#services-content article ul#services-list').width())/2
				});
        //black out
        $('#blackout').css({
            'width' : w.w,
            'height': w.h
        });
    },
    /**
     * DISPLAY SERVICE
     * @param elem
     */
    displayService: function(elem) {
        var self = this;

        $('.service-item').each(function() {
            if($(this).is(elem)) {
                if($(elem).is('#development')) {
                    setTimeout( function() {
                        $(elem).children(':not(span)').hide();
                        $(elem).stop().animate({
                            'width' : '1140px',
                            'height': '83%'
                        }, 1200, function() {
                            $('#blackout').fadeIn(600);
                            $(elem).addClass('active');
                            $('#development-content').fadeIn(600);
                        });
                    }, 500);
                }

                if($(elem).is('#design')) {
                    setTimeout( function() {
                        $(elem).children(':not(span)').hide();
                        $(elem).stop().animate({
                            'left'  : '0',
                            'width' : '1140px',
                            'height': '83%'
                        }, 1000, function() {
                            $('#blackout').fadeIn(600);
                            $(elem).addClass('active');
                            $('#design-content').fadeIn(600);
                        });
                    }, 500);
                }

                if($(elem).is('#consulting')) {
                    setTimeout( function() {
                        $(elem).children(':not(span)').hide();
                        $(elem).stop().animate({
                            'left'  : '0',
                            'width' : '1140px',
                            'height': '83%'
                        }, 1200, function() {
														$('span.consulting-title').css({
															'margin-right' : '10px'
														});

                            $('#blackout').fadeIn(600);
                            $(elem).addClass('active');
                            $('#consulting-content').fadeIn(600);
                        });
                    }, 500);
                }
            } else {
                $(this).fadeOut(400);
            }
        });
    },
    /**
     * HIDE SERVICE
     * @param elem
     */
    hideService: function(elem) {
        var self = this;
        var timer;

        $('.service-item').each(function(idx, itm) {
            //clearTimeout(timer);
            if($(itm).is('.active')) {
                if($(itm).is('#development')) {
                    $(itm).children('div').fadeOut(400);
                    $(itm).animate({
                        'width' : '350px',
                        'height': '190px'
                    }, 1200, function() {
                        $('#blackout').fadeOut(600);
                        $(itm).removeClass('active');
                        $(itm).children(':not(div)').fadeIn(1200);
                    });
                }

                if($(itm).is('#design')) {
                    $(itm).children('div').fadeOut(400);
                    $(itm).animate({
                        'left'  : '30px',
                        'width' : '350px',
                        'height': '190px'
                    }, 1000, function() {
                        $('#blackout').fadeOut(600);
                        $(itm).removeClass('active');
                        $(itm).children(':not(div)').fadeIn(1200);
                    });
                }

                if($(itm).is('#consulting')) {
                    $(itm).children('div').fadeOut(400);
                    $(itm).animate({
												'left' : '60px',
                        'width' : '350px',
                        'height': '190px'
                    }, 1200, function() {
                        $('#blackout').fadeOut(600);
                        $(itm).removeClass('active');
                        $(itm).children(':not(div)').fadeIn(1200);
                    });
                }
            } else {
                timer = setTimeout(function() {
                    $(itm).show(400).children(':not(div)').show(400);
                }, 1200);
            }
        });
    }
    
}
/************************************************************* END ***************************************************************************************/

