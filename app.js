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

                this.ball = this.add.sprite(100, 100, 'ball');
                this.redPlayer = this.add.sprite(200, 100, 'redPlayer');

                this.physics.startSystem(Phaser.Physics.P2JS);
                this.physics.p2.enable([this.ball, this.redPlayer], true);

                this.ball.body.setCircle(10);
                this.redPlayer.body.setCircle(16);
                //this.ball.body.fixedRotation = true;
                this.redPlayer.body.fixedRotation = true;
                this.ball.body.damping = 0.7;
                this.redPlayer.body.damping = 0.7;

                this.shotBall = function () {
                    this.ball.body.thrust(30000);
                };

                this.ball.body.createBodyCallback(this.redPlayer, this.shotBall, this);
                this.physics.p2.setImpactEvents(true);

                this.cursors = this.input.keyboard.createCursorKeys();
            },
            update: function () {
                var rpVelocity = this.redPlayer.body.velocity;

                if (this.cursors.up.isDown && rpVelocity.y >= -100) {
                    rpVelocity.y -= 5;
                } else if (this.cursors.down.isDown && rpVelocity.y <= 100) {
                    rpVelocity.y += 5;
                }
                if (this.cursors.left.isDown && rpVelocity.x >= -100) {
                    rpVelocity.x -= 5;
                } else if (this.cursors.right.isDown && rpVelocity.x <= 100) {
                    rpVelocity.x += 5;
                }
                if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                    this.redPlayer.loadTexture('redPlayerKick');
                } else {
                    this.redPlayer.loadTexture('redPlayer');
                }
            }
        });
    };
}());