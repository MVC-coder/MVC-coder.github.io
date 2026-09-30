// var allLetters is imported in the HTML <script src="./variables.js"></script>
$( document ).ready( function(){
     function shuffleArray(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    var letterElements = ["<table><tr>"];
    var letters = Object.keys(allLetters);
    var shuffleArray = shuffleArray(letters);
    for(let i=0; i<letters.length; i++){
        var letter = letters[i];
        var className = "";
        switch(letter.length){
            case 1:
                className = "audioLetter";
                break;
            case 2:
                className = "audioLetter audioLetter2";
                break;
            case 3:
                className = "audioLetter audioLetter3"
                break;
            case 4:
                className = "audioLetter audioLetter4"
                break;
        }
        letterElements.push("<td class='" + className + "'>" + letter + "</td>");
        if((i+1) % 10 === 0){
            letterElements.push("</tr><tr>");
        }
    }
    letterElements.push("</tr></table>");
    $("#letterHolder").append(letterElements.toString().replaceAll(',',''));
    $("#letterHolder").on("click",".audioLetter", function(){
        var letter = $(this).text();
        playAudioLetter(letter);
    });

});