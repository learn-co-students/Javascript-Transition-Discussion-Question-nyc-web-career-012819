// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

let zombie = document.getElementById('foreground');
let saveBtn = document.getElementById('save_lincoln');
zombie.style.opacity = 1;
let userInput;

saveBtn.addEventListener('click', function() {
  userInput = parseInt(document.getElementById('interval').value);
  saver();
  console.log('working');
});

const saver = function saveLincoln() {
  setInterval(function(){ decrementOpacity(); }, 1000);
}

function decrementOpacity() {
  if (zombie.style.opacity <= 0) {
    myStopFunction();
  } else {
    zombie.style.opacity -= 1000/userInput;
  }
}

function myStopFunction() {
  clearInterval(saver);
}
