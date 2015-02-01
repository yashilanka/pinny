define([
    '$'
], function($) {

    var $body = $(document.body);

    var setUp = function(fixture, suite, done) {
        var $frame = $('<iframe />').attr('src', '/tests/fixtures/' + fixture + '.html');

        var $oldiFrame = $body.find('iframe');

        if ($oldiFrame.length) {
            $oldiFrame.replaceWith($frame);
        } else {
            $body.append($frame);
        }

        $(window).one('message', function() {
            var frameWindow = $frame[0].contentWindow;

            suite(frameWindow.$, frameWindow.modalCenter);
            done();
        });
    };

    return {
        setUp: setUp
    }
});