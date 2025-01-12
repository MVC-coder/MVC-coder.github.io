$( document ).ready( function(){
    hideAllNextChallengeImages();
    
    var allWords = [];
    var correctCounter = 0;
    var wrongCounter = 0;
    var pointsTotal = 0; // sum of points for all correct answers
    var currentLevel = 0;

    const allChallenges = {
        1: {
            level: 1,
            challengeName: "km kort/lang",
            baseWord: "al",
            points: 4,
            time: 2,
            words: ["uk","ook","al","uur","aal"]
        },
        2: {
            level: 2,
            challengeName: "mkm lange klank",
            baseWord: "maan",
            points: 5,
            time: 2,
            words: ["maan","rook","guur","zeef","raak"]
        },
        3: {
            level: 3,
            challengeName: "mkm korte klank",
            baseWord: "man",
            points: 6,
            time: 2,
            words: ["man","rok","zus","ver","kar"]
        },
        4: {
            level: 4,
            challengeName: "mkm tweeklank",
            baseWord: "geur",
            points: 7,
            time: 2,
            words: ["reuk","tuin","dier","roep","koud"]
        }
    }
    createChallengeButtons(allChallenges);
    function createChallengeButtons(allChallenges){
        var buttons = [];
        for (const [key, value] of Object.entries(allChallenges)) {
            var buttonElement = $('<button data-level="' + key + '" class="w3-bar-item w3-button w3-padding w3-text-teal challengeBtn">LEVEL ' + value.level + ': ' + value.baseWord + '</button>');
            buttons.push(buttonElement);
        }
        $("#challengeButtonsHolder").append(buttons);
    }
    $("#challengeButtonsHolder").on('click', '.challengeBtn', function () {
        $("#noChallengeSelected").hide();
        resetForOtherChallenge();
        var level = $(this).attr("data-level");
        $(this).addClass("w3-greenImportant").siblings().removeClass("w3-greenImportant");
        allWords = getWordsForLevel(level);
        $("#challengeName").text("LEVEL " + level + ": " + allChallenges[level]["challengeName"]);
        currentLevel = allChallenges[level]["level"];
        $("#challengeSelected").show();
        showNextWord();
    })

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const challenge = urlParams.get('challenge');
    $("#correctButton").on("click", correctClicked);
    $("#wrongButton").on("click", wrongClicked);
    function correctClicked(){
        showNewPoints(allChallenges[currentLevel]["points"]);
        correctCounter++;
        showCorrectScore();
        colorBlockAndSaveWord("green");
        var nextChallenge = checkChangeLevel();
        handleNextChallenge(nextChallenge);
    }
    function wrongClicked(){
        wrongCounter++;
        showWrongScore();
        colorBlockAndSaveWord("red");
        var nextChallenge = checkChangeLevel();
        handleNextChallenge(nextChallenge);
    }
    function getWordsForLevel(level){
        return shuffleArray([...allChallenges[level]["words"]]);
    }
    function handleNextChallenge(nextChallenge){
        if(nextChallenge === "up"){
            startNextChallenge("up");
        } else if (nextChallenge === "down"){
            startNextChallenge("down");
        } else if(nextChallenge === "repeat"){
            startNextChallenge("repeat");
        }else {
            showNextWord();
        }
    }
    function startNextChallenge(mode){
        resetForOtherChallenge();
        $('#nextChallengeModal').show();
        showCorrectImageForNextChallenge(mode);
        if(mode === "up"){
            currentLevel = currentLevel + 1;
            if(currentLevel > Object.keys(allChallenges).length){
                currentLevel = Object.keys(allChallenges).length;
            }
        }
        if(mode === "down"){
            currentLevel = currentLevel - 1;
            if(currentLevel < 1){
                currentLevel = 1;
            }
        }
        // if mode === repeat => currentLevel doesn't change;
        allWords = getWordsForLevel(currentLevel);
        $("#challengeName").text("LEVEL " + currentLevel + ": " + allChallenges[currentLevel]["challengeName"]);
        $("button[data-level='" + currentLevel +"']").addClass("w3-greenImportant").siblings().removeClass("w3-greenImportant");
        showNextWord();
    }
    function showCorrectImageForNextChallenge(mode){
        hideAllNextChallengeImages();
        if(mode === "up"){
            $("#nextLevelImage").show();
        } else if(mode === "down"){
            $("#previousLevelImage").show();
        } else {
            $("#restartLevelImage").show();
        }
    }
    function resetForOtherChallenge(){
        correctCounter = 0;
        wrongCounter = 0;
        $("#correctCounter").text(0);
        $("#wrongCounter").text(0);
        $("#correctBlockHolder .block").each(function(){
            $(this).removeClass("green").addClass("gray").text("");
        });
        $("#wrongBlockHolder .block").each(function(){
            $(this).removeClass("red").addClass("gray").text("");
        });
    }
    function checkChangeLevel(){
        var changeLevel = "no";
        if(correctCounter >= 10 && wrongCounter <= 2){
            changeLevel = "up";
        }
        if(correctCounter >= 10 && wrongCounter === 3){
            changeLevel = "repeat";
        }
        if(wrongCounter >= 4){
            changeLevel = "down";
        }
        return changeLevel;
    }
    function showNextWord(){
        var index = correctCounter + wrongCounter;
        var word = allWords[index];
        $("#wordHolder").text(word);
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    function showNewPoints(pointsGained){
        pointsTotal += pointsGained;
        $("#pointsHolder").text(pointsTotal);
    }
    function colorBlockAndSaveWord(color){
        var word = $("#wordHolder").text();
        if(color === "green"){
            $("#correctBlockHolder .block:not(.green):first").removeClass("gray").addClass("green").text(word);
        }
        if(color === "red"){
            $("#wrongBlockHolder .block:not(.red):first").removeClass("gray").addClass("red").text(word);
        }
    }
    function showCorrectScore(){
        $("#correctCounter").text(correctCounter);
    }
    function showWrongScore(){
        $("#wrongCounter").text(wrongCounter);
    }
    function hideAllNextChallengeImages(){
        $("#nextLevelImage, #restartLevelImage, #previousLevelImage").hide();
    }
});