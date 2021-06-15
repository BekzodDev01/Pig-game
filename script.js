let scores, roundScores, activePlayer, dice, isGamePlaying, lastDice;

let winnerScore;
init();

document.querySelector('.btn--roll').addEventListener('click', function(){      
    if (isGamePlaying){
        let diceDOM= document.querySelector('.dice');           
        count=0;
        dice= Math.floor(Math.random()*6+1);   
        

        diceDOM.style.display='block';              
        diceDOM.src='dice-'+dice+'.png';                

        if (dice===6 && lastDice===6){
            scores[activePlayer]=0;
            document.getElementById('score--'+activePlayer).textContent='0';
            console.log(document.getElementById('score--'+activePlayer).textContent);
            nextPlayer();
        }

       else if (dice!==1){          
            roundScores+=dice;
             document.querySelector('#current--'+ activePlayer).textContent=roundScores;
           
        }  
        else {
            nextPlayer();
        }
        lastDice=dice;

    }


});
    document.querySelector('.btn--hold').addEventListener('click', function(){
                if(isGamePlaying){

            // Adding current score to golbal score 
        scores[activePlayer]+=roundScores;
                
        //Changing the score UI
    (document.getElementById('score--'+activePlayer).textContent=scores[activePlayer]);   
          let input=document.querySelector('.finalScore').value;
                    if(input){
                        winnerScore=input;
                    }
                    else{
                        winnerScore=100;
                    }
          if (scores[activePlayer] >= winnerScore){
           document.getElementById('name--'+activePlayer).textContent='Winner !';
           document.querySelector('.player--' +activePlayer).classList.add('player--winner');
           document.querySelector('.player--' +activePlayer).classList.remove('player--active');
           isGamePlaying=false

        }
        else {
            nextPlayer();
        }           

        

                }
});


document.querySelector('.btn--new').addEventListener('click', init);
function init(){
    scores=[0,0];
    roundScores=0;
    activePlayer=0;
    isGamePlaying= true;    
    
    document.querySelector('.dice').style.display='none'        
    document.getElementById('score--0').textContent='0';        
    document.getElementById('current--0').textContent='0';          
    document.getElementById('score--1').textContent='0';                  
    document.getElementById('current--1').textContent='0';
    document.getElementById('name--0').textContent='Player 1';
    document.getElementById('name--1').textContent='Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
        
}

function nextPlayer(){
    activePlayer ===0 ? activePlayer=1: activePlayer=0
        roundScores=0;
        document.getElementById('current--0').textContent='0';          
        document.getElementById('current--1').textContent='0';
          
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
        document.querySelector('.dice').style.display='none';
}
