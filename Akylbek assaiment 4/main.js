function Divide(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first / second;
   var audio = new Audio('music.mp3');
audio.play();
}
function Multiply(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first * second;
   var audio = new Audio('music.mp3');
audio.play();
}
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function myFunction() {
   var x = document.getElementById("mySummary").innerHTML;
   document.getElementById("temo").innerHTML = x;
 }
 function mouseOver() {
   document.getElementById("temo").style.color = "red";
 }
 
 function mouseOut() {
   document.getElementById("temo").style.color = "black";
 }
 document.getElementById("femod").onkeypress = function() {myFunction()};

function myFunction() {
  document.getElementById("femod").style.backgroundColor = "red";
}
