// var allLetters is imported in the HTML <script src="./variables.js"></script>
$( document ).ready( function(){
    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    function resetForOtherChallenge(){
        $(".letterTable").remove();
    }
    function createLetterElements(year, challenge){
        var letterElements = ["<table class='letterTable'><tr>"];
        var letters = [];
        if(year === "L2" && challenge === 1){
            letters = Object.keys(allLetters);
        }
        if(year === "K3"){
            var index1 = orderLettersK3.indexOf(challenge);
            letters = orderLettersK3.slice(0,index1+1);
        }
        if(year === "L1"){
            var commaSeparatedString = wordToSounds(challenge);
            var lettersArray = commaSeparatedString.split(",");
            var highestIndex = 0;
            var latestLetter = "";
            lettersArray.forEach(function (letter, index) {
                let index2 = orderLettersL1.indexOf(letter);
                if(index2>highestIndex){
                    highestIndex = index2;
                    latestLetter = letter;
                }
            });
            letters = orderLettersL1.slice(0,highestIndex+1);
        }
        letters = shuffleArray(letters);
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
        return letterElements;
    }
    function createLettersK3Options(){
        let elements = orderLettersK3.map(function(letter){
            return "<option class='K3Option' data-letter='" + letter + "'>" + letter + "</option>";
        });
        $("select#selectLettersK3").append(elements);
    }
    function createWordsL1Options(){
        let elements = orderWordsL1.map(function(word){
            return "<option class='L1Option' data-word='" + word + "'>" + word + "</option>";
        })
        $("select#selectWordsL1").append(elements);
    }
    $("#letterHolder").on("click",".audioLetter", function(){
        var letter = $(this).text();
        playAudioLetter(letter);
    });
    $("#selectLettersK3").change(function(){
        $("#noChallengeSelected").hide();
        resetForOtherChallenge();
        var challenge = $(this).children(":selected").attr("data-letter");
        $(this).addClass("w3-greenImportant").siblings().removeClass("w3-greenImportant");
        var letterElements = createLetterElements("K3", challenge);
        $("#letterHolder").append(letterElements.toString().replaceAll(',',''));
        $("#letterHolder").show();
    })

    $("#selectWordsL1").change(function(){
        $("#noChallengeSelected").hide();
        resetForOtherChallenge();
        var challenge = $(this).children(":selected").attr("data-word");
        $(this).addClass("w3-greenImportant").siblings().removeClass("w3-greenImportant");
        var letterElements = createLetterElements("L1", challenge);
        $("#letterHolder").append(letterElements.toString().replaceAll(',',''));
        $("#letterHolder").show();
    })

    $("#challengeButtonsHolder").on('click', '.challengeBtn', function () {
        $("#noChallengeSelected").hide();
        resetForOtherChallenge();
        var challenge = Number($(this).attr("data-level"));
        $(this).addClass("w3-greenImportant").siblings().removeClass("w3-greenImportant");
        var letterElements = createLetterElements("L2",challenge);
        $("#letterHolder").append(letterElements.toString().replaceAll(',',''));
        $("#letterHolder").show();
    })
    createLettersK3Options();
    createWordsL1Options();
});