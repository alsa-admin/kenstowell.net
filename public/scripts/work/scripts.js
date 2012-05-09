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
    var wrk = new Work();
    window.WORK = wrk;
});


/**********************************************************************************************************************************************************
 * work Obect                                                                                                                                                                                                                                                                              *
 **********************************************************************************************************************************************************
 *
 *
 *
 *
 *
 *
 */
var Work = function() {
    //INIT
    this.init();
};

Work.prototype = {
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

        //work item event management
        $('.work-item').live('mouseenter', function(e) {
                var base = this;
                $(this).css({
                    'cursor'  : 'pointer',
                    'box-shadow' : '0px 0px 28px #ff92c9'
                });
            }
        ).live('mouseleave', function(e) {
                $(this).css({
                    'cursor'  : 'default',
                    'box-shadow' : 'none'
                });
            }
        );
        //work item click management
        $('.work-item:not(#your-project), .work-item:not(#your-project) img').live('click', function(e) {
            if($(e.target).is('.work-item')) {
                $('.work-details').load('work/'+$(e.target).attr('id'), function() {
                    $('.work-item').fadeOut(600, function() {
                        $('.work-details, #blackout').fadeIn(600);
                        $('.work-details').addClass('active');
                    });
                });
            } else {
                console.log($(e.target))
                $('.work-details').load('work/'+$(e.target).parent().attr('id'), function() {
                    $('.work-item').fadeOut(600, function() {
                        $('.work-details, #blackout').fadeIn(600);
                        $('.work-details').addClass('active');
                    });
                });
            }
        });
        //work item click management
//        $('.work-item:not(#your-project)').children().live('click', function(e) {
//            $('.work-details').load('work/'+$(e.target).parent().attr('id'), function() {
//                $('.work-item').fadeOut(600, function() {
//                    $('.work-details, #blackout').fadeIn(600);
//                    $('.work-details').addClass('active');
//                });
//            });
//        });

        //Black overlay event management
        $('#page-wrapper, #blackout').live('click', function(e) {
            if($('.active').length != 0) {
                if($(e.target).is('.active, .active span, .active p, .active h4, .active *') == false) {
                    $('.active, #blackout').fadeOut(600, function() {
                        $('.active').removeClass('active').children().remove();
                        $('.work-item').fadeIn(600);
                    })
                }
            }
        });
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

        //work content styles
        $('#work-content').height((w.h) - ($('#work-header').height() + $('#work-footer').height()));
        //$('#work-content').css({'margin-right' : (w.w - ($('#work-content').width()))/2});
        $('#work_bg').css({
            'width' : w.w,
            'height': w.h
        });
        //work item image styles
        $('.work-item-image').each(function(idx, itm) {
            $(itm).css({
                'margin-top' : ($(itm).parent().height() - ($(itm).height() + $(itm).parent().children('.work-item-title').height())) / 2,
                'margin-left' : ($(itm).parent().width() - $(itm).width()) / 2
            })
        });

        //work details
        $('div.work-details').css({
            'top' : '100px',
            'height' : '80%'
        });

        //black out
        $('#blackout').css({
            'width' : w.w,
            'height': w.h
        });
    }
}
/************************************************************* END ***************************************************************************************/

