console.log(" (\\  (\\\n (^___^)\nc(_(\")(\")\n  Hello!");

var champList = [
    "Alistar",
    "Amumu",
    "Anivia",
    "Annie",
    "Ashe",
    "Blitzcrank",
    "Corki",
    "Evelynn",
    "Fiddlesticks",
    "Gangplank",
    "Heimerdinger",
    "Janna",
    "Jax",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Malphite",
    "Morgana",
    "Nasus",
    "Nunu",
    "Rammus",
    "Ryze",
    "Shaco",
    "Singed",
    "Sion",
    "Sivir",
    "Soraka",
    "Taric",
    "Teemo",
    "Tristana",
    "Tryndamere",
    "Twitch",
    "Veigar",
    "Warwick",
    "Zilean"
];
var wins = 0;
var loss = 0;
var guesses = 10;
var randomChamp;
var blankString = "";
var gameStarted = false;
document.addEventListener('DOMContentLoaded', function () {

    //initialization AKA game start and everything else....
    document.getElementById("inProgress").style.display = "none";
    document.getElementById("gameWin").style.display = "none";
    document.getElementById("gameLoss").style.display = "none";

    window.addEventListener("keyup", function (event) {
        var userInput = event.key.toLowerCase();

        if (userInput === "enter") {
            event.preventDefault();
            document.getElementById("gameStart").style.display = "none";
            document.getElementById("inProgress").style.display = "block";

            if (gameStarted === false) {
                pickChamp();
                gameStarted = true;
            }

        }
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            //event.keyCode is a letter
            //this.console.log("event keycode is " + event.keyCode);
            var index = randomChamp.toLowerCase().indexOf(userInput);
            if (index > -1) {
                //input exists in randomchamp
                //console.log("letter at " + index + " is " + randomChamp[index]);
                while (index > -1) {
                    randomChamp = randomChamp.replace(new RegExp(userInput, "i"), "_");
                    blankString = blankString.substring(0, index) + userInput + blankString.substring(index + 1);
                    document.getElementById("mysteryPick").innerHTML = blankString;
                    index = randomChamp.toLowerCase().indexOf(userInput);
                }
            }
            else {

            }

        }

        this.console.log(event.keyCode + " " + userInput);

    });

    function pickChamp() {
        randomChamp = champList[Math.floor(Math.random() * champList.length)];
        this.console.log(randomChamp);


        for (var i = 0; i < randomChamp.length; i++) {
            blankString = blankString + "_";
        }

        document.getElementById("mysteryPick").innerHTML = blankString;
    }








});