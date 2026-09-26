// var allLetters is imported in the HTML <script src="./variables.js"></script>
$( document ).ready( function(){
    var currentLevel = 0;
    var lettersCurrentChallenge = [];
    var correctLetters = [];
    var wrongLetters = [];
    var nextLetterIndex = null;
    var correctCounter = 0;
    var wrongCounter = 0;
    var repeatedWrongLetters = false;
    var allChallenges = {
        1: {
            challengeName: "Alle letters",
            level: 1,
            baseWord:"Alle letters",
            points: 1
        }
    }
    function createChallengeButtons(allChallenges){
        var buttons = [];
        for (const [key, value] of Object.entries(allChallenges)) {
            var buttonElement = $('<button data-level="' + key + '" class="w3-bar-item w3-button w3-padding w3-text-teal challengeBtn">LEVEL ' + value.level + ': ' + value.baseWord + '</button>');
            buttons.push(buttonElement);
        }
        $("#challengeButtonsHolder").append(buttons);
    }
    function showNextLetter(){
        const random = Math.floor(Math.random() * lettersCurrentChallenge.length)
        var nextLetter = lettersCurrentChallenge[random];
        nextLetterIndex = random;
        $("#letterHolder").text(nextLetter[0]);
        $("#audioElement").attr("src","./sounds/letters/MVC/"+nextLetter[1].sound);
    }
    $("#challengeButtonsHolder").on('click', '.challengeBtn', function () {
        $("#thumbs-up-img").hide();
        $("#noChallengeSelected").hide();
        resetForOtherChallenge();
        var level = $(this).attr("data-level");
        $(this).addClass("w3-greenImportant").siblings().removeClass("w3-greenImportant");
        $("#challengeName").text("LEVEL " + level + ": " + allChallenges[level]["challengeName"]);
        currentLevel = allChallenges[level]["level"];
        $("#challengeSelected").show();
        $("#pointsPerCorrectWord span").text(allChallenges[currentLevel]["points"]);
        $("#pointsPerCorrectWord").show();
        getLettersForChallenge();
        showNextLetter();
    })
    function getLettersForChallenge(){
        var copyAllLetters = {...allLetters};
        currentLevel === 1 ? lettersCurrentChallenge = Object.keys(copyAllLetters).map((key) => [key, copyAllLetters[key]]) : null;
    }
    function correctClicked(){
        var correctLetter = lettersCurrentChallenge.splice(nextLetterIndex,1);
        correctLetters.push(...correctLetter);
        $("#correctBlockHolder").append('<span class="block small green">' + correctLetter[0][0] + '</span>');
        correctCounter = correctCounter + 1;
        $("#correctCounter").text(correctCounter);
        if(lettersCurrentChallenge.length === 0 && repeatedWrongLetters === false && wrongLetters.length > 0){
            repeatWrongLetters();
        } else if (lettersCurrentChallenge.length === 0 && (repeatedWrongLetters === true || wrongLetters.length === 0)){
            $("#correctButton").prop("disabled",true);
            $("#wrongButton").prop("disabled",true);
            $("#thumbs-up-img").show();
            $("#letterHolder").text("");
            setTimeout( function() {
                $("#challengeSelected").hide();
                $("#noChallengeSelected").show();
                $("button.w3-greenImportant").removeClass("w3-greenImportant");
            }, 3000);
            return;
        }
        showNextLetter();
    }
    function wrongClicked(){
        var wrongLetter = lettersCurrentChallenge.splice(nextLetterIndex,1);
        wrongLetters.push(...wrongLetter);
        $("#wrongBlockHolder").append('<span class="block small red">' + wrongLetter[0][0] + '</span>');
        wrongCounter = wrongCounter + 1;
        $("#wrongCounter").text(wrongCounter);
        if(lettersCurrentChallenge.length === 0 && repeatedWrongLetters === false){
            repeatWrongLetters();
        } else if (lettersCurrentChallenge.length === 0 && repeatedWrongLetters === true){
            $("#correctButton").prop("disabled",true);
            $("#wrongButton").prop("disabled",true);
            $("#thumbs-up-img").show();
            $("#letterHolder").text("");
            setTimeout( function() {
                $("#challengeSelected").hide();
                $("#noChallengeSelected").show();
                $("button.w3-greenImportant").removeClass("w3-greenImportant");
            }, 3000);
            return;
        }
        showNextLetter();
    }
    function repeatWrongLetters(){
        lettersCurrentChallenge = wrongLetters.slice();
        wrongLetters = [];
        repeatedWrongLetters = true;
    }
    function resetForOtherChallenge(){
        $(".block.small").remove();
        $("#correctCounter").text(0);
        $("#wrongCounter").text(0);
        correctCounter = 0;
        wrongCounter = 0;
        repeatedWrongLetters = false;
        correctLetters = [];
        wrongLetters = [];
        $("#correctButton").prop("disabled",false);
        $("#wrongButton").prop("disabled",false);
    }
    createChallengeButtons(allChallenges);
    $("#correctButton").on("click", correctClicked);
    $("#wrongButton").on("click", wrongClicked);
});