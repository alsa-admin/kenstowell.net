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
    var idx = new Index();
    window.IDX = idx;
});


/**********************************************************************************************************************************************************
 * INDEX Obect                                                                                                                                                                                                                                                                              *
 **********************************************************************************************************************************************************
 *
 *
 *
 *
 *
 *
 */
var Index = function() {
    //begin object methods
    this.init();
};

/**
 * INDEX OBJECT METHODS
 */
Index.prototype = {
    /**
     * INIT
     * @desc:
     */
    init: function() {

        //bind events
        this.bindEvents();


        //load styles
        this.loadStyles();
    },
    /**
     * BIND EVENTS
     * @desc: general event handler management
     */
    bindEvents: function() {
        var self = this;
        //used for offset increment
        var offY = -($(window).height());
            //Trigger for the footer elevation
            $('div#page-wrapper').live('mousemove', function(e) {
                if(offY < 0) {
                    offY+=(1.5);
                    self.elevateFooter(e, offY);
                }
            });
    },
    /**
     * LOAD STYLES
     * @desc: dynamically creates styling for responsive layouts
     */
    loadStyles: function() {
        var self = this;

        console.log(window)
        //window dimensions holder
        var w = {
          h: $(window).height(),
          w: $(window).width()
        };

        //page wrapper
        $('#page-wrapper').height(w.h);
        //Intro styles
        $('#intro-wrapper').height((w.h))// - ($('#intro-divider').height()));
        //intro-content-lower styles
        $('#intro-content-lower').css('bottom', -((w.h)));
        //About content styles
        $('#about-content').height((w.h) - ($('#about-header').height() + $('#about-footer').height()));

    },
    /**
     * ELEVATE FOOTER
     * @desc: makes the footer rise in height based on mousemovement
     */
    elevateFooter: function(e, offY) {

        $('div#intro-content-lower').css({
            'bottom' : offY
        });
    }
}
/************************************************************* END ***************************************************************************************/

