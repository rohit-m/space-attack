//Vars
var playerObj, enemyObj;
var initPlayer, initEnemy;
var left, right, fire = false;
var canvasWidth = 600, canvasHeight = 600;
var playerWidth = 50, playerHeight = 50;
var playerVelX = 100, bulletVelY = 100;

//Eventhandlers
document.addEventListener('keydown', keypress, false);

var init = new gameworld(canvasWidth,canvasHeight);

function preload() {
    game.load.spritesheet('ship', 'assets/shipGreen_manned.png', playerWidth, playerHeight);
    game.load.spritesheet('bullet1', 'assets/shipGreen_manned.png', playerWidth, playerHeight);
    game.load.spritesheet('enemy1', 'assets/shipGreen_manned.png', playerWidth, playerHeight);
}

function create() {
    initPlayer = new player(game);
    initEnemy = new enemy(game);
}

function keypress(e) {
    var keyCode = e.keyCode;

    switch(keyCode) {
        case 65:
            right = false;
            left = true;
            break;
        case 68:
            left = false;
            right = true;
            break;
        case 32:
            fire = true;
            break;
    }
}

function update() {
    if(left) {
        initPlayer.moveLeft();
    }

    if(right) {
        initPlayer.moveRight();
    }

    if(fire) {
        initPlayer.fire();
        fire = false;
    }

}


//These functions are used in the gameworld class.
