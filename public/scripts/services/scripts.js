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

        //service item event management
        $('.service-item').live('mouseenter', function(e) {
            var base = this;
            $(this).css('cursor', 'pointer');

            setTimeout(function() {
                self.displayService(base)
            }, 1500);

        }).live('click', function(e) {

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

        //services content styles
        $('#services-content').height((w.h) - ($('#services-header').height() + $('#services-footer').height()));
        //$('#services-content').css({'margin-right' : (w.w - ($('#services-content').width()))/2});
        $('#services_bg').css({
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

            } else {
                $(this).fadeOut(800);
            }
        });

        setTimeout( function() {
            $(elem.childNodes[2]).remove();
            $(elem).animate({
                'width' : '1140px'
            }, 1200);
        }, 500)
    }
    
}
/************************************************************* END ***************************************************************************************/

