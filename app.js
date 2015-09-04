(function () {
    'use strict';
    var config = {
        HEIGHT: 800,
        WIDTH: 600
    };

    window.onload = function () {
        var game = new Phaser.Game(config.HEIGHT, config.WIDTH, Phaser.AUTO, 'gameContainer');
    };
}());