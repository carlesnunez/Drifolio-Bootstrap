(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
    // Audio example: ['id', 'pathPNG', 'pathJSON']
    atlasJSONHash: [
      ['levelButtons', 'assets/images/lvlSelection/lvl_buttons.png', 'assets/images/lvlSelection/lvl_buttons.json'],

      // Play state
      ['runes', 'assets/Play/runes.png', 'assets/Play/runes.json'],
      //  Game Won state
      ['wonStars', 'assets/GameWon/wonStars.png', 'assets/GameWon/wonStars.json'],
      ['gameWonButtons', 'assets/GameWon/game_buttons.png', 'assets/GameWon/game_buttons.json'],

      ['homeButtons', 'assets/images/menu/home_buttons.png', 'assets/images/menu/home_buttons.json'],
      ['goHomeButton', 'assets/images/menu/home_button.png', 'assets/images/menu/home_button.json'],

      ['uiButtons', 'assets/images/play/ui-buttons.png', 'assets/images/play/ui-buttons.json'],
      ['tutorial', 'assets/images/menu/tutorial.png', 'assets/images/menu/tutorial.json']

    ],
    // Audio example: ['id', ['pathMP3', 'pathOGG']
    audio: [
        ['moveStone', 'assets/audio/stone.wav'],
        ['gameLoop', 'assets/audio/game-loop-sound.mp3'],
        ['matchSuccess', 'assets/audio/match-sound.mp3']
    ],
    // BitmapFont exampls: ['id', 'pathPNG', 'pathFNT']
    bitmapFont: [],
    // Image example: ['id', 'path']
    image: [
        ['menuBg', 'assets/images/menu/start_bg.png'],
        ['btnPlay', 'assets/images/menu/btn_play.png'],
        ['bubbles', 'assets/images/menu/bubbles.png'],
        ['gameLogo', 'assets/images/menu/game_logo.png'],
        ['gameBg', 'assets/images/background/bg.png'],
        ['gridBg', 'assets/images/grid/grid_bg.png'],
        ['waterOfDead', 'assets/images/gameOver/water.png'],
        ['gameOver', 'assets/images/gameOver/game_over.png'],
        ['header', 'assets/images/play/header.png'],
        ['menuBg', 'assets/images/menu/start_bg.png'],
        ['shine01', 'assets/images/play/shine_01.png'],
        ['shine02', 'assets/images/play/shine_02.png'],
        ['team', 'assets/images/menu/team.jpg'],
        ['star', 'assets/images/lvlSelection/star_counter.png'],
        ['moveCounter', 'assets/images/play/move_counter.png'],
        ['commingSoon', 'assets/GameWon/coming_soon.png'],
        ['tutorialBg', 'assets/images/menu/tutorial_bg.png'],
    ],
    // Spritesheet example: ['id', 'path', 'width', 'height', framesToLoad(optional)]
    spritesheet: [
        //['rabbit', 'assets/images/characters/rabbit.png', 100, 120, 16]
    ],
    // Text example: ['id', 'path']
    text: []
};

},{}],2:[function(require,module,exports){
'use strict';

module.exports = {
  width: 148,
  height: 148,
  offsetWidth: 93,
  offsetHeight: 127
};

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
  DRAGGABLE: '1',
  ROTABLE: '2',
  ROTABLE_DRAGABLE: '3'
};

},{}],4:[function(require,module,exports){
module.exports = [
    // LocalStorage
    'getStoredData',
    'storeData',
    'updateSteps',
    'gameOver'
];

},{}],5:[function(require,module,exports){
'use strict';

module.exports = {
    // HD Ready
    height : 960,
    width  : 640,
    wrapper: 'canvas-wrapper',
    twoStarsPercentageLimit: 1.5
    // , scale : 1
};

},{}],6:[function(require,module,exports){
'use strict';

module.exports = {
    levelSelection: null,
    currentLevel: 0,
    steps: 0,
    mute: false
};

},{}],7:[function(require,module,exports){
/**
 * The level data structure is created as follows:
 *
 * Grid: grid contains an a bidimensional array(X,Y) that can contains the follow:
 *  1- 0 (theres no piece on that position).
 *  2- Array - If there's a piece on that position we should put an array of 5 positions. Each position corresponds to the next:
 *    [<type-of-pice>:String, <top-side>:int, <right-side>:int, <bottom-side>:int, <left-side>:int]
 *  For example:
 *    ['1', 1, 0, 0, 0] - That will correspond to a piece type draggable with only one pin on the top side.
 *                                    0
 *                               -----------
 *                              |           |
 *                           3  |   Block   |  1
 *                              |   piece   |
 *                              |           |
 *                               -----------
 *                                    2
 * Stars: The stars that we reach on that level
 * Blocked: If the level has not played yet
 * @param
 * @returns
 */

module.exports = [
//1
    {
        grid: [
            [0,0,0,0],
            [0,0,0,0],
            [['1', 0, 1, 0, 0],0,0,['1', 0, 0, 0, 1]],
            [0,0,0,0]

        ],
        minSteps: 1,
        maxSteps: 2,
        stars: '0',
        blocked: false
    },
    {
        grid: [
            [['1', 0, 2, 3, 0],0,0,0],
            [0,0,0,['1', 0, 0, 2, 2]],
            [0,0,0,0],
            [0,['1', 3, 2, 0, 0],0,['1', 2, 0, 0, 2]]
        ],
        minSteps: 3,
        maxSteps: 6,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [0,0,0,0],
            [0,['2', 0, 0, 1, 0],0,0],
            [0,['2', 1, 2, 0, 0],['2', 2, 0, 0, 0],0],
            [0,0,0,0]
        ],
        minSteps: 3,
        maxSteps: 6,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [0,0,0,0],
            [0,['2', 0, 3, 0, 0],0,0],
            [0,0,['1', 1, 0, 0, 0],0],
            [['3', 1, 3, 0, 0],0,0,0]
        ],
        minSteps: 5,
        maxSteps: 8,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [0,0,0,0],
            [0,['2', 0, 0, 3, 0],['2', 2, 3, 0, 3],['2', 0, 0, 1, 3]],
            [0,0,['2', 0, 0, 2, 3],['2', 0, 3, 1, 0]],
            [0,0,0,0]
        ],
        minSteps: 9,
        maxSteps: 12,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [0,0,0,0],
            [['1', 3, 0, 0, 3],0,['1', 0, 3, 0, 0],0],
            [['1', 0, 0, 3, 0],0,0,0],
            [0,0,0,['1', 3, 0, 3, 0]]
        ],
        minSteps: 4,
        maxSteps: 7,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [0,['1', 0, 2, 0, 2],['1', 2, 0, 0, 2],['1', 0, 0, 2, 0]],
            [0,0,0,0],
            [0,0,0,0],
            [['1', 3, 0, 0, 0],['1', 0, 2, 3, 0],0,0]
        ],
        minSteps: 4,
        maxSteps: 7,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [0,0,0,['1', 0, 2, 0, 3]],
            [['1', 0, 1, 0, 2],0,0,0],
            [0,0,0,0],
            [['2', 0, 0, 3, 0],0,0,['2', 1, 0, 0, 0]]
        ],
        minSteps: 8,
        maxSteps: 16,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [['1', 0, 2, 3, 0],['3', 0, 2, 0, 0],0,['1', 1, 2, 0, 2]],
            [['2', 3, 2, 1, 0],0,0,0],
            [['2', 0, 1, 0, 0],0,['3', 1, 2, 0, 0],0],
            [0,0,0,0]
        ],
        minSteps: 11,
        maxSteps: 12,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [0,['1', 3, 3, 0, 0],0,0],
            [0,0,['2', 1, 0, 0, 3],['1', 0, 1, 0, 0]],
            [0,0,0,['2', 0, 3, 0, 0]],
            [0,0,0,0]
        ],
        minSteps: 7,
        maxSteps: 10,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [['1', 3, 1, 0, 0],['1', 0, 3, 2, 0],['1', 2, 1, 3, 0],['1', 0, 0, 2, 3]],
            [0,['1', 1, 0, 0, 1],0,['1', 2, 0, 1, 1]],
            [0,0,0,0],
            [0,0,0,0]
        ],
        minSteps: 8,
        maxSteps: 10,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [0,0,['1', 0, 1, 3, 0],['2', 2, 1, 0, 0]],
            [0,0,0,0],
            [['3', 2, 2, 0, 0],['3', 0, 3, 2, 0],0,0],
            [0,0,0,0]
        ],
        minSteps: 10,
        maxSteps: 11,
        stars: '0',
        blocked: true
    },
    {
        grid: [
            [0,0,0,['2', 1, 0, 0, 0]],
            [0,['2', 0, 0, 2, 0],['2', 2, 0, 2, 0],['2', 2, 1, 0, 3]],
            [0,0,0,['2', 0, 3, 0, 0]],
            [0,0,0,0]
        ],
        minSteps: 12,
        maxSteps: 12,
        stars: '0',
        blocked: true
    }

];

},{}],8:[function(require,module,exports){
module.exports = {
    maxLevelsPerPage: 9,
    maxLevelsPerRow: 3,
    group: {
        offSetX: 30,
        offSetY: 200
    },
    buttons: {
        offSetX: 20,
        offSetY: 20,
        width: 170,
        height: 170,
        text: {
            x: 86,
            y: 70,
            anchorX: 0.5,
            anchorY: 0.5

        }
    }

};

},{}],9:[function(require,module,exports){
'use strict';

function Dispatcher() {
}

Dispatcher.prototype = {
    init: function init(game, events) {
        this.game = game;
        this.game.events = {};

        events.map(function (event) {
            this.game.events[event] = new Phaser.Signal();
        }, this);
    },

    dispatch: function dispatch(event) {
        if (this.game.events[event]) {
            var args = [].slice.call(arguments, 1, arguments.length);

            this.game.events[event].dispatch.apply(this.game.events[event], args);
        } else {
            console.error('EVENT ' + event + ' DOESN\'T EXISTS');
        }

    },

    listen: function listen(ctx, events) {
        for (var i = 0, eventsL = events.length; i < eventsL; i++) {
            events.map(function (event) {
                var key = Object.getOwnPropertyNames(event)[0],
                    item = event[key];

                if (typeof item === 'function') {
                    if (this.game.events[key]) {
                        this.game.events[key].add(item, ctx);
                    } else {
                        console.error('EVENT ' + key + ' NOT FOUND');
                    }
                }
            }, this);
        }
    }
};

module.exports = new Dispatcher();

},{}],10:[function(require,module,exports){
'use strict';

var utils = (function () {

    var getRandomBool = function getRandomBool() {
        return Math.random() < .5;
    };

    var getRandomFloat = function getRandomFloat(min, max) {
        return (Math.random() * (max - min)) + min;
    };

    var getRandomInt = function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var formatDate = function formatDate(ms) {
        var minutes, seconds;

        minutes = _paddingZero(Math.floor(ms / 1000 / 60));
        seconds = _paddingZero(Math.floor(ms / 1000) % 60);

        // Can return with double dots. Check used font
        //return minutes + ':' + seconds;
        return minutes + ' ' + seconds;
    };

    var _paddingZero = function _paddingZero(number) {
        return (number < 10) ? '0' + number : number;
    };

    var shuffleString = function shuffleString(str) {
        var a = str.split(''),
            n = a.length;

        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join('');
    };

    var shuffleArray = function shuffleArray(array) {
        var counter = array.length;

        while (counter > 0) {
            // Pick a random index
            var index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            var temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    };

    return {
        getRandomBool: getRandomBool,
        getRandomInt: getRandomInt,
        getRandomFloat: getRandomFloat,
        formatDate: formatDate,
        shuffleString: shuffleString,
        shuffleArray: shuffleArray
    }
})();

module.exports = utils;
},{}],11:[function(require,module,exports){
'use strict';

var gameConfig = require('./configurations/game'),
    gameData   = require('./configurations/gameData');

var DESING_WIDTH = gameConfig.width,
    DESING_HEIGHT = gameConfig.height;

window.onload = function () {
  var game, width, height;

  width = DESING_WIDTH;
  height = Math.round(DESING_WIDTH * (window.innerHeight / window.innerWidth));

  if (height < DESING_HEIGHT) {
      width = Math.round(DESING_HEIGHT * (window.innerWidth / window.innerHeight));
      height = DESING_HEIGHT;
  }

  game = new Phaser.Game(width, height, Phaser.AUTO);

  game.gameData = gameData || {};

  game.state.add('achievements', require('./states/Achievements'));
  game.state.add('boot', require('./states/Boot'));
  game.state.add('credits', require('./states/Credits'));
  game.state.add('gameover', require('./states/GameOver'));
  game.state.add('gamewon', require('./states/GameWon'));
  game.state.add('menu', require('./states/Menu'));
  game.state.add('levelSelection', require('./states/LevelSelection'));
  game.state.add('play', require('./states/Play'));
  game.state.add('preload', require('./states/Preload'));

  game.state.start('boot');
};

},{"./configurations/game":5,"./configurations/gameData":6,"./states/Achievements":19,"./states/Boot":20,"./states/Credits":21,"./states/GameOver":22,"./states/GameWon":23,"./states/LevelSelection":24,"./states/Menu":25,"./states/Play":26,"./states/Preload":27}],12:[function(require,module,exports){
var dispatcher = require('../core/Dispatcher');

var GameOver = function(game) {
    Phaser.Group.call(this, game);
    var wave = this.game.add.sprite(0, this.game.world.height-100, 'waterOfDead');
    wave.alpha = 0.8;
    wave.inputEnabled = true;
    this.waveTween = this.game.add.tween(wave).to( { y: 0 }, 1000, "Quart.easeOut");
    this.slowMovementTween = this.game.add.tween(wave).to( { y: this.game.world.height-125 }, 3000, Phaser.Easing.Default, false, 0, -1, true);
    this.slowMovementTween.start();


    var gameOver = function(){
        this.slowMovementTween.stop();
        this.waveTween.start().onComplete.add(function(){
            game.state.start('gameover');
        }.bind(this));
    }.bind(this);

    var events = [
        {'gameOver': gameOver},

    ];

    dispatcher.listen(this, events);


};




GameOver.prototype = Object.create(Phaser.Group.prototype);
GameOver.prototype.constructor = GameOver;


module.exports = GameOver;

},{"../core/Dispatcher":9}],13:[function(require,module,exports){
var connectorsConf = require('../configurations/connectors');
var connecterTypeConfig = require('../configurations/connectorsType');
var ConnecterDraggable = require('../modules/connecters/ConnecterDraggable');
var ConnecterRotable = require('../modules/connecters/ConnecterRotable');
var ConnecterRotableDraggable = require('../modules/connecters/ConnecterRotableDraggable');
var gameData = require('../configurations/gameData');
var dispatcher = require('../core/Dispatcher');

var NORTH = 1,
    EAST = 2,
    SOUTH = 3,
    WEST = 4;

var Grid = function(columns, rows, levelDefinition, game) {
    Phaser.Group.call(this, game);
    this.gridXY = [];
    this.columns = columns;
    this.rows = rows;
    this.game = game;
    this.levelDefinition = levelDefinition;
    this.x = 0;
    this.y = 115;
    this.init();
    this.putPiecesOnTheGrid(levelDefinition);
}

Grid.prototype = Object.create(Phaser.Group.prototype);

Grid.prototype.putPiecesOnTheGrid = function(originalLevelDefinition) {
    var levelDefinition = this.shuffle(originalLevelDefinition)
    for (var y = 0; y < levelDefinition.grid.length; y++) {
        for (var x = 0; x < levelDefinition.grid[y].length; x++) {
            var currentCell = levelDefinition.grid[y][x];

            //connector = new ConnecterDraggable({x: connectorsConf.offsetWidth + (connectorsConf.width * x), y: connectorsConf.offsetHeight + (connectorsConf.height * y), game: this.game, parent: this});
            currentX = connectorsConf.offsetWidth + (connectorsConf.width * x);
            currentY = connectorsConf.offsetHeight + (connectorsConf.height * y);

            this.gridXY[x] = this.gridXY[x] || [];
            this.gridXY[x][y] = this.gridXY[x][y] || [];
            this.gridXY[x][y] = {
                x: currentX,
                y: currentY
            };

            if (Array.isArray(currentCell)) {
                var connector = this.createNewConnector(currentX, currentY, x, y, currentCell[0], currentCell.slice(1));
                //The array of currentCell[1] ... [2] ... [3] ... corresponds to the pin positions, more info at level-selection config file
                this.addPiece(y, x, {
                    pins: currentCell,
                    sprite: connector
                });
            }
        }
    }

    this.check();
}

Grid.prototype.init = function() {
    var grid = this.create(20, 50, 'gridBg');
    this.matchSound = this.game.add.audio('matchSuccess', 0.1);
    this.reset();
}

Grid.prototype.reset = function() {
    this.cells = [];

    for (var i = 0; i < this.rows; i++) {
        this.cells[i] = [];

        for (var j = 0; j < this.columns; j++) {
            this.cells[i][j] = null;
        }
    }
}

Grid.prototype.addPiece = function(row, col, piece) {
    this.cells[row][col] = piece;
}

Grid.prototype.getNeightbour = function(i, j, side) {
    var neighbourts = [
        "", {
            i: -1,
            j: 0
        }, {
            i: 0,
            j: 1
        }, {
            i: 1,
            j: 0
        }, {
            i: 0,
            j: -1
        }
    ];

    var pos = {
        i: i + neighbourts[side].i,
        j: j + neighbourts[side].j
    }

    if (pos.i >= 0 && pos.i < this.columns && pos.j >= 0 && pos.j < this.rows) {
        return this.cells[pos.i][pos.j];
    } else {
        return null;
    }

};

Grid.prototype.check = function() {
    var solved = true,
        counterSide = [];

    counterSide[NORTH] = SOUTH;
    counterSide[SOUTH] = NORTH;
    counterSide[WEST] = EAST;
    counterSide[EAST] = WEST;

    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            var cell = this.cells[i][j];

            if (cell) {
                var lights = [true, true, true, true];

                for (side = 1; side < 5; side++) {
                    var neighbourt = this.getNeightbour(i, j, side);

                    if (!neighbourt && cell.pins[side] > 0) {
                        lights[side - 1] = false;
                        solved = false;
                    } else if (neighbourt && cell.pins[side] !== neighbourt.pins[counterSide[side]]) {
                        lights[side - 1] = false;
                        solved = false;
                    }

                    if (cell.pins[side] === 0) {
                        lights[side - 1] = false;
                    }
                }

                cell.sprite.switchLights(lights);
            }
        }
    }
    return solved;
};

Grid.prototype.lightsOff = function() {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            var cell = this.cells[i][j];

            if (cell) {
                cell.sprite.switchLights([false, false, false, false]);
            }
        }
    }
}

Grid.prototype.onConnecterChange = function onConnecterChange(params) {
        //Si ha sido un movimiento de dragg
        if (params.x && params.y) {
            this.setClosePosition(params);

            //Si ha sido un movimiento de rotación
        } else {
            //COGER EL ITEM
            gameData.steps++;
            var currentGridPosition = params.connecter.gridPosition;
            var currentCell = this.cells[currentGridPosition.row][currentGridPosition.column];

            var lastSide = currentCell.pins.pop();
            currentCell.pins.splice(1, 0, lastSide);

            var lastSideLigth = params.connecter.pins.pop();
            params.connecter.pins.splice(0,0,lastSideLigth );
        }

        //Comprobación de nivel

        dispatcher.dispatch('updateSteps');
        if (this.check()) {
            var count = true;

            var loop = function() {
                    if (count < 4) {
                        if (count % 2 === 0) {
                            this.lightsOff();
                        } else {
                            this.check();
                        }
                    }

                    count++;
                }

            //HAS GANADO
            this.setAll('inputEnabled', false);
            this.matchSound.play();
            var event = this.game.time.events.repeat(Phaser.Timer.SECOND / 4, 8, loop, this);
            event.timer.onComplete.addOnce(function() {
                this.game.state.start('gamewon');
            }, this);
        } else {
            if (gameData.steps >= this.levelDefinition.maxSteps) {
                gameData.steps = 0;

                dispatcher.dispatch('gameOver');
            }
        };

    },

    Grid.prototype.setClosePosition = function setClosePosition(params) {
        var currentX = 0;
        var currentY = 0;
        var gridColumn = 0;
        var gridRow = 0;

        for (var i = 0; i < this.gridXY.length; i++) {
            for (var j = 0; j < this.gridXY[i].length; j++) {
                if (Math.abs(currentX - params.x) > Math.abs(this.gridXY[i][j].x - params.x) || currentX === 0) {
                    currentX = this.gridXY[i][j].x;
                    gridColumn = i;
                }
                if (Math.abs(currentY - params.y) > Math.abs(this.gridXY[i][j].y - params.y) || currentY === 0) {
                    currentY = this.gridXY[i][j].y;
                    gridRow = j;
                }
            }
        }
        //Updateamos el GRID si no está la posición ocupada
        var currentGridPosition = params.connecter.gridPosition;
        if (!this.cells[gridRow][gridColumn]) {
            gameData.steps++;
            var currentGridPosition = params.connecter.gridPosition;
            var coonecterInfo = (this.cells[currentGridPosition.row][currentGridPosition.column]);

            this.cells[currentGridPosition.row][currentGridPosition.column] = 0;
            this.cells[gridRow][gridColumn] = coonecterInfo;

            params.connecter.updatePosition(currentX, currentY, {
                column: gridColumn,
                row: gridRow
            });
        } else {
            params.connecter.updatePosition(this.gridXY[currentGridPosition.column][currentGridPosition.row].x, this.gridXY[currentGridPosition.column][currentGridPosition.row].y, {
                column: currentGridPosition.column,
                row: currentGridPosition.row
            });
        }

    }

    Grid.prototype.createNewConnector = function createNewConnector(x, y, column, row, type, pins) {
        var connector;
        var params = {
            x: x,
            y: y,
            gridPosition: {
                column: column,
                row: row
            },
            game: this.game,
            callback: this.onConnecterChange,
            parent: this
        };
        var centerBaseName;

        switch (type) {
            case connecterTypeConfig.DRAGGABLE:
                connector = new ConnecterDraggable(params);
                centerBaseName = 'rune_center_drag';
                break;
            case connecterTypeConfig.ROTABLE:
                connector = new ConnecterRotable(params);
                centerBaseName = 'rune_center_rotate';
                break;
            case connecterTypeConfig.ROTABLE_DRAGABLE:
                connector = new ConnecterRotableDraggable(params);
                centerBaseName = 'rune_center_drag_rotate';
                break;
            default:
        }

        // Add pins sprites
        var names = ['top', 'right', 'bottom', 'left'];

        connector.pins = [null, null, null, null];

        for (var i = 0; i < 4; i++) {
            if (pins[i] > 0) {
                baseName = 'pin_' + names[i] + '_' + pins[i];
                pinsSprite = this.game.add.sprite(0, 0, 'runes', baseName + '_off.png');
                pinsSprite.nameOn = baseName + '_on.png'
                pinsSprite.nameOff = baseName + '_off.png'
                pinsSprite.anchor.set(0.5);
                connector.addChild(pinsSprite);


                connector.pins[i] = pinsSprite;
            }

        }

        // Add center image
        var centerSprite = this.game.add.sprite(0, 0, 'runes', centerBaseName + '_off.png');
        centerSprite.nameOn = centerBaseName + '_on.png'
        centerSprite.nameOff = centerBaseName + '_off.png'
        centerSprite.anchor.set(0.5);

        connector.addChild(centerSprite);
        connector.centerSprite = centerSprite;

        this.add(connector);

        return connector;
    }

    Grid.prototype.shuffle = function(originalLevelDefinition) {
        var levelDefinition =  JSON.parse(JSON.stringify(originalLevelDefinition));

        return levelDefinition;
    }

Grid.prototype.constructor = Grid;
module.exports = Grid;

},{"../configurations/connectors":2,"../configurations/connectorsType":3,"../configurations/gameData":6,"../core/Dispatcher":9,"../modules/connecters/ConnecterDraggable":15,"../modules/connecters/ConnecterRotable":16,"../modules/connecters/ConnecterRotableDraggable":17}],14:[function(require,module,exports){
'use strict';

var Tutorial = function Tutorial(params) {
    Phaser.Group.call(this, params.game, params.game.world, params.name);
    var self = this;
    var currentPage = 1;
    var init = function init() {
        var drawnObject;
        var width = params.game.world.width;
        var height = params.game.world.height;
        var bmd = params.game.add.bitmapData(width, height);

        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, width, height);
        bmd.ctx.fillStyle = '#000000';
        bmd.ctx.fill();
        self.drawnObject = params.game.add.sprite(0, 50, bmd);
        self.drawnObject.inputEnabled = true;
        self.drawnObject.visible = true;
        self.drawnObject.events.onInputDown.add(function(){
            self.infoDisplay.visible = false;
        }, self);
        self.drawnObject.alpha = 0.9;
        self.add(self.drawnObject);
        self.menuBg = self.game.add.sprite(params.game.world.centerX, params.game.world.centerY,'tutorialBg');
        self.menuBg.anchor.set(0.5);
        self.menuBg.inputEnabled = true;
        self.add(self.menuBg);
self.y = self.y -50;
        var firstPage = params.firstPage ? params.firstPage : 'tutorial_01';

        self.tutoImg = self.game.add.sprite(self.game.world.centerX, params.game.world.centerY, 'tutorial', firstPage);
        self.tutoImg.inputEnabled = true;
        self.tutoImg.anchor.set(0.5);
        self.add(self.tutoImg);

        self.closeButton = self.game.add.button(self.game.world.centerX + 150, params.game.world.centerY - 200, 'uiButtons', function(){
            self.visible = false;
        }, self, 'btn_close', 'btn_close', 'btn_close');
        self.closeButton.anchor.set(0.5);

        self.add(self.closeButton);

        var initPagination = function initPagination() {
            self.previousButton = self.game.add.button(245, 820, 'uiButtons', function () {
                currentPage = currentPage <= 1 ? 4 : currentPage - 1;

                self.tutoImg.frameName = 'tutorial_0' + currentPage;
            }, self, 'btn_left', 'btn_left', 'btn_left', 'btn_left');
            self.previousButton.anchor.set(0.5);

            self.add(self.previousButton);

            self.nextButton = self.game.add.button(420, 820, 'uiButtons', function () {
                currentPage = currentPage >= 4 ? 1 : currentPage + 1;
                self.tutoImg.frameName = 'tutorial_0' + currentPage;
            }, self, 'btn_right', 'btn_right', 'btn_right', 'btn_right');
            self.nextButton.anchor.set(0.5);
            self.add(self.nextButton);
        };

        params.havePagination && initPagination();
        self.visible = false;
    };

    init();
};


Tutorial.prototype = Object.create(Phaser.Group.prototype);
Tutorial.prototype.constructor = Tutorial;

module.exports = Tutorial;

},{}],15:[function(require,module,exports){
var utils = require('../../core/modules/Utils');

var ConnecterDraggable = function ConnecterDraggable(params) {
    Phaser.Sprite.call(this, params.game, params.x, params.y, 'runes', 'rune_bg_pink.png');
    this.game.add.existing(this);

    this.gridPosition = params.gridPosition;
    this.moveStone = params.game.add.audio('moveStone', 0.5);


    this.updatePosition = function updatePosition(x, y, gridPosition){
      this.moveStone.volume = utils.getRandomFloat(0.2, 0.8)
      this.moveStone.play();
      this.x = x;
      this.y = y;
      this.gridPosition = gridPosition;
    },

    this.onDragStop = function (sprite){
      params.callback.call(params.parent, {x: sprite.x, y: sprite.y, connecter: this});
    },

    this.addEventListeners = function addEventListeners() {
        this.events.onDragStop.add(this.onDragStop, this);
    },

    this.switchLights = function(lights) {
        var lightCenter = false;

        for (var i = 0; i < 4; i++) {
            var pinSprite = this.pins[i];

            if (pinSprite) {
                pinSprite.frameName = lights[i] ? pinSprite.nameOn : pinSprite.nameOff;
                lightCenter = lightCenter || lights[i];
            }
        }

        this.centerSprite.frameName = lightCenter ? this.centerSprite.nameOn : this.centerSprite.nameOff;
    },

    this.init = function init(dir) {
        //Make Draggable
        this.inputEnabled = true;
        this.anchor.setTo(0.5, 0.5);

        this.input.enableDrag(true, true);
        this.addEventListeners();
    }

    this.init();

};
ConnecterDraggable.prototype = Object.create(Phaser.Sprite.prototype);
ConnecterDraggable.prototype.constructor = ConnecterDraggable;
module.exports = ConnecterDraggable;

},{"../../core/modules/Utils":10}],16:[function(require,module,exports){
var utils = require('../../core/modules/Utils');

var ConnecterRotable = function ConnecterRotable(params) {
    Phaser.Sprite.call(this, params.game, params.x, params.y, 'runes', 'rune_bg_purple.png');
    this.game.add.existing(this);

    this.gridPosition = params.gridPosition;
    this.moveStone = params.game.add.audio('moveStone', 0.5);

    this.onConnecterRotated = function onConnecterRotated(){
      this.inputEnabled = true;
      params.callback.call(params.parent, {connecter: this});
    },

    this.onConnecterClick = function onConnecterClick() {
      this.inputEnabled = false;
      this.moveStone.volume = utils.getRandomFloat(0.2, 0.8)
      this.moveStone.play();

      var tweenRotate = this.game.add.tween(this).to({angle:'+90'}, 100, Phaser.Easing.Linear.None);
      tweenRotate.onComplete.add(this.onConnecterRotated, this);
      tweenRotate.start();
    },


    this.switchLights = function(lights) {
        var lightCenter = false;

        for (var i = 0; i < 4; i++) {
            var pinSprite = this.pins[i];

            if (pinSprite) {
                pinSprite.frameName = lights[i] ? pinSprite.nameOn : pinSprite.nameOff;
                lightCenter = lightCenter || lights[i];
            }
        }

        this.centerSprite.frameName = lightCenter ? this.centerSprite.nameOn : this.centerSprite.nameOff;
    },

    this.init = function init() {
        this.inputEnabled = true;
        this.anchor.setTo(0.5, 0.5);

        this.addEventListeners();
    }

    this.addEventListeners = function addEventListeners() {
        this.events.onInputDown.add(this.onConnecterClick, this);
    }



    this.init();

};
ConnecterRotable.prototype = Object.create(Phaser.Sprite.prototype);
ConnecterRotable.prototype.constructor = ConnecterRotable;
module.exports = ConnecterRotable;

},{"../../core/modules/Utils":10}],17:[function(require,module,exports){
var utils = require('../../core/modules/Utils');

var ConnecterRotableDraggable = function ConnecterRotableDraggable(params) {
    Phaser.Sprite.call(this, params.game, params.x, params.y, 'runes', 'rune_bg_orange.png');
    this.game.add.existing(this);

    this.gridPosition = params.gridPosition;
    this.isRotation = false;
    this.moveStone = params.game.add.audio('moveStone', 0.5);



    var currentX = params.x,
        currentY = params.y,
        hasBeenDragged = false;

    this.updatePosition = function updatePosition(x, y, gridPosition) {
        this.moveStone.volume = utils.getRandomFloat(0.2, 0.8)
        this.moveStone.play();
        this.x = x;
        this.y = y;
        currentX = x;
        currentY = y;
        this.isRotation = false;
        this.gridPosition = gridPosition;
    }

    this.onConnecterRotated = function onConnecterRotated() {
            this.inputEnabled = true;
            params.callback.call(params.parent, {
                connecter: this
            });
        },

        this.onConnecterClick = function onConnecterClick(sprite) {
            if (Math.abs(currentX - sprite.x) <= (this.width / 2 + 10) && Math.abs(currentY - sprite.y) <= (this.width / 2 + 10)) {
                this.moveStone.volume = utils.getRandomFloat(0.2, 0.8)
                this.moveStone.play();
                this.isRotation = true;
                this.inputEnabled = false;

                var tweenRotate = this.game.add.tween(this).to({
                    angle: '+90'
                }, 100, Phaser.Easing.Linear.None);
                tweenRotate.onComplete.add(this.onConnecterRotated, this);
                tweenRotate.start();
            }
        }

    this.init = function init() {
        this.inputEnabled = true;
        this.anchor.setTo(0.5, 0.5);

        this.input.enableDrag(true, true);
        this.addEventListeners();
    }

    this.onDragStop = function(sprite) {
            if (!this.isRotation) {
                params.callback.call(params.parent, {
                    x: sprite.x,
                    y: sprite.y,
                    connecter: this
                });
            }else{
                this.isRotation = false;
                this.inputEnabled = true;
                this.x = currentX;
                this.y = currentY;
            }
        },

        this.addEventListeners = function addEventListeners() {
            this.events.onInputUp.add(this.onConnecterClick, this);
            this.events.onDragStop.add(this.onDragStop, this);
        },


        this.switchLights = function(lights) {
            var lightCenter = false;
            for (var i = 0; i < 4; i++) {
                var pinSprite = this.pins[i];

                if (pinSprite) {
                    pinSprite.frameName = lights[i] ? pinSprite.nameOn : pinSprite.nameOff;
                    lightCenter = lightCenter || lights[i];
                }
            }

            this.centerSprite.frameName = lightCenter ? this.centerSprite.nameOn : this.centerSprite.nameOff;
        },

    this.init();

};
ConnecterRotableDraggable.prototype = Object.create(Phaser.Sprite.prototype);
ConnecterRotableDraggable.prototype.constructor = ConnecterRotableDraggable;
module.exports = ConnecterRotableDraggable;

},{"../../core/modules/Utils":10}],18:[function(require,module,exports){
var gameData = require('../../configurations/gameData');
var events = require('../../configurations/events');
var dispatcher = require('../../core/Dispatcher');

var UI = function UI(params) {
    Phaser.Group.call(this, params.game);
    this.game = params.game;
    this.levelDefinition = params.levelDefinition;
    this.addMovesText = function addMovesText() {
        this.movesLeftText = this.game.add.text(315, 44, this.levelDefinition.maxSteps);
        this.movesLeftText.anchor.setTo(0.5);
        this.movesLeftText.font = 'movesFont';
        this.movesLeftText.fontSize = 60;
        this.movesLeftText.fill = '#ffff99';
        this.movesLeftText.align = 'center';
        this.header.add(this.movesLeftText);
    };

    this.addHeaderBackground = function addHeaderBackground() {
        this.header = this.game.add.group();
        this.add(this.header);
        this.headerBg = this.game.add.sprite(0, 0, 'header');
        this.moveCounter = this.game.add.sprite(this.game.world.centerX, 0, 'moveCounter');
        this.moveCounter.anchor.set(0.5, 0);
        this.header.add(this.headerBg);
        this.header.add(this.moveCounter);

    };

    this.updateSteps = function updateSteps(){
        this.movesLeftText.text = this.levelDefinition.maxSteps - gameData.steps;
    },

    this.initReplayBtn = function replayLevel() {
        var callback = function() {
            this.game.state.start('play');
        };
        this.replayBtn = this.game.add.button(this.game.world.width - 60, 55, 'uiButtons', callback, this, 'btn_replay', 'btn_replay', 'btn_replay');//+ levelConfig.stars
        this.replayBtn.anchor.set(0.5, 0.5);
        this.replayBtn.visible = false;
    },

    this.initLevelSelectionBtn = function replayLevel() {
        var callback = function() {
            this.game.state.start('levelSelection');
        };
        this.levelSelectionBtn = this.game.add.button(this.game.world.width - 60, 55, 'uiButtons', callback, this, 'btn_levels', 'btn_levels', 'btn_levels');//+ levelConfig.stars
        this.levelSelectionBtn.anchor.set(0.5, 0.5);
        this.levelSelectionBtn.visible = false;
    },

    this.initPauseButton = function() {
        this.initLevelSelectionBtn();
        this.initReplayBtn();
        var callback = function(){
            if(!this.menuOpened){
                this.levelSelectionBtn.visible = true;
                this.replayBtn.visible = true;
                this.button1animation = this.game.add.tween(this.levelSelectionBtn);
                this.button2animation = this.game.add.tween(this.replayBtn);
                this.button1animation.to({y: 150 }, 300, Phaser.Easing.Linear.None);
                this.button2animation.to({y: 240 }, 300, Phaser.Easing.Linear.None);

                this.button1animation.start();
                this.button2animation.start();
                this.menuOpened = true;
            } else {
                this.levelSelectionBtn.visible = true;
                this.replayBtn.visible = true;
                this.button1animationOut = this.game.add.tween(this.levelSelectionBtn);
                this.button2animationOut = this.game.add.tween(this.replayBtn);
                this.button1animationOut.to({y: 55 }, 300, Phaser.Easing.Linear.None);
                this.button2animationOut.to({y: 55 }, 300, Phaser.Easing.Linear.None);

                this.button1animationOut.start();
                this.button2animationOut.start().onComplete.add(function(){
                    this.levelSelectionBtn.visible = false;
                    this.replayBtn.visible = false;
                }.bind(this));
                this.menuOpened = false;
            }

        }
        var buttonSprite = this.game.add.button(this.game.world.width - 60, 55, 'uiButtons', callback, this, 'btn_pause', 'btn_pause', 'btn_pause');//+ levelConfig.stars
        buttonSprite.anchor.set(0.5, 0.5);
    },

    this.initMuteButton = function () {
        var callbackSound = function(){
            gameData.mute = true;
            this.game.sound.mute = gameData.mute;
            this.soundButton.visible = false;
            this.muteButton.visible = true;
        };
        var callbackMute = function(){
            gameData.mute = false;
            this.game.sound.mute = gameData.mute;
            this.soundButton.visible = true;
            this.muteButton.visible = false;
        };
        this.soundButton = this.game.add.button(0 + 140, 55, 'uiButtons', callbackSound.bind(this), this, 'btn_sound_on', 'btn_sound_on', 'btn_sound_on', 'btn_sound_on');//+ levelConfig.stars
        this.soundButton.anchor.set(1, 0.5);

        this.muteButton = this.game.add.button(0 + 140, 55, 'uiButtons', callbackMute.bind(this), this, 'btn_sound_off', 'btn_sound_off', 'btn_sound_off', 'btn_sound_off');//'gameButtons', 'sound_disabled_off'
        this.muteButton.anchor.set(1, 0.5);

        this.soundButton.visible = !gameData.mute;
        this.muteButton.visible = gameData.mute;
    },

    this.addUIButtons = function addUIButtons(){
        this.initPauseButton();
        this.initMuteButton();
    },

    this.init = function init() {
        var events = [
            {'updateSteps': this.updateSteps},

        ];

        dispatcher.listen(this, events);
        this.addHeaderBackground();
        this.addMovesText();
        this.addUIButtons();
    }

    this.init();

};
UI.prototype = Object.create(Phaser.Group.prototype);
UI.prototype.constructor = UI;
module.exports = UI;

},{"../../configurations/events":4,"../../configurations/gameData":6,"../../core/Dispatcher":9}],19:[function(require,module,exports){
'use strict';

function Achievements() {
}

Achievements.prototype = {
  preload: function preload() {
  },

  create : function create() {
  },

  update : function update() {
  }
};

module.exports = Achievements;

},{}],20:[function(require,module,exports){
'use strict';

function Boot() {
}

Boot.prototype = {
    preload: function () {
        this.game.load.image('menuBg', 'assets/images/menu/start_bg.png');
        //this.game.load.image('loadingBar', 'assets/images/loadingBar.png');
    },

    create: function () {
        // Uncomment to center content canvas with scaled game
        this.game.stage.disableVisibilityChange = false;
        this.game.input.maxPointers = 1;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.pageAlignHorizontally = true;

        this.game.state.start('preload');
    }
};

module.exports = Boot;

},{}],21:[function(require,module,exports){
'use strict';

function Credits() {
}

Credits.prototype = {
    preload: function preload() {
    },

    create : function create() {
    },

    update : function update() {
    }
};

module.exports = Credits;

},{}],22:[function(require,module,exports){
'use strict';

var levelDefinition = require('../configurations/level-definition');
var gameData = require('../configurations/gameData');
var config = require('../configurations/game');

function GameOver() {}

var STARS_TOP_MARGIN = 120,
    BUTTONS_TOP_MARGIN = 600,
    BUTTONS_SIDE_MARGIN = 125;

GameOver.prototype = {
    preload: function preload() {},

    create: function create() {
        var centerX = this.game.world.centerX,
            centerY = this.game.world.centerY;


        var levelSelectionCallback = function() {
            this.game.state.start('levelSelection');
        };

        var replayCallback = function() {
            this.game.state.start('play');
        };

        var menuBg = this.game.add.sprite(0, 0, 'menuBg');
        var gameOver = this.game.add.sprite(centerX, 0, 'gameOver');
        gameOver.anchor.set(0.5, 0);


        var levelSelectionButton = this.game.add.button(BUTTONS_SIDE_MARGIN + 80, BUTTONS_TOP_MARGIN, 'uiButtons',
            levelSelectionCallback, this, 'btn_levels', 'btn_levels', 'btn_levels', 'btn_levels');
        levelSelectionButton.anchor.set(0, 1);

        var replayButton = this.game.add.button(centerX + 80, BUTTONS_TOP_MARGIN, 'uiButtons',
            replayCallback, this, 'btn_replay', 'btn_replay', 'btn_replay', 'btn_replay');
        replayButton.anchor.set(0.5, 1);

        gameData.steps = 0;

    },

    update: function update() {}
};

module.exports = GameOver;

},{"../configurations/game":5,"../configurations/gameData":6,"../configurations/level-definition":7}],23:[function(require,module,exports){
'use strict';

var levelDefinition = require('../configurations/level-definition');
var gameData = require('../configurations/gameData');
var config = require('../configurations/game');

function GameWon() {}

var STARS_TOP_MARGIN = 120,
BUTTONS_TOP_MARGIN = 600,
BUTTONS_SIDE_MARGIN = 105;

GameWon.prototype = {
    preload: function preload() {},

    create: function create() {
        var centerX = this.game.world.centerX,
        centerY = this.game.world.centerY;

        var getNumStars = function() {
            var minSteps = levelDefinition[gameData.currentLevel].minSteps;

            if (minSteps >= gameData.steps) {
                return 3;
            }
            if (minSteps * config.twoStarsPercentageLimit >= gameData.steps) {
                return 2;
            } else {
                return 1;
            }
        }

        var levelSelectionCallback = function() {
            this.game.state.start('levelSelection');
        };

        var replayCallback = function() {
            this.game.state.start('play');
        };

        var nextCallback = function() {
            if(gameData.currentLevel + 1 >= levelDefinition.length){
                var cc = this.game.add.sprite(centerX, 100, 'commingSoon');
                cc.anchor.set(0.5, 0);
                columns.visible = false;
                stars.visible = false;
                nextButton.visible = false;
                replayButton.x += 90;
                levelSelectionButton.x += 90;
            } else{
                gameData.currentLevel++;
                this.game.state.start('play');
            }
        };

        var menuBg = this.game.add.sprite(0, 0, 'menuBg');

        var numStars = getNumStars();

        var columns = this.game.add.sprite(centerX, 0, 'wonStars', 'stars_bg');
        columns.anchor.set(0.5, 0);
        //var starSound = this.game.add.audio('starSound', 0.6);

        var stars = this.game.add.sprite(centerX, STARS_TOP_MARGIN, 'wonStars', 'stars0');
        if (numStars > 0) {
            setTimeout(function () {
                stars.frameName = 'stars1';
                //starSound.play();
            }, 500);
        }
        if (numStars > 1) {
            setTimeout(function () {
                stars.frameName = 'stars2';
                //starSound.play();
            }, 1000);
        }
        if (numStars > 2) {
            setTimeout(function () {
                stars.frameName = 'stars3';
                //starSound.play();
            }, 1500);
        }
        stars.anchor.set(0.5, 0);



        var levelSelectionButton = this.game.add.button(BUTTONS_SIDE_MARGIN, BUTTONS_TOP_MARGIN, 'uiButtons',
        levelSelectionCallback, this, 'btn_levels', 'btn_levels', 'btn_levels', 'btn_levels');
        levelSelectionButton.anchor.set(0, 1);

        var replayButton = this.game.add.button(centerX, BUTTONS_TOP_MARGIN, 'uiButtons',
        replayCallback, this, 'btn_replay', 'btn_replay', 'btn_replay', 'btn_replay');
        replayButton.anchor.set(0.5, 1);

        var nextButton = this.game.add.button(this.world.width - 180, BUTTONS_TOP_MARGIN - 75, 'uiButtons',
        nextCallback, this, 'btn_right', 'btn_right', 'btn_right', 'btn_right');
        nextButton.anchor.set(0.5, 0.5);
        var nextButtonTween = this.game.add.tween(nextButton.scale).to({x: 1.4, y: 1.4}, 1000, Phaser.Easing.Linear.None, true).loop(true);
        nextButtonTween.yoyo(true, 100);
        var saveInLocalStorage = function() {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('level' + (gameData.currentLevel + 1), {
                    blocked: false
                });
                if(!localStorage['level' + gameData.currentLevel + '-stars'] || localStorage['level' + gameData.currentLevel + '-stars'] < numStars){
                    localStorage.setItem('level' + (gameData.currentLevel) + '-stars', numStars);
                }
            }
        };

        saveInLocalStorage();

        if(gameData.currentLevel + 1 < levelDefinition.length){
            gameData.levelSelection[gameData.currentLevel + 1].blocked = false;
        }

        gameData.steps = 0;


    },

    update: function update() {}
};

module.exports = GameWon;

},{"../configurations/game":5,"../configurations/gameData":6,"../configurations/level-definition":7}],24:[function(require,module,exports){
'use strict';
var gameData = require('../configurations/gameData');
var levelSelectionConfig = require('../configurations/levelSelectionConfig');
function LevelSelection() {
}

LevelSelection.prototype = {
    preload: function () {

    },

    create: function () {
        this.initBackgroud();
        this.initMenu();
        this.initPageManager();
        this.initHeader();
        this.initShines();
        this.currentPage = 0;
    },

    initBackgroud: function initBackground() {
        this.background = this.game.add.sprite(0, 0, 'gameBg');
    },

    initShines: function initShines(){
        this.shineLeft = this.game.add.sprite(this.game.world.width - 90, 850, 'shine01');
        this.shineRight = this.game.add.sprite(65, 900, 'shine02');
        this.shineRight.anchor.set(0.5);
        this.shineRight.scale.set(0);
        this.shineRight.alpha = 0;
        this.shineLeft.anchor.set(0.5);
        this.shineLeft.scale.set(0);
        this.shineLeft.alpha = 0;

        this.shineRightTweenScale = this.game.add.tween(this.shineRight.scale).to({x: 1, y: 1}, 1000, "Quart.easeOut");
        this.shineRightTweenAlpha = this.game.add.tween(this.shineRight).to({alpha: 1}, 1000, "Quart.easeOut");
        this.shineRightTweenScale.yoyo(true, 200);
        this.shineRightTweenAlpha.yoyo(true, 200);

        this.shineLeftTweenScale = this.game.add.tween(this.shineLeft.scale).to({x: 1, y: 1}, 1000, "Quart.easeOut", true);
        this.shineLeftTweenAlpha = this.game.add.tween(this.shineLeft).to({alpha: 1}, 1000, "Quart.easeOut", true);
        this.shineLeftTweenScale.yoyo(true, 200);
        this.shineLeftTweenAlpha.yoyo(true, 200);
        this.rightTurn = true;
        setInterval(function(){
            if(this.rightTurn){
                this.shineRightTweenAlpha.start();
                this.shineRightTweenScale.start();
                this.rightTurn = false;
            } else {
                this.shineLeftTweenAlpha.start();
                this.shineLeftTweenScale.start();
                this.rightTurn = true;
            }
        }.bind(this), 5000)
    },

    calculatePuntuation: function calculatePuntuation() {
        var puntuation = gameData.levelSelection.reduce(function (previous, current) {
            return previous + parseInt(current.stars);
        }, 0);
        var globalPuntuation = gameData.levelSelection.length * 3;

        return {global: globalPuntuation, puntuation: puntuation};
    },

    initHeader: function initHeader() {
        this.header = this.game.add.sprite(0,0, 'header');
        this.homeButton = this.game.add.button(-15, -20, 'uiButtons', this.goHome, this, 'btn_home', 'btn_home', 'btn_home', 'btn_home');
        var style = {font: "80px movesFont", fill: "#113e32", wordWrap: true};
        var myPuntuationData = this.calculatePuntuation();
        this.stars = this.game.add.text(this.game.world.width - 65, 10, myPuntuationData.puntuation + '/' + myPuntuationData.global, style);
        this.stars.setShadow(3, 3, '#34bcaa', 5);
        this.starImg = this.game.add.sprite(this.game.world.width - 70, 15, 'star');
        this.stars.anchor.x = 1;
    },

    goHome: function goHome() {
        this.game.state.start('menu');
    },

    initPageManager: function () {
        this.pageManager = this.game.add.group();
        this.leftButton = this.game.add.button(170, 765, 'uiButtons', this.goBackPage, this, 'btn_left', 'btn_left', 'btn_left');
        this.rightButton = this.game.add.button(325, 765, 'uiButtons', this.goNextPage, this, 'btn_right', 'btn_right', 'btn_right');

        if (this.totalPages === 1) {
            this.rightButton.alpha = 0.5;
        }
        this.leftButton.alpha = 0.5;
    },

    goNextPage: function () {
        if (this.currentPage < (this.totalPages - 1)) {
            this.levels[this.currentPage].visible = false;
            this.currentPage = this.currentPage + 1;
            this.levels[this.currentPage].visible = true;
            this.rightButton.alpha = 1;
            this.leftButton.alpha = 1;
            if ((this.currentPage + 1) === (this.totalPages)) {
                this.rightButton.alpha = 0.5;
            }
        }
    },

    goBackPage: function () {
        if (this.currentPage > 0) {
            this.levels[this.currentPage].visible = false;
            this.currentPage = this.currentPage - 1;
            this.levels[this.currentPage].visible = true;
            this.leftButton.alpha = 1;
            this.rightButton.alpha = 1;

            if (this.currentPage === 0) {
                this.leftButton.alpha = 0.5;
            }
        }
    },
    getLevelInfoFromLocalStorage: function () {
        for (var i = 0; i < gameData.levelSelection.length; i++) {

            if (typeof(Storage) !== "undefined") {
                if (localStorage['level' + i + '-stars']){
                    gameData.levelSelection[i].stars = localStorage['level' + i + '-stars'];
                }
                if (localStorage['level' + i]) {
                    gameData.levelSelection[i].blocked = localStorage['level' + i].blocked;
                }
            }
        }

    },


    initMenu: function () {
        this.levels = [];
        this.totalPages = gameData.levelSelection.length / 9;
        for (var i = 0; i < this.totalPages; i++) {
            this.levels[i] = this.game.add.group();
            this.levels[i].visible = false;
        }
        var pagIndex = 0;
        var levelIndex = 0;
        var ceilIndex = 0
        var rowIndex = 0
        var self = this;

        this.getLevelInfoFromLocalStorage();

        gameData.levelSelection.forEach(function (levelConfig, index) {
            if (ceilIndex === levelSelectionConfig.maxLevelsPerRow) {
                ceilIndex = 0;
                rowIndex++;
            }
            var levelButton = self.initLevelButton(levelConfig, index, ceilIndex, rowIndex);
            self.levels[pagIndex].add(levelButton);

            levelIndex++;
            ceilIndex++;
            if (levelIndex === (levelSelectionConfig.maxLevelsPerPage * (pagIndex + 1))) {
                pagIndex++;
                ceilIndex = 0;
                rowIndex = 0;
            }
        });
        this.levels[0].visible = true;
    },

    getPosition: function getPosition(ceilIndex, rowIndex) {
        var x;
        if (ceilIndex === 0) {
            x = levelSelectionConfig.group.offSetX;
        } else if (ceilIndex === 1) {
            x = (levelSelectionConfig.buttons.width + levelSelectionConfig.buttons.offSetX + levelSelectionConfig.group.offSetX) * ceilIndex;
        } else {
            x = (levelSelectionConfig.buttons.width + (levelSelectionConfig.buttons.offSetX * 2)) * ceilIndex;
        }

        var y;
        if (rowIndex === 0) {
            y = levelSelectionConfig.group.offSetY;
        } else {
            y = levelSelectionConfig.group.offSetY + ((levelSelectionConfig.buttons.height + levelSelectionConfig.buttons.offSetY) * rowIndex);
        }

        return {x: x, y: y};
    },

    initLevelButton: function initLevelButton(levelConfig, levelIndex, ceilIndex, rowIndex) {
        var positions = this.getPosition(ceilIndex, rowIndex);
        var buttonGp = this.game.add.group();
        var textConfig = levelSelectionConfig.buttons.text;
        var callback = function () {
            gameData.currentLevel = levelIndex;
            this.game.state.start('play');
        };
        var frameName;
        if (!levelConfig.blocked) {
            frameName = 'level_buttons_' + levelConfig.stars;
        } else {
            frameName = 'level_buttons_blocked';
        }
        var buttonSprite = this.game.add.button(positions.x, positions.y, 'levelButtons', callback, this, null, frameName);//+ levelConfig.stars
        var style = {font: "90px movesFont", fill: "#113e32", wordWrap: true};

        var buttonText = this.game.add.text(positions.x + textConfig.x, positions.y + textConfig.y, levelIndex+1, style);
        buttonText.anchor.set(textConfig.anchorX, textConfig.anchorY);
        buttonGp.add(buttonSprite);
        buttonGp.add(buttonText);

        buttonSprite.input.enabled = !levelConfig.blocked;
        buttonText.visible = !levelConfig.blocked;

        return buttonGp;
    }
};

module.exports = LevelSelection;

},{"../configurations/gameData":6,"../configurations/levelSelectionConfig":8}],25:[function(require,module,exports){
'use strict';

var gameConfig = require('../configurations/game');
var gameData = require('../configurations/gameData');
var Tutorial = require('../modules/Tutorial');
function Menu() {
}

Menu.prototype = {
    preload: function () {
    },

    create: function () {
        var menuBg = this.game.add.sprite(0, 0, 'menuBg');
        this.initBubbles();
        this.initTitle();
        this.initPlayButton();
        this.initMuteButton();
        this.initInfoButton();
        this.initTutorial();
        !this.loopSound && this.initLoopMusic();
        this.stage.disableVisibilityChange = true;
    },

    initLoopMusic: function(){
        this.loopSound = this.game.add.audio('gameLoop', 0.15, true);
        this.loopSound.play();
    },

    initTitle: function () {
        var title = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 300, 'gameLogo');
        title.anchor.set(0.5);
    },

    initPlayButton: function() {
        var callback = function(){
            this.game.state.start('levelSelection');
        };
        var buttonSprite = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'btnPlay', callback, this);//+ levelConfig.stars
        buttonSprite.anchor.set(0.5, 0.5);
    },

    initBubbles: function(){
        var bubbles = this.game.add.sprite(0, this.game.world.height, 'bubbles');
        this.bubblesTween = this.game.add.tween(bubbles).to( { x: [ 0, 30, 50, 70, 80, 70, 50, 30, 0, -30, -50, -70 ], y: -1200 }, 16500, "Quart.easeOut", true).loop(true);
    },

    initTutorial: function(){
        this.tutorial = new Tutorial({
            x: 0,
            y: 0,
            game: this.game,
            name: 'Tutorial',
            havePagination: true
        });
    },

    initMuteButton: function () {
        var callbackSound = function(){
            gameData.mute = true;
            this.game.sound.mute = gameData.mute;
            this.soundButton.visible = false;
            this.muteButton.visible = true;
        };
        var callbackMute = function(){
            gameData.mute = false;
            this.game.sound.mute = gameData.mute;
            this.soundButton.visible = true;
            this.muteButton.visible = false;
        };
        this.soundButton = this.game.add.button(0 + 125, 0 + 130, 'uiButtons', callbackSound.bind(this), this, 'btn_sound_on', 'btn_sound_on', 'btn_sound_on', 'btn_sound_on');//+ levelConfig.stars
        this.soundButton.anchor.set(1, 1);

        this.muteButton = this.game.add.button(0 + 125, 0 + 130, 'uiButtons', callbackMute.bind(this), this, 'btn_sound_off', 'btn_sound_off', 'btn_sound_off', 'btn_sound_off');//'gameButtons', 'sound_disabled_off'
        this.muteButton.anchor.set(1, 1);

        this.soundButton.visible = true;
        this.muteButton.visible = false;
    },

    initInfoButton: function(){
        var callbackInfo = function() {
            this.tutorial.visible = true;
        };
        this.infoButton = this.game.add.button(this.game.world.width + 10, 0 + 130, 'uiButtons', callbackInfo.bind(this), this, 'btn_info', 'btn_info', 'btn_info', 'btn_info');//'gameButtons', 'sound_disabled_off'
        this.infoButton.anchor.set(1, 1);
    },

    update: function () {
    }
};

module.exports = Menu;

},{"../configurations/game":5,"../configurations/gameData":6,"../modules/Tutorial":14}],26:[function(require,module,exports){
'use strict';
var utils = require('../core/modules/Utils');

var levelDefinition = require('../configurations/level-definition');
var gameData = require('../configurations/gameData');
var Grid = require('../modules/Grid');
var GameOver = require('../modules/GameOver');


var UI = require('../modules/ui/UI')

function Play() {}

Play.prototype = {
    preload: function preload() {},

    create: function create() {
        //Game Background
        gameData.steps = 0;
        this.gameBG = this.game.add.sprite(0, 0, 'gameBg');
        this.grid = new Grid(4, 4, levelDefinition[gameData.currentLevel], this.game);
        this.gameOver = new GameOver(this.game);
        this.ui = new UI({levelDefinition: levelDefinition[gameData.currentLevel], game: this.game});
        this.initShines();
    },

    initShines: function initShines(){
        this.shineLeft = this.game.add.sprite(this.game.world.width - 90, 850, 'shine01');
        this.shineRight = this.game.add.sprite(65, 900, 'shine02');
        this.shineRight.anchor.set(0.5);
        this.shineRight.scale.set(0);
        this.shineRight.alpha = 0;
        this.shineLeft.anchor.set(0.5);
        this.shineLeft.scale.set(0);
        this.shineLeft.alpha = 0;

        this.shineRightTweenScale = this.game.add.tween(this.shineRight.scale).to({x: 1, y: 1}, 1000, "Quart.easeOut");
        this.shineRightTweenAlpha = this.game.add.tween(this.shineRight).to({alpha: 1}, 1000, "Quart.easeOut");
        this.shineRightTweenScale.yoyo(true, 200);
        this.shineRightTweenAlpha.yoyo(true, 200);

        this.shineLeftTweenScale = this.game.add.tween(this.shineLeft.scale).to({x: 1, y: 1}, 1000, "Quart.easeOut", true);
        this.shineLeftTweenAlpha = this.game.add.tween(this.shineLeft).to({alpha: 1}, 1000, "Quart.easeOut", true);
        this.shineLeftTweenScale.yoyo(true, 200);
        this.shineLeftTweenAlpha.yoyo(true, 200);
        this.rightTurn = true;
        setInterval(function(){
            if(this.rightTurn){
                this.shineRightTweenAlpha.start();
                this.shineRightTweenScale.start();
                this.rightTurn = false;
            } else {
                this.shineLeftTweenAlpha.start();
                this.shineLeftTweenScale.start();
                this.rightTurn = true;
            }
        }.bind(this), 5000)
    },

    update: function update() {}
};

module.exports = Play;

},{"../configurations/gameData":6,"../configurations/level-definition":7,"../core/modules/Utils":10,"../modules/GameOver":12,"../modules/Grid":13,"../modules/ui/UI":18}],27:[function(require,module,exports){
'use strict';

var assetsConfig = require('../configurations/assets'),
    events = require('../configurations/events'),
    dispatcher = require('../core/Dispatcher'),
    levelDefinition = require('../configurations/level-definition'),
    gameData   = require('../configurations/gameData');

function Preload() {
    this.assetsLoaded = false;
}

Preload.prototype = {
    preload: function () {
        var menuBg = this.game.add.sprite(0, 0, 'menuBg');

        for (var assetType in assetsConfig) {
            if (assetsConfig.hasOwnProperty(assetType)) {
                assetsConfig[assetType].forEach(function (args) {
                    var loader = this.load[assetType];
                    loader && loader.apply(this.load, args);
                }, this);
            }
        }
        gameData.levelSelection = levelDefinition;
        this.assetsLoaded = true;
    },

    create: function () {
        dispatcher.init(this.game, events);
    },

    update: function () {
        if (this.assetsLoaded) {
            this.game.state.start('menu');
        }
    }
};

module.exports = Preload;

},{"../configurations/assets":1,"../configurations/events":4,"../configurations/gameData":6,"../configurations/level-definition":7,"../core/Dispatcher":9}]},{},[11])