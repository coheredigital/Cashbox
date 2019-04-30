$.fn.cashbox = function(options) {
    
    // default options.
    var settings = $.extend(
        {
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
        var $this = $(this);
        var $content;

        $this.on("click", function(event) {

            event.preventDefault();
            $body.addClass(settings.classes.bodyOpenClass);
            $placeholder.toggleClass(settings.classes.placeholderToggleClass);

            // get data attributes
            if ($this.data("cashbox-target")) {
                var target = $this.data("cashbox-target");
                var $target = $(target);
                $content = $($target.html());
            }
            else {
                var imageSrc = $this.attr("href");

                $content = $("<img>")
                    .addClass(settings.classes.image)
                    .attr("src",imageSrc);

            }
            $content.appendTo($placeholder);
        });
    });
};