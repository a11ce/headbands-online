window.onload = function() {
    resetState()
    listChoices = document.getElementById("listChoices")
    for (var key in listsDict) {
        var newOption = document.createElement("option");
        newOption.text = key;
        listChoices.add(newOption);
    }
    document.getElementById("pass").addEventListener("click", pass, false);
    document.getElementById("success").addEventListener("click", success, false);
    document.getElementById("startbutton").addEventListener("click", newGame, false);
}

var timer;
var time;

var sCount = 0;
var pCount = 0;

function newGame() {
    if (!timer) {
        
        curList = listsDict[document.getElementById("listChoices").value]
        time = document.getElementById("startingTime").value;

        document.getElementById("timer").innerHTML = time;
        document.getElementById("gameOptions").style.display = "none";
        document.getElementById("gameplay").style.display = "block";
        
        newWord();


        timer = setInterval(function() {
            time--;
            if (time == 0) {
                endGame();
            }
            document.getElementById("timer").innerHTML = time;
        }, 1000);
    } else {
        resetState();
        newGame();
    }
}


function endGame() {
    document.getElementById("curItem").innerHTML = "Game Over!";
    clearInterval(timer);
    timer = null;
    document.getElementById("gameOptions").style.display = "block";
    document.getElementById("gameplay").style.display = "none";
        
}

function resetState() {
    pCount = 0;
    sCount = 0;

    clearInterval(timer);
    time = document.getElementById("startingTime").value;

    document.getElementById("successcount").innerHTML = sCount;
    document.getElementById("passcount").innerHTML = sCount;

    document.getElementById("timer").innerHTML = time;
    timer = null;
}

function success() {
    if (timer) {
        sCount++;
        document.getElementById("successcount").innerHTML = sCount;
        newWord()
    }

}

function pass() {
    if (timer) {
        pCount++;
        document.getElementById("passcount").innerHTML = pCount;
        newWord()
    }

}

function newWord() {
    console.log(listsDict);
    curItem = curList[Math.floor(Math.random() * curList.length)];
    document.getElementById("curItem").innerHTML = curItem;
}