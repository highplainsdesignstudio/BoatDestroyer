/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
BoatDestroyer.Load = function(game){};

var music;
var background;

BoatDestroyer.Load.prototype = {
    preload: function() {
        this.load.image('background', '/assets/bdbkgrnd.png');
        this.load.audio('music', '/assets/shading.mp3');
        this.load.audio('boat1', '/assets/boat1.wav');
        this.load.audio('boat2', '/assets/boat2.wav');
        this.load.audio('boat3', '/assets/boat3.wav');
        this.load.audio('lost', '/assets/lost.wav');
        this.load.spritesheet('boat', '/assets/boatUp.png', 64, 64, 4);
		this.load.spritesheet('crash', '/assets/crash.png', 64, 64, 1);
        this.load.image('button', '/assets/button.png');
    },
    create: function() {
        this.state.start('menu');
    }
};
