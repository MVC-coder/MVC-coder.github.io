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
            challengeName: "km / mk",
            baseWord: "ik",
            points: 4,
            words: ["uk","ook","ik","aal","al","aas","os","is","eet","at","mee","oom","om","en","een","nee","aan","in","fee","eef","af","of","vee","aap","zee","zoo","oog","wee","ree","oor"]
        },
        2: {
            level: 2,
            challengeName: "mkm lang",
            baseWord: "maan",
            points: 5,
            words: ["kaas","kaal","kaap","laat","laan","laag","taak","taal","maak","maat","maan","maag","maar","naam","naar","faal","faam","vaar","vaak","vaat","vaag","paal","paar","zaak","zaal","zaag","gaas","gaat","gaan","gaap","gaar","haak","haal","haas","haat","haan","haag","haar","jaag","jaar","daal","daan","daar","waak","waas","waan","waag","waar","baal","baas","baan","raak","raam","raaf","raap","raar","keel","keer","lees","leen","leef","leeg","leer","teek","teen","meel","mees","meet","meen","meer","neem","neer","veel","veeg","veer","pees","peer","zeep","zeer","geel","geen","geef","heel","hees","heet","heen","heer","deel","deeg","week","wees","weet","ween","weef","weeg","weer","beek","beet","been","beef","beer","reep","kuur","tuur","muur","fuut","vuur","puur","zuur","guur","huur","duur","buur","kool","koop","koor","loom","loop","loog","toon","noot","noor","foor","voor","poos","poot","zoom","zoon","goot","hoop","hoog","hoor","doos","doop","door","woon","woog","boos","boot","boom","boon","boog","boor"]
        },
        3: {
            level:3,
            challengeName: "mkm kort",
            baseWord: "sok",
            points:6,
            words: ["kam","kan","kap","kar","lak","lat","lam","laf","lap","sap","tak","tas","tam","mak","mal","mat","mam","man","maf","map","mag","nat","nam","nar","fan","vak","val","vat","pak","pas","gok","gom","hok","hol","hof","hop","dol","dok","dom","dof","kus","kun","lus","sul","suf","mus","muf","mug","nul","nut","fut","vul","put","puf","pup","zus","gul","gum","gun","hut","hun","hup","ken","kef","lek","les","lef","leg","set","tel","tem","mes","met","mep","nek","nel","nep","fel","vel","vet","ven","ver","pet","pen","zes","zet","zen","gek","hek","hel","dop","wok","wol","won","bok","bol","bos","bot","bom","bon","bes","ben","rek","rel","rem","ren","kil","kim","kin","kip","lik","lip","lig","sik","sip","tik","tim","tip","mik","mis","min","nis","nip","fit","vis","vin","pik","pil","pin","zit","zin","gif","hik","dik","dit","dip","wil","win","wip","bil","big","ril","rit","rif","kok","los","lot","lof","log","sok","som","sop","tol","tot","tom","ton","tof","top","tor","mok","mol","mos","mot","mop","nok","non","nog","fop","vol","vos","vod","pot","pop","zot","zon","gok","gom","hok","hol","hof","hop","dol","dok","dom","dof","dop","wok","wol","won","bok","bol","bos","bot","bom","bon","bof","rok","rol","ros","rot","kus","kun","lus","sul","suf","mus","muf","mug","nul","nut","fut","vul","put","puf","pup","zus","gul","gum","gun","hut","hun","hup"]
        },
        4: {
            level:4,
            challengeName: "mkm tweetekenklank",
            baseWord: "duim",
            points: 7,
            words: ["kuil","kuis","kuit","kuif","kuip","luik","luis","tuin","tuig","muil","muis","fuif","vuil","puik","zuil","zuig","huil","huis","duik","duim","duin","duif","wuif","buik","buis","buit","buil","koek","koel","loep","loer","toen","toer","moes","moet","moer","noem","voet","voer","poel","poes","poen","poep","zoek","zoet","zoem","zoen","zoef","hoek","hoef","doek","doel","doet","doen","boek","boel","boem","boen","boef","boeg","boer","roet","roem","roep","roer","kous","touw","mouw","vouw","zout","hout","jou","bout","bouw","rouw","fout","hou","wou","kies","kiem","kier","lief","liep","lieg","tien","mier","nies","niet","nier","fier","vies","vier","piek","piep","pier","ziek","ziet","zien","giet","hiel","hier","dien","dief","diep","dier","keur","leuk","leun","neus","peul","zeur","geur","deuk","deur","beuk","reus","reuk","kei","lei","sein","mei","zeil","wei","geit","reis","feit","lauw","saus","nauw","pauw","gauw","dauw","rauw","kijk","lijk","lijm","lijf","mijn","nijp","fijn","vijs","vijf","vijg","pijl","pijn"]
        },
        5: {
            level:5,
            challengeName: "mkmm kort / lang",
            baseWord: "heks",
            points: 8,
            words: ["heks","melk","welk","kalk","valk","balk","kolk","volk","dolk","wolk","lekt","wekt","denk","wenk","tank","mank","dank","bank","pink","zink","hals","mals","vals","wals","pels","pols","belt","helm","palm","galm","walm","zalm","kalm","film","zelf","kalf","zalf","wolf","welp","test","vest","mest","nest","pest","best","kast","last","tast","mast","vast","gast","wast","kust","lust","rust","kost","lost","post","wesp","hesp","remt","kamt","ramt","komt","kamp","lamp","damp","ramp","lens","mens","pens","wens","kans","gans","dans","hert","hart","kort","mort","kets","rits","rots","hond","hand","land","band","held","balt","valt","vult","kant","kont","bont","lont","kaars","laars","paars","mors","hars","pers","koord","boord","baard","bord","hard","taart","kaart","huurt","buurt","duurt","vuurt","geeft","beeft","leeft","dooft","rooft","hoofd","feest","leest","beest","hark","kurk","vork","werk","kerk"]
        },
        6: {
            level:6,
            challengeName: "mkmm tweetekenklank",
            baseWord: "koets",
            points: 9,
            words: ["kuist","ruikt","duikt","buigt","zuigt","puist","ruilt","huilt","woest","koest","roest","moest","hoest","roept","zoekt","boekt","voegt","boert","loert","roert","voert","toets","koets","poets","voelt","koers","bouwt","vouwt","niest","kiest","piekt","riekt","liegt","niets","fiets","jeukt","deukt","beukt","zeurt","beurt","geurt","zeult","beurs","reist","zeilt","peins","lijst","wijst","kijkt","lijkt","wijkt","ijlt"]
        },
        7: {
            level:7,
            challengeName: "mmkm kort / lang",
            baseWord: "bril",
            points: 10,
            words: ["klas","klus","kneep","knap","knop","knip","krap","krop","slee","sleep","slak","slaak","slok","slik","slim","sloom","slot","sloot","slaaf","slap","slaap","slip","sloop","stek","steek","stal","steel","staal","stil","stom","stoom","stof","staaf","step","stap","stop","stip","ster","staar","star","stuur","smak","smaak","smeek","smal","smul","smog","smeer","sneer","snor","snap","trek","trok","trol","trol","tros","tram","trom","tref","trip","trap","traag","fles","floot","vlek","vlak","vlok","vlees","vlot","vlam","vlug","vlag","plek","plak","pluk","plas","plus","prik","glas","gras","graas","draak","druk","drum","droom","dreef","draf","drop","drup","droog","blaas","blus","blos","bloos","blut","bloot","blad","blaf","blad","breek","braak","brok","brik","brul","bril","brol","bruut","brom","braaf","breed","braad","brood"]
        },
        8: {
            level:8,
            challengeName: "mmkm tweetekenklank",
            baseWord: "stier",
            points:11,
            words: ["fluit","kruid","fruit","druip","druif","sluis","kruin","bruin","kruis","kluis","kluif","kruip","kruis","sluit","sluip","pluis","pruik","druip","groet","broed","sloep","broem","troep","kroeg","sloep","stoel","stoep","stoet","stoef","stoer","smoel","smeul","snoer","snoek","snoep","troep","vloek","vloed","droef","bloed","bloem","broek","trouw","stout","klauw","snauw","stier","vlies","klier","priem","spies","knie","sliep","stiel","vlies","brief","kleur","sleur","sleuf","dreun","breuk","klein","klei","steil","dreig","knijp","slijm","slijp","stijl","stijf","grijs","blijf"]
        },
        9: {
            level:9,
            challengeName: "mmkmm kort / lang / tweetekenklank",
            baseWord: "prins",
            points:12,
            words: ["klink","klank","plank","slank","krans","krant","kramp","krimp","slecht","vlecht","vlucht","klucht","slang","stang","kring","spaart","sport","spurt","speurt","slikt","slaakt","slaapt","sluipt","sterk","slurf","snoept","speelt","glans","glimt","gluurt","slaapt","sleept","sluipt","sloopt","flens","flipt","fles","flost","stank","drank","klank","kleurt","speurt","plons","brons","prins","prent","zwelt","zwiert","zwemt","frons","brons","brand","spons","krans","plons","krant","plant","prent","klant","klapt","klopt","grijpt","gromt","snapt","snikt","snoept","snuit","vraagt","vriest","klaagt","klust","klimt","kleurt","kramp","stamp","stomp","klomp","sterk","dwerg","sterf","zwerm"]
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
        $("#pointsPerCorrectWord span").text(allChallenges[currentLevel]["points"]);
        $("#pointsPerCorrectWord").show();
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
        animatePointsPerCorrectWord();
        var nextChallenge = checkChangeLevel();
        handleNextChallenge(nextChallenge);
    }
    function animatePointsPerCorrectWord(){
        $("#pointsPerCorrectWord").addClass("growLetters");
        window.setTimeout(function(){$("#pointsPerCorrectWord").removeClass("growLetters")},400);
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
        $("#pointsPerCorrectWord span").text(allChallenges[currentLevel]["points"]);
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