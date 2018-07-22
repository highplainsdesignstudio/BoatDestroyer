/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
BoatDestroyer.End = function(game){};

BoatDestroyer.End.prototype = {
    create: function() {
        background = this.add.image(0,0,'background');
        var endText = "Game Over! You scored " + score + " points.";
        var text = this.add.text(game.world.centerX, game.world.centerY-200, endText);
        text.font = 'Bangers';
        text.fontSize = 32;
        text.anchor.set(.5, .5);

        button = this.add.button(this.world.centerX, this.world.centerY, 'button', this.restartGame, this);
        button.anchor.set(.5,.5);      
    },
    restartGame: function() {
        score = 0;
        showScore = false;
        lostBoats = 0;
        this.state.start('play');
    }
};

