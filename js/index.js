// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

let fadeTimer
let decrement

function fade() {
  console.log("Opacity before:", foregroundImg.style.opacity)
  foregroundImg.style.opacity -= decrement;
  console.log("Opacity after:", foregroundImg.style.opacity)

  if (foregroundImg.style.opacity <= 0) {
    clearInterval(fadeTimer)
  }
}

const foregroundImg = document.getElementById("foreground")
const saveLincolnBtn = document.getElementById("save_lincoln")

saveLincolnBtn.addEventListener("click", function() {
  const totalTime = parseInt(document.getElementById("interval").value)
  foregroundImg.style.opacity = 1

  decrement = 1.0 / (totalTime / 100)

  fadeTimer = setInterval(fade, 100)
})
