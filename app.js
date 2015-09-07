(function () {
    'use strict';
    var config = {
        HEIGHT: 860,
        WIDTH: 455
    };
    window.onload = function () {
        var game = new Phaser.Game(config.HEIGHT, config.WIDTH, Phaser.AUTO, 'haxball', {
            preload: function () {
                this.load.image('field', 'assets/images/field.png');
                this.load.image('ball', 'assets/images/ball.png');
                this.load.image('redPlayer', 'assets/images/red_player.png');
                this.load.image('redPlayerKick', 'assets/images/red_player_kick.png');
            },
            create: function () {
                this.stage.backgroundColor = '#3b302a';

                this.field = this.add.sprite(10, 35, 'field');
                this.field.scale.setTo(840, 408);

                this.ball = this.add.sprite(50, 50, 'ball');
                this.redPlayer = this.add.sprite(100, 50, 'redPlayer');

                this.cursors = this.input.keyboard.createCursorKeys();
            },
            update: function () {
                if (this.cursors.down.isDown) {
                    this.redPlayer.loadTexture('redPlayerKick');
                } else {
                    this.redPlayer.loadTexture('redPlayer');
                }
            }
        });
    };
}());