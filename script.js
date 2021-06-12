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
        document.querySelector('#current--0').textContent=roundScores;
    }  
    else {
    }

})

