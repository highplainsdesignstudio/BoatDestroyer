/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
BoatDestroyer.Play = function(game){
    var instructions;
    var boats;
    
    var scoreText;
    
};

var horizon = 180;
var score = 0;
var showScore = false;
var lostBoats = 0;

BoatDestroyer.Play.prototype = {
    create: function() {
        background = this.add.image(0,0,'background');
        music.volume = .5;
        boats = this.add.group();
        boats.inputEnableChildren = true; 
        boats.enableBody = true;
        this.displayInstructions();
        this.time.events.add(Phaser.Timer.SECOND * 4, this.fadePicture, this);
        this.time.events.add(Phaser.Timer.SECOND * 4, this.createGroup, this);
//        this.time.events.add(Phaser.Timer.SECOND * 10, this.endGame, this);
    },
    displayInstructions: function() {
        message = "Click on the boats to destroy them before they reach the horizon.";
        instructions = this.add.text(this.world.centerX, this.world.centerY-150, message);
        instructions.font = 'Bangers';
        instructions.fontSize = 32;
        instructions.anchor.set(.5,.5);
        instructions.wordWrap = true;
        instructions.wordWrapWidth = 500;
        instructions.padding.set(10,10);        
    },
    fadePicture: function() {
        this.add.tween(instructions).to({alpha: 0}, 2000, "Linear", true);
        scoreText = this.add.text(this.world.centerX-375, this.world.centerY-250, 'Score: ' + score);
        scoreText.font = 'Bangers';
        scoreText.fontSize = 26;
        scoreText.padding.set(10, 5);
        showScore = true;  
    },
    createGroup: function() {        
        for(i=0; i<10; i++) {
            this.makeBoat(i);
        } 
    },
    update: function() {
        if(showScore) {
            scoreText.text = 'Score: ' + score;
        }
        if(lostBoats == 100){
            this.endGame();
        }
        if (boats != null) {
            for(i=0; i<boats.length; i++) {
                if (boats.children[i].y < horizon) {
                    boats.remove(boats.children[i]);
                    var fx = this.add.audio('lost');
                    lostBoats++;
                    
                    fx.play();
                    this.makeBoat(i);
                    score -= 3;
                }
            }            
        }

        
    },
    determineX: function(index) {
        switch(index) {
            case 0: 
                return game.rnd.between(20,59);
                break;
            case 1:
                return game.rnd.between(101, 139);
                break;
            case 2:
                return game.rnd.between(181, 219);
                break;
            case 3:
                return game.rnd.between(261, 299);
                break;
            case 4:
                return game.rnd.between(341, 379);
                break;
            case 5:
                return game.rnd.between(421, 459);
                break;
            case 6:
                return game.rnd.between(501, 539);
                break;
            case 7:
                return game.rnd.between(581, 619);
                break;
            case 8:
                return game.rnd.between(661, 699);
                break;
            case 9:
                return game.rnd.between(741, 779);
                break;
        }
    },
    launchBoats: function (boat) {
        boat.body.moveTo((game.rnd.between(1,3)+game.rnd.frac())*1000,boat.y,-90);
    },
    destroyBoat: function(boat) {
        var index = boats.children.indexOf(boat);
        this.playSoundFX();
        boat = this.add.sprite(boat.x, boat.y, 'crash');
        this.add.tween(boat).to({alpha: 0 }, 1000, 'Linear', true);
        boats.remove(boats.children[index], true);
        lostBoats--;
        this.makeBoat(index);
        score += 10;
    },
    makeBoat: function(index) {
        var boat = boats.create(this.determineX(index), game.rnd.between(500,600), 'boat', 1, true, index);
        boat.anchor.set(.5,.5);
        boats.children[index].events.onInputDown.add(this.destroyBoat, this);
        this.launchBoats(boat);
        var travel = boat.animations.add('travel', null, 30);
        travel.play(30, true);
    }, 
    endGame: function() {
        this.state.start('end');
    },
    playSoundFX: function() {
        var fx2play = game.rnd.between(1,3);
        switch(fx2play){
            case 1:
                var fx = this.add.audio('boat1');
                break;
            case 2:
                var fx = this.add.audio('boat2');
                break;
            case 3:
                var fx = this.add.audio('boat3');
                break;
            default:
                var fx = this.add.audio('boat1');
        }
        fx.play();        
    },
};

