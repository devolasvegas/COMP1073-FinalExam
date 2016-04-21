/**
 * Created by devon on 2016-04-21.
 * COMP1073-Final Exam
 * Simple Dice Roller Interface
 */
(function(){

// Put DOM references into variables

    "use strict";
    console.log('Hello.');
    var die1Pic = document.getElementById('die1-pic');

    var die1Text = document.getElementById('die1');

    var die2Pic = document.getElementById('die2-pic');
    var die2Text = document.getElementById('die2');

    var button = document.getElementById('roll-em');

    var random;

    button.addEventListener('click', function () {
        random = Math.floor((Math.random() * 6) + 1);
        die1Pic.setAttribute('src', 'img/' + random + '.png');
        die1Text.innerText = random;
        console.log(random);
        random = Math.floor((Math.random() * 6) + 1);
        die2Pic.setAttribute('src', 'img/' + random + '.png');
        die2Text.innerText = random;
        console.log(random);
    });

})();
