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
var wrongString = "";
var rightString = "";
var imgChamp;

document.addEventListener('DOMContentLoaded', function () {

    //initialization
    document.getElementById("inProgress").style.display = "none";
    document.getElementById("gameWin").style.display = "none";
    document.getElementById("gameLoss").style.display = "none";
    document.getElementById("winCounter").innerHTML = wins;
    document.getElementById("lossCounter").innerHTML = loss;


    window.addEventListener("keyup", function (event) {
        //this.console.log(event.key);

        var userInput = event.key.toLowerCase();

        if (gameStarted === false && userInput === "enter") {
            event.preventDefault();
            document.getElementById("gameStart").style.display = "none";
            document.getElementById("inProgress").style.display = "block";

            guesses = 10;
            this.document.getElementById("guessRemain").innerHTML = guesses;

            wrongString = "";
            document.getElementById("guessChar").innerHTML = wrongString;
            
            rightString = "";

            pickChamp();
            gameStarted = true;
            document.getElementById("gameWin").style.display = "none";
            document.getElementById("gameLoss").style.display = "none";

        }
        if (event.keyCode >= 65 && event.keyCode <= 90 && gameStarted === true) {
            //event.keyCode is a letter
            //this.console.log("event keycode is " + event.keyCode);
            var index = randomChamp.toLowerCase().indexOf(userInput);
            if (index > -1) {
                //input exists in randomChamp
                //console.log("letter at " + index + " is " + randomChamp[index]);
                while (index > -1) {
                    randomChamp = randomChamp.replace(new RegExp(userInput, "i"), "_");
                    blankString = blankString.substring(0, index) + userInput + blankString.substring(index + 1);
                    document.getElementById("mysteryPick").innerHTML = blankString;
                    index = randomChamp.toLowerCase().indexOf(userInput);
                }
                //this.console.log("randomChamp = " + randomChamp);

                if (rightString.indexOf(userInput) === -1) {
                    rightString = rightString + userInput;
                    //this.console.log("rightString = " + rightString);
                }

                var isEmpty = true;

                for (var j = 0; j < randomChamp.length; j++) {
                    //this block checks for win condition
                    if (randomChamp.toLowerCase().charAt(j) !== "_") {
                        isEmpty = false;
                        break;
                    }
                }

                if(isEmpty) {
                    //this block executes if you win
                    wins = wins + 1;
                    this.document.getElementById("winCounter").innerHTML = wins;
                                    
                    this.document.getElementById("inProgress").style.display = "none";
                    this.document.getElementById("gameWin").style.display = "block";
                    this.document.getElementById("gameWin").getElementsByClassName("champName")[0].innerHTML = imgChamp;
                    this.document.getElementById("imgWin").src = "./assets/images/lolchamps/" + imgChamp + ".png";
                    this.document.getElementById("imgWin").alt = imgChamp;

                    gameStarted = false;

                }

            }

            else if (rightString.indexOf(userInput) === -1) {
                //input does not exit in randomChamp
                if (wrongString.indexOf(userInput) === -1) {
                    wrongString = wrongString + userInput;
                    document.getElementById("guessChar").innerHTML = wrongString;
                }

                guesses = 10 - wrongString.length;
                this.document.getElementById("guessRemain").innerHTML = guesses;

               //this.console.log("wrongString = " + wrongString);


                if (guesses <= 0) {
                    //this block executes if you lose
                    loss = loss + 1;
                    this.document.getElementById("lossCounter").innerHTML = loss;

                    this.document.getElementById("inProgress").style.display = "none";
                    this.document.getElementById("gameLoss").style.display = "block";

                    this.document.getElementById("gameLoss").getElementsByClassName("champName")[0].innerHTML = imgChamp;
                    this.document.getElementById("imgLoss").src = "./assets/images/lolchamps/" + imgChamp + ".png";
                    this.document.getElementById("imgLoss").alt = imgChamp;


                    gameStarted = false;
                }
            }

        }

        //this.console.log(event.keyCode + " " + userInput);

    });

    function pickChamp() {
        randomChamp = champList[Math.floor(Math.random() * champList.length)];
        imgChamp = randomChamp;
        //this.console.log(randomChamp);
        blankString = "";

        for (var i = 0; i < randomChamp.length; i++) {
            blankString = blankString + "_";
        }

        document.getElementById("mysteryPick").innerHTML = blankString;
    }

});