/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO);


game.state.add('boot', BoatDestroyer.Boot);
game.state.add('load', BoatDestroyer.Load);
game.state.add('menu', BoatDestroyer.Menu);
game.state.add('play', BoatDestroyer.Play);
game.state.add('end', BoatDestroyer.End);
game.state.start('boot');
