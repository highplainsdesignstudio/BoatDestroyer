/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

BoatDestroyer.Menu = function(game){
    var title;
    var button;
//    var background;
};

BoatDestroyer.Menu.prototype = {
    create: function() {
        background = this.add.image(0,0,'background');
        title = this.add.text(this.world.centerX, this.world.centerY-200, 'Boat Destroyer!');
        title.padding.set(20, 15);
        title.font = 'Bangers';
        title.fontSize = 60;
        title.anchor.set(.5,.5);
        music = this.add.audio('music', 1, true);
        music.play();
        button = this.add.button(this.world.centerX, this.world.centerY, 'button', this.startGame, this);
        button.anchor.set(.5,.5);
    },
    startGame: function() {
        this.state.start('play');
    }
};