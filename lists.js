
document.getElementById("pass").addEventListener ("click", newWord, false);
document.getElementById("success").addEventListener ("click", newWord, false);
document.getElementById("startbutton").addEventListener ("click", init, false);

var globalTimer;

function init()
{
 document.getElementById("timer").innerHTML = 60;
 newWord();
 clearInterval(globalTimer);
  var decre = function() {
    var timer = document.getElementById("timer");
    var number = timer.innerHTML;
    number--;
    document.getElementById("timer").innerHTML = number;
    if(number==0)
    {
      alert("Game Over!")
    }
}

var curTimer = setInterval(decre, 1000);
console.log(curTimer);
globalTimer=curTimer;
}
function newWord()
{

  var list = namesList;
  var state = this.id;
  var curItem = list[Math.floor(Math.random()*list.length)];

  document.getElementById("curItem").innerHTML = curItem;
  if(state=="pass")
  {
    var score = document.getElementById("passcount");
    var number = score.innerHTML;
    number++;
    document.getElementById("passcount").innerHTML = number;
  }
  else if (state=="success")
  {

    var score = document.getElementById("successcount");
    var number = score.innerHTML;
    number++;
    document.getElementById("successcount").innerHTML = number;

  }

}
