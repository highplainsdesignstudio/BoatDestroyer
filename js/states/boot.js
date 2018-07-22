/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var BoatDestroyer = {};
BoatDestroyer.Boot = function(game){};

BoatDestroyer.Boot.prototype = {
    create: function() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('load');
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 360;
        this.scale.minHeight = 270;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;        
    }
};

