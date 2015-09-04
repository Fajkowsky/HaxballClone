(function () {
    'use strict';
    var config = {
        HEIGHT: 800,
        WIDTH: 600
    };
    window.onload = function () {
        var game = new Phaser.Game(config.HEIGHT, config.WIDTH, Phaser.AUTO, '', {
                preload: function () {
                    this.load.image('player', 'assets/images/ball.png');
                },
                create: function () {
                    this.stage.backgroundColor = '#939e7f';
                    this.ball = this.game.add.sprite(this.world.centerX, this.world.centerY, 'player');
                },
                update: function () {
                    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                        this.ball.velocity = -5;
                    }
                }
            });
    };
}());