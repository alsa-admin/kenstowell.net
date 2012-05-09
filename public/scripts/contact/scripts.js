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
    var ct = new Contact();
    window.CT = ct;
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
var Contact = function() {
    //begin object methods
    this.init();
};

/**
 * INDEX OBJECT METHODS
 */
Contact.prototype = {
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
        $('#submit').live('click', function(e) {
            e.preventDefault();
            $('#contact-form').fadeOut(600, function() {
                $('#contact-form-submitted').fadeIn(400);
            });

            $.ajax({
                url: '/contact/submit',
                type: 'post',
                data: {
                    name: $('input[name="name"]').val(),
                    email: $('input[name="email"]').val(),
                    message: $('textarea').val()
                },
                dataType: 'json',
                success: function(data) {
                    $('#contact-form').fadeOut(600, function() {
                       $('#contact-form-submitted').fadeIn(400);
                    });
                }
            });
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

        //contact content styles
        $('#contact-content').height((w.h) - ($('#contact-header').height() + $('#contact-footer').height()));

        $('#contact_bg').css({
            'width' : w.w,
            'height': w.h
        });

    }
}
/************************************************************* END ***************************************************************************************/

