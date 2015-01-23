;(function( $ ){

    'use strict';

    $.fn.showOther = function(options) {
        var settings = $.extend({
            optionAttr: 'option-value',
            targetAttr: 'target-element',
            toggleClass: 'active'
        }, options);

        this.on('change', function() {
            var $this = $(this);
            var $target = $('#' + $this.data(settings.targetAttr));

            if ($this.val() === $this.data(settings.optionAttr)) {
                $target.addClass(settings.toggleClass);
            } else if ($target.hasClass(settings.toggleClass)) {
                $target.removeClass(settings.toggleClass);
            }

            return this;
        });

    };

})( window.jQuery );
