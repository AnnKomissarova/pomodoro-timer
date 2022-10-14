const timeElement = document.querySelector('#pomodoro-time')
const btnStart = document.querySelector('#start');
const btnReset = document.querySelector('#reset');
const btnPomodoro = document.querySelector('#pomodoro');

let minute = 24;
let sec = 59;

btnStart.addEventListener('click', () => {
      if(btnStart.innerText.toLowerCase() == 'start') {
        btnStart.innerText = 'stop';
        startTimer();                            
    }    
      else {
      btnStart.innerText = 'start';
      stopTimer();      
    }
});

btnReset.addEventListener('click', () => {  
  timeElement.innerHTML = `25` + `:` + `00`;
  resetTimer();
});

btnPomodoro.addEventListener('click', () => {  
  timeElement.innerHTML = `25` + `:` + `00`; 
  resetPomodoro(); 
});

btnBreak.addEventListener('click', () => {  
  timeElement.innerHTML = `05` + `:` + `00`;
});

function startTimer() { 
  timer = setInterval(startPomodoro, 10);   
};

function stopTimer(){
  clearInterval(timer);
};

function resetTimer() {
  clearInterval(timer);
   minute = 24;
   sec = 59;
   btnStart.innerText = 'start';    
};

function startPomodoro() {    
  sec--;
  if (sec > 0) {
    sec -= 1;
  }
  else if(minute > 0) {
    minute -= 1;
    sec = 59;
  } 
  if (minute <=0 ) {
    minute = 25;
    sec = `00`;    
    clearInterval(timer);
    btnStart.innerText = 'start';
  }  
  document.getElementById("pomodoro-time").innerHTML = ("0" + minute).slice(-2) + ":"  + ("0" + sec).slice(-2); 
};




 


  






  