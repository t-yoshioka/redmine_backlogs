$.qtipMakeOptions = function(container) {
    return {
        content: {
            text: container.attr('title')
        },
        position: {
            my: 'top left',
            target: 'mouse',
            viewport: $(window), // Keep it on-screen at all times if possible
            adjust: {
                x: 10,  y: 10
            }
        },
        hide: {
           fixed: true // Helps to prevent the tooltip from hiding ocassionally when tracking!
        }
    }
}

$(function() {
    $('div.story_tooltip').each(function(el) {
        var _ = $(this);
        _.qtip($.qtipMakeOptions(_));
    });
});
