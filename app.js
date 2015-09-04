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
                this.cursors = this.game.input.keyboard.createCursorKeys();
            },
            update: function () {
                if (this.cursors.left.isDown) {
                    this.ball.x -= 5;
                }
                if (this.cursors.right.isDown) {
                    this.ball.x += 5;
                }
                if (this.cursors.up.isDown) {
                    this.ball.y -= 5;
                }
                if (this.cursors.down.isDown) {
                    this.ball.y += 5;
                }
            }
        });
    };
}());