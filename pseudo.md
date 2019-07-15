# Psuedocode for Word Guess Game

Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

Use key events to listen for the letters that your players will type.

Display the following on the page:

Press any key to get started!

Wins: (# of times user guessed the word correctly).

If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

As the user guesses the correct letters, reveal them: m a d o _ _ a.

Number of Guesses Remaining: (# of guesses remaining for the user).

Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

After the user wins/loses the game should automatically choose another word and make the user play it.

***

## "Press 'Enter' to begin!"

>   on 'keyup' event, the game will begin.
>   event will also cause the game to appear in the DOM.

## Display 
    
*   will have the number of wins, the "letter field", number of guesses remaining of 10, and letters already guessed.
    -   WINS:   
        *   number of wins will increase with every successfull completetion of a word.
    -   LETTER FIELD:
        *   will populate with successfully guessed letters.
        *   will start as _ , will turn into a letter if successfully guessed.
    -   GUESSES:
        *   will display guessed amount of guesses remaining, with a max of 10.
        *   will decrease with each incorrect guess.
        *   will not decrease if letter was already guessed.
            -   for both successful AND unsuccessful.
    -   DISPLAYED LETTER:
        *   will display letters unsuccessfully guessed.
        *   will not display letters that were already unsuccessfully guessed.
*   on win
    -   picture of word will be displayed on the screen
    -   ask player if they want to play again.
    -   player will select spacebar to play again.