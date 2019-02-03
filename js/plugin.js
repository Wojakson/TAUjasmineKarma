(function ( $ ) {

    $.fn.validate = function(regex) {
        this.each(function() {
            var elem = $( this );
            if(regex.test(elem.text())) {
                elem.css("background-color", "#00ff00")
            }
            else {
                elem.css("background-color", "#ff0000")
            }
        });
        return this;
    };

}( jQuery ));