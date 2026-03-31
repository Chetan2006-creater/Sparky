$(document).ready(function() {
	$('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn",
        },
        out: {
            effect: "bounceOut",
        },

    });

    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 840,
        height: 200,
        style: "ios9",
        amplitude: "3",
        speed: "0.3",
        autostart: true
    });

    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true,
        },

    });

    $("#micBtn").click(function()  {
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.playclickSound();
        eel.allCommands()();
    });
});