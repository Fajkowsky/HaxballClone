(function () {
    'use strict';
    var config = {
        HEIGHT: 800,
        WIDTH: 600
    };
    window.onload = function () {
        var game = new Phaser.Game(config.HEIGHT, config.WIDTH, Phaser.AUTO, '', {
            preload: function () {
                this.load.image('bluePlayer', 'assets/images/blue_player.png');
                this.load.image('bluePlayerShot', 'assets/images/blue_player_shot.png');
            },
            create: function () {
                this.stage.backgroundColor = '#939e7f';
                this.bluePlayer = this.game.add.sprite(this.world.centerX, this.world.centerY, 'bluePlayer');
                this.cursors = this.game.input.keyboard.createCursorKeys();
            },
            update: function () {
                if (this.cursors.left.isDown) {
                    this.bluePlayer.x -= 5;
                }
                if (this.cursors.right.isDown) {
                    this.bluePlayer.x += 5;
                }
                if (this.cursors.up.isDown) {
                    this.bluePlayer.y -= 5;
                }
                if (this.cursors.down.isDown) {
                    this.bluePlayer.y += 5;
                }
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                    this.bluePlayer.loadTexture('bluePlayerShot');
                } else {
                    this.bluePlayer.loadTexture('bluePlayer');
                }
            }
        });
    };
}());