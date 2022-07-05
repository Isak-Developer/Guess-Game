let winAudio= new Audio('win.mp3');
let failAudio= new Audio('fail.mp3');
let nearFail= new Audio('nearFail.mp3');
var count=0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const checkBtn= document.querySelector('.check');

checkBtn.addEventListener('click', function() {
    count++;
const guessNumber= Number(document.querySelector('.guess').value);

if (!guessNumber){
    document.querySelector('.message').textContent='⛔ No number!';
}

else if (guessNumber !== secretNumber){
    document.querySelector('.message').textContent=
    guessNumber > secretNumber ? '🆙 high!':
    '⬇ Low!';
    document.querySelector('.guess').value='';


    if (count === 4){
        nearFail.play();
    } else if (count === 5){
        failAudio.play();
        document.querySelector('.message').innerHTML='<h4> no attampt , try agin😭😭</h4>'
        checkBtn.disabled= true;
        checkBtn.style.backgroundColor = "rgba(220, 220,220, 0.677)";
    }
}
    else if (count === 5 && guessNumber === secretNumber){
        winAudio.play();
        document.querySelector('.message').textContent=' correct number';
        document.querySelector('.number').textContent = secretNumber ;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width="15rem"
        checkBtn.style.backgroundColor = "rgba(220, 220,220, 0.677)";
        checkBtn.style.cursor ='dedault';
        checkBtn.disabled= true;
    } 

    else if (guessNumber === secretNumber){
        winAudio.play();
        document.querySelector('.message').textContent='correct number ✅';
        document.querySelector('.lets-paly').textContent= 'Correct 🎉';
        document.querySelector('.number').textContent = secretNumber ;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width="15rem"
        checkBtn.style.backgroundColor = "rgba(220, 220,220, 0.677)";
        checkBtn.style.cursor ='dedault';
        checkBtn.disabled= true;
    }

    const again=document.querySelector('.again');
    again.addEventListener('click', function() {
        count = 0;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.number').textContent='?';
        document.querySelector('.lets-paly').textContent='lets paly!😍';
        document.querySelector('.message').textContent='Start guessing...';
        document.querySelector('.guess').value='';
        document.querySelector('body').style.backgroundColor='#f0db4f';
        checkBtn.disabled= false;
        checkBtn.style.backgroundColor = "blue";
        console.log(secretNumber);
    })
})