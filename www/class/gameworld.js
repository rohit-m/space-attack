//Init and setup game world
var game;

var gameworld = function (width,height) {
    this.height = height;
    this.width = width;

    game = new Phaser.Game(this.height, this.width, Phaser.AUTO, '', { preload: preload, create: create, update: update });
}
