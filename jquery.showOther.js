;(function( $ ){

    'use strict';

    $.fn.showOther = function(options) {
        var settings = $.extend({
            optionAttr: 'option-value',
            targetAttr: 'target-element',
            toggleClass: 'active'
        }, options);
        
        var $this = $(this);
        var $target = $('#' + $this.data(settings.targetAttr));

        this.on('change', function() {
            if ($this.val() === $this.data(settings.optionAttr)) {
                $target.addClass(settings.toggleClass);
            } else if ($target.hasClass(settings.toggleClass)) {
                $target.removeClass(settings.toggleClass);
            }
        });
        
        $(document).ready(function () {
            if ($this.val() === $this.data(settings.optionAttr)) {
                $target.addClass(settings.toggleClass);
            }
        });

        return this;
    };

})( window.jQuery );
