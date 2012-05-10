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

									if(offY <= (-$(window).height())) {
										offY+=(1.5);
										self.elevateFooter(offY);
										console.log('1')
									} else if(offY < (-$(window).height() /1.2) && (offY > (-$(window).height()))) {
										offY+=(2.5);
										self.elevateFooter(offY);
										console.log('2')
									} else if (offY < (-$(window).height() / 3) && (offY > (-$(window).height())/ 1.2)) {
										offY+=(14.5);
										self.elevateFooter(offY);
										console.log('3')
									}
									else if (offY < (-$(window).height() / 5) && (offY > (-$(window).height())/ 3)) {
										offY+=(30);
										self.elevateFooter(offY);
										console.log('5')
									} else {
										var diff = 0 - -offY;

										offY+=(diff *-1);
										self.elevateFooter(offY);
										console.log('5', diff)
									}
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
				$('section#about-wrapper section#about-content article').css({
					'margin-top' :($('#about-content').height() - $('section#about-wrapper section#about-content article').height()) /2
				});
    },
    /**
     * ELEVATE FOOTER
     * @desc: makes the footer rise in height based on mousemovement
     */
    elevateFooter: function(offY) {

        $('div#intro-content-lower').css({
            'bottom' : offY
        });
    }
}
/************************************************************* END ***************************************************************************************/

