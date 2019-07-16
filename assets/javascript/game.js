console.log(" (\\  (\\\n (^___^)\nc(_(\")(\")\nHello!");

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

document.addEventListener('DOMContentLoaded', function () {

    //initialization AKA game start
    document.getElementById("inProgress").style.display = "none";
    document.getElementById("gameWin").style.display = "none";
    document.getElementById("gameLoss").style.display = "none";

    window.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("gameStart").style.display = "none";
            document.getElementById("inProgress").style.display = "block";
            pickChamp();
        }
        
    });

    function pickChamp() {
        var champSelect = champList[Math.floor(Math.random() * champList.length)];
        this.console.log(champSelect);

        var blankString = "";
        for (var i = 0; i < champSelect.length; i++) {
            blankString = blankString + "_ ";
        }

        document.getElementById("mysteryPick").innerHTML = blankString;
    }
    




});