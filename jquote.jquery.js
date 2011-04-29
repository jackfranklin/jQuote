jQuery.fn.jQuote = function(options) {

    var defaults = {
        quoteClass : '.quote',
        blockQuoteClass: 'jquote-block'
    };
    var settings = $.extend({}, defaults, options);
    return this.each(function() {
        var $t = $(this),
            allQuotes = $t.find(settings.quoteClass);
        allQuotes.each(function() {
            var $that = $(this),
                content = $that.text(),
                author = $that.attr("title"),
                blockQuote = $('<blockquote/>', {
                    "class": settings.blockQuoteClass,
                    "html" : "<p>" + content + "<strong>" + author + "</strong></p>"
                }).insertBefore($that);
        });
    });
};
