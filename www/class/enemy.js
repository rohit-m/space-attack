var enemy = function(game) {
    this.health = 2;
    for(i = 0; i < 5; i++) {
        enemyObj = game.add.sprite(i*60, 0, 'enemy1');
    }
    game.physics.arcade.enable(enemyObj);
}

enemy.prototype.checkCollision = function() {
    //Check with walls
}