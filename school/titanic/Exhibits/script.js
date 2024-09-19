// scripts.js
$(document).ready(function() {
    $('.load-more').on('click', function() {
        var target = $(this).data('target');
        var extraContent = $('#extra-' + target);

        if (extraContent.is(':visible')) {
            extraContent.slideUp();
        } else {
            if (extraContent.is(':empty')) {
                $.ajax({
                    url: target + '.html',
                    method: 'GET',
                    success: function(data) {
                        extraContent.html(data);
                        extraContent.slideDown();
                    },
                    error: function() {
                        extraContent.html('<p>Failed to load content.</p>');
                        extraContent.slideDown();
                    }
                });
            } else {
                extraContent.slideDown();
            }
        }
    });
});