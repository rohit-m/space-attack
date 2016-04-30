var player = function (game) {
    //this.game = game;
    //Player stats
    this.lives = 3;
    this.health = 10;
    this.firepower = 1;
    this.initPosX = 0;
    //50 being the size of the sprite
    this.initPosY = canvasHeight - 50;
    //Player sprites
    playerObj = game.add.sprite(this.initPosX, this.initPosY, 'ship');
    game.physics.arcade.enable(playerObj);
}

player.prototype.moveLeft = function () {
    if (playerObj.body.position.x <= 0) {
        playerObj.body.velocity.x = 0;
        playerObj.body.position.x = 0;
    } else {
        playerObj.body.velocity.x = -playerVelX;
    }
}

player.prototype.moveRight = function () {
    if (playerObj.body.position.x >= canvasWidth - playerWidth) {
        playerObj.body.velocity.x = 0;
        playerObj.body.position.x = canvasWidth - playerWidth;
    } else {
        playerObj.body.velocity.x = playerVelX;
    }
}

//TODO:Should bullet be sublcass of player?
player.prototype.fire = function() {
    var bullet = game.add.sprite(playerObj.body.position.x, playerObj.body.position.y, 'bullet1');
    game.physics.arcade.enable(bullet);
    if(bullet.body.position.y < 0) {
        bullet.kill();
    } else {
        bullet.body.velocity.y = -bulletVelY;
    }
}