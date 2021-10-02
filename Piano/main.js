"use strict";
// The keys and notes variables store the piano keys
var keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
var notes = [];
keys.forEach(function (key) {
    notes.push(document.getElementById(key));
});
// Write named functions that change the color of the keys below
// Write a named function with event handler properties
// Write a loop that runs the array elements through the function
// These variables store the buttons that progress the user through the lyrics
var nextOne = document.getElementById('first-next-line');
var nextTwo = document.getElementById('second-next-line');
var nextThree = document.getElementById('third-next-line');
var startOver = document.getElementById('fourth-next-line');
// This variable stores the '-END' lyric element
var lastLyric = document.getElementById('column-optional');
// These statements are "hiding" all the progress buttons, but the first one
if (nextTwo && nextThree && startOver) {
    nextTwo.hidden = true;
    nextThree.hidden = true;
    startOver.hidden = true;
}
// Write anonymous event handler property and function for the first progress button
// Write anonymous event handler property and function for the second progress button
// Write anonymous event handler property and function for the third progress button
// This is the event handler property and function for the startOver button
startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
};
