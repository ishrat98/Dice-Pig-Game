var scores,roundScore,activePlayer,dice;

init();

/*dice = Math.floor(Math.random()*6)+1;

console.log(dice);


var x=document.querySelector('#score-0').textContent;
console.log(x);
*/
document.querySelector('.dice').style.display= 'none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.querySelector('.btn-roll').addEventListener('click', function() 

{
    var dice = Math.floor(Math.random()*6)+1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'Dice-' + dice + '.png';

    if(dice!==1) {
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;

    }
    else {
       nextPlayer();
    }


});

document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer]+= roundScore;

    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];

    if(scores[activePlayer]>=100) {
        document.querySelector('#name-'+activePlayer).textContent= 'Winner!';
        document.querySelector('.dice').style.display='none';

        document.querySelector('.player-'+activeplayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
    }
    else
        nextPlayer();
});

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer() {

    activePlayer===0 ? activePlayer =1 : activePlayer =0 ;
    roundScore=0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';
}

function init() {

    var scores =[0,0];
    var roundScore =0;
    activePlayer =0;
    document.querySelector('.dice').style.display= 'none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent= 'Player 1';
    document.getElementById('name-1').textContent= 'Player 2';


}
