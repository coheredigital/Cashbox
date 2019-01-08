$.fn.cashbox = function(options) {
    
    // default options.
    var settings = $.extend(
        {
            debug: false,
            placeholder: "<div class='cashbox--placeholder'></div>",
            toggleClass: "cashbox--is-hidden",
            gallery: true,
            classes: {
                placeholder: '',
                placeholderToggleClass: 'cashbox--is-hidden',
                bodyOpenClass: 'cashbox--is-open',
                image: '',
                closeButton: '',
                nextButton: '',
                prevButton: '',
            }
        },
        options
    );

    // add the holder element
    var $body = $("body");
    var $placeholder = $(settings.placeholder).addClass(settings.classes.placeholder);

    $body.append($placeholder);

    $placeholder.on("click", function() {
        $placeholder.close();
    });

    $.fn.close = function() {
        $body.removeClass(settings.classes.bodyOpenClass);
        $placeholder.toggleClass(settings.classes.placeholderToggleClass).html("");
    };

    return this.each(function() {
        var $item = $(this);
        var $img = $("<img>").addClass(settings.classes.image);
        
        $item.on("click", function(event) {
            event.preventDefault();
            var imageSrc = $item.attr("href");
            $body.addClass(settings.classes.bodyOpenClass);
            $placeholder.toggleClass(settings.classes.placeholderToggleClass);
            $img.attr("src",imageSrc);
            $placeholder.append($img);
        });
    });
};