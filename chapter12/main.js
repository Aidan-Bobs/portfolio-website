var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {

    if (currentPosition >= 400) {
        alert("OOOOF!");
        console.log("Crash!");
        clearInterval(animation);
        resetTrain();
    }
}

function stopTrain() {
    if (trainPosition < 400) {
        clearInterval(animation);
    }
}

function resetTrain() {
    train.style.left = '0px';
}
/*  function additionator(x,y) {
    let z = x+y
    return  z
} */
    const d = new Date();
    let hour = d.getHours();

    console.log(d)