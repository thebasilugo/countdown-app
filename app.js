let text = document.getElementById("inner-text");
let endCountdown = document.getElementById("end-countdown");
let delCountdown = document.getElementBy("del-countdown");

text.innerHTML = "Last Day of 2023";

const updateTimer = (deadline) => {
  let time = deadline - new Date();
  return {
    'days': Math.floor (time/(1000*60*60*24)),
    'hours': Math.floor (time/(1000*60*60) %24),
    'minutes': Math.floor (time/(1000*60) %60),
    'seconds': Math.floor (time/(1000) %60),
    'total': time
  };
}

const startTimer = (id, deadline) => {
  delCountdown.style.display = "block";
  let timerInterval = setInterval(function(){
    let clock = document.getElementById(id);
    let timer = updateTimer(deadline);

    clock.innerHTML = '<span>' + timer.days + '</span>'
                    + '<span>' + timer.hours + '</span>'
                    + '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>';

    endCountdown.style.display = "none";

    // check for end of timer
    if (timer.total < 1) {
      clearInterval(timerInterval);
      clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
      endCountdown.innerHTML = "The countdown for '" + text.innerHTML + "' has been reached, or expired.";
      endCountdown.style.display = "block";
      delCountdown.style.display = "none";
    }
  }, 1000);
}

window.onload = function () {
  let deadline = new Date ("December 31, 2023 23:59:59");
  startTimer("clock", deadline);
};

// updates:
// update the name of the deadline from the website
// suggest an update of the date on the website
// add a dark mode icon
