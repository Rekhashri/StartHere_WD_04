$(document).ready(function() {
    var countdownTimer = setInterval(function() {
        var days = parseInt($('#days').text());
        var hours = parseInt($('#hours').text());
        var minutes = parseInt($('#minutes').text());
        var seconds = parseInt($('#seconds').text());

        seconds--;

        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }

        if (minutes < 0) {
            hours--;
            minutes = 59;
        }

        if (hours < 0) {
            days--;
            hours = 23;
        }

        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            clearInterval(countdownTimer);
            alert('The event has started!');
        }
    }, 1000);
});