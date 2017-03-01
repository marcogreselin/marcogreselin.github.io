(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "madeinakqa",
        devKey: "AIzaSyBe3egPcevIzoMuHAXJqCRIFesMzgdKl_4",
        showLatestChannel: true,
        channels: [
            // {
            //     type: "playlist",
            //     id: "PLMPNfilir4fxSYw5mHlOrukkAEMH",
            //     title: "AKQA Future Lions"
            // },
            {
                type: "playlist",
                id: "PLMPNfilir4fxBKI_sqtFFaQgwIART_2Zg",
                title: "AKQA Work"
            },
            {
                type: "playlist",
                id: "PLMPNfilir4fzDGsfPugdqOImkywDT7ft-",
                title: "AKQA Future Lions"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));