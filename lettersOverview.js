// var allLetters is imported in the HTML <script src="./variables.js"></script>
$( document ).ready( function(){
    var letterElements = ["<table><tr>"];
    var index = 0;
    for (var letter in allLetters) {
        if (Object.prototype.hasOwnProperty.call(allLetters, letter)) {
            index++;
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
            if(index % 12 === 0){
                letterElements.push("</tr><tr>");
            }
        }
    }
    letterElements.push("</tr></table>");
    $("#letterHolder").append(letterElements.toString().replaceAll(',',''));
    $("#letterHolder").on("click",".audioLetter", function(){
        var letter = $(this).text();
        playAudioLetter(letter);
    });
});