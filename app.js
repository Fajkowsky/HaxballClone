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
            },
            create: function () {
                this.stage.backgroundColor = '#3b302a';

                this.field = this.add.sprite(10, 35, 'field');
                this.field.scale.setTo(840, 408);
            },
            update: function () {
            }
        });
    };
}());