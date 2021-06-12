let scores, roundScores, activePlayer, dice;
scores=[0,0];
roundScores=0;
activePlayer=0;

document.querySelector('.dice').style.display='none'        
document.getElementById('score--0').textContent='0';        
document.getElementById('current--0').textContent='0';          
document.getElementById('score--1').textContent='0';                  
document.getElementById('current--1').textContent='0';
document.querySelector('.btn--roll').addEventListener('click', function(){      
    
    let diceDOM= document.querySelector('.dice');           
    dice= Math.floor(Math.random()*6+1);            
    diceDOM.style.display='block';              
    diceDOM.src='dice-'+dice+'.png';                

    
    if (dice!==1){          
        roundScores+=dice;
        document.querySelector('#current--'+ activePlayer).textContent=roundScores;
    }  
    else {
        nextPlayer();
    }
});

    document.querySelector('.btn--hold').addEventListener('click', function(){
        // Adding current score to golbal score 
        scores[activePlayer]+=roundScores;
        
        //Changing the score UI
    (document.getElementById('score--'+activePlayer).textContent=scores[activePlayer]);   
        if (scores[activePlayer] >= 20){
                document.getElementById('name--1').textContent='Winner !';
           document.querySelector('.player-' +activePlayer+'-1').classList.add('winner')
           document.querySelector('.player-' +activePlayer+'-1').classList.remove('player--active')
        }
        
        else {
            nextPlayer();
        }

        


});



function nextPlayer(){
    activePlayer ===0 ? activePlayer=1: activePlayer=0
        roundScores=0;
        document.getElementById('current--0').textContent='0';          
        document.getElementById('current--1').textContent='0';
          
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
        document.querySelector('.dice').style.display='none';
}
