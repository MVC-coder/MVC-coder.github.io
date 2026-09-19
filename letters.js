$( document ).ready( function(){
    var currentLevel = 0;
    var lettersCurrentChallenge = [];
    var correctLetters = [];
    var wrongLetters = [];
    var nextLetterIndex = null;
    var correctCounter = 0;
    var wrongCounter = 0;
    var repeatedWrongLetters = false;
    var allLetters = {
        i: {
            letterSteunAI: [{
                image: "i.png",
                name: "inktvis"
            }],
            molEnBeer: {
                image: "ik.jpg",
                name: "ik"
            },
            sound: "I.m4a"
        },
        k: {
            letterSteunAI: [{
                image: "k.png",
                name: "krokodil"
            }],
            molEnBeer: {
                image: "ik.jpg",
                name: "ik"
            },
            sound: "K.m4a"
        },
        m: {
            letterSteunAI: [{
                image: "m-manta.png",
                name: "manta"
            },{
                image:"m-muur.png",
                name: "muur"
            }],
            molEnBeer: {
                image: "mol.jpg",
                name: "mol"
            },
            sound: "M.m4a"
        },
        /*o: {
            letterSteunAI: [{
                image: "o-orkaan.png",
                name: "orkaan"
            },{
                image: "o-orkest.png",
                name: "orkest"
            }],
            molEnBeer: {
                image: "mol.jpg",
                name: "mol"
            },
            sound: "O.m4a"
        },
        l: {
            letterSteunAI: [{
                image: "l.png",
                name: "ladder"
            }],
            molEnBeer: {
                image: "mol.jpg",
                name: "mol"
            },
            sound: "L.m4a"
        },
        b: {
            letterSteunAI: [{
                image: "b.png",
                name: "beer"
            }],
            molEnBeer: {
                image: "beer.jpg",
                name: "beer"
            },
            sound: "B.m4a"
        },
        ee: {
            letterSteunAI: [{
                image: "ee.png",
                name: "eenhoorn"
            }],
            molEnBeer: {
                image: "beer.jpg",
                name: "beer"
            },
            sound: "Ee.m4a"
        },
        r: {
            letterSteunAI: [{
                image: "r.png",
                name: "ridder"
            }],
            molEnBeer: {
                image: "beer.jpg",
                name: "beer"
            },
            sound: "R.m4a"
        },
        a: {
            letterSteunAI: [{
                image: "a.png",
                name: "appel"
            }],
            molEnBeer: {
                image: "an.jpg",
                name: "an"
            },
            sound: "A.m4a"
        },
        n: {
            letterSteunAI: [{
                image: "n.png",
                name: "nietje"
            }],
            molEnBeer: {
                image: "an.jpg",
                name: "an"
            },
            sound: "N.m4a"
        },
        t: {
            letterSteunAI: [{
                image: "t.png",
                name: "tak"
            }],
            molEnBeer: {
                image: "tom.jpg",
                name: "tom"
            },
            sound: "T.m4a"
        },
        p: {
            letterSteunAI: [{
                image: "p-paard1.png",
                name: "paard"
            },{
                image: "p-paard2.png",
                name: "paard"
            }],
            molEnBeer: {
                image: "pen.jpg",
                name: "pen"
            },
            sound: "P.m4a"
        },
        e: {
            letterSteunAI: [{
                image: "e.png",
                name: "emmer"
            }],
            molEnBeer: {
                image: "pen.jpg",
                name: "pen"
            },
            sound: "E.m4a"
        },
        j: {
            letterSteunAI: [{
                image: "j.png",
                name: "jojo"
            }],
            molEnBeer: {
                image: "jas.jpg",
                name: "jas"
            },
            sound: "J.m4a"
        },
        s: {
            letterSteunAI: [{
                image: "s.png",
                name: "slang"
            }],
            molEnBeer: {
                image: "jas.jpg",
                name: "jas"
            },
            sound: "S.m4a"
        },
        u: {
            letterSteunAI: [{
                image: "u.png",
                name: "put"
            }],
            molEnBeer: {
                image: "mus.jpg",
                name: "mus"
            },
            sound: "U.m4a"
        },
        v: {
            letterSteunAI: [{
                image: "v.png",
                name: "vogel"
            }],
            molEnBeer: {
                image: "vis.jpg",
                name: "vis"
            },
            sound: "V.m4a"
        },
        oe: {
            letterSteunAI: [{
                image: "oe.png",
                name: "oehoe"
            }],
            molEnBeer: {
                image: "poes.jpg",
                name: "poes"
            },
            sound: "Oe.m4a"
        },
        h: {
            letterSteunAI: [{
                image: "h.png",
                name: "haan"
            }],
            molEnBeer: {
                image: "haan.jpg",
                name: "haan"
            },
            sound: "H.m4a"
        },
        aa: {
            letterSteunAI: [{
                image: "aa.png",
                name: "aap"
            }],
            molEnBeer: {
                image: "haan.jpg",
                name: "haan"
            },
            sound: "Aa.m4a"
        },
    oo: {
            letterSteunAI: [{
                image: "oo.png",
                name: "oog"
            }],
            molEnBeer: {
                image: "boom.jpg",
                name: "boom"
            },
            sound: "Oo.m4a"
        },
        w: {
            letterSteunAI: [{
                image: "w.png",
                name: "was"
            }],
            molEnBeer: {
                image: "weg.jpg",
                name: "weg"
            },
            sound: "W.m4a"
        },
        g: {
            letterSteunAI: [{
                image: "g.png",
                name: "goudvis"
            }],
            molEnBeer: {
                image: "weg.jpg",
                name: "weg"
            },
            sound: "G.m4a"
        },
        uu: {
            letterSteunAI: [{
                image: "uu.png",
                name: "vuur"
            }],
            molEnBeer: {
                image: "muur.jpg",
                name: "muur"
            },
            sound: "Uu.m4a"
        },
        d: {
            letterSteunAI: [{
                image: "d.png",
                name: "dino"
            }],
            molEnBeer: {
                image: "deur.jpg",
                name: "deur"
            },
            sound: "D.m4a"
        },
        eu: {
            letterSteunAI: [{
                image: "eu.png",
                name: "neushoorn"
            }],
            molEnBeer: {
                image: "deur.jpg",
                name: "deur"
            },
            sound: "Eu.m4a"
        },
        ij: {
            letterSteunAI: [{
                image: "ij.png",
                name: "ijs"
            }],
            molEnBeer: {
                image: "ijs.jpg",
                name: "ijs"
            },
            sound: "Ij.m4a"
        },
        sch: {
            letterSteunAI: [],
            molEnBeer: {
                image: "school.jpg",
                name: "school"
            },
            sound: "Sch.m4a"
        },
        ie: {
            letterSteunAI: [{
                image: "ie.png",
                name: "gieter"
            }],
            molEnBeer: {
                image: "vier.jpg",
                name: "vier"
            },
            sound: "Ie.m4a"
        },
        ou: {
            letterSteunAI: [{
                image: "ou.png",
                name: "touw"
            }],
            molEnBeer: {
                image: "touw.jpg",
                name: "touw"
            },
            sound: "Ou.m4a"
        },
        ui: {
            letterSteunAI: [{
                image: "ui.png",
                name: "uil"
            }],
            molEnBeer: {
                image: "duif.jpg",
                name: "duif"
            },
            sound: "Ui.m4a"
        },
        f: {
            letterSteunAI: [{
                image: "f.png",
                name: "flamingo"
            }],
            molEnBeer: {
                image: "duif.jpg",
                name: "duif"
            },
            sound: "F.m4a"
        },
        z: {
            letterSteunAI: [{
                image: "z.png",
                name: "zwaan"
            }],
            molEnBeer: {
                image: "zon.jpg",
                name: "zon"
            },
            sound: "Z.m4a"
        },
        aai: {
            letterSteunAI: [],
            molEnBeer: {
                image: "haai.jpg",
                name: "haai"
            },
            sound: "Aai.m4a"
        },
        ooi: {
            letterSteunAI: [],
            molEnBeer: {
                image: "kooi.jpg",
                name: "kooi"
            },
            sound: "Ooi.m4a"
        },
        oei: {
            letterSteunAI: [],
            molEnBeer: {
                image: "roei.jpg",
                name: "roei"
            },
            sound: "Oei.m4a"
        },
        au: {
            letterSteunAI: [{
                image: "au.png",
                name: "auto"
            }],
            molEnBeer: {
                image: "pauw.jpg",
                name: "pauw"
            },
            sound: "Au.m4a"
        },
        ei: {
            letterSteunAI: [{
                image: "ei.png",
                name: "ei"
            }],
            molEnBeer: {
                image: "ei.jpg",
                name: "kei"
            },
            sound: "Ei.m4a"
        },
        c: {
            letterSteunAI: [],
            molEnBeer: {
                image: "carnaval.jpg",
                name: "carnaval"
            },
            sound: null
        },
        nk: {
            letterSteunAI: [],
            molEnBeer: {
                image: "bank.jpg",
                name: "bank"
            },
            sound: "Nk.m4a"
        },
        ng: {
            letterSteunAI: [],
            molEnBeer: {
                image: "wang.jpg",
                name: "wang"
            },
            sound: "Ng.m4a"
        },
        eeuw: {
            letterSteunAI: [],
            molEnBeer: {
                image: "leeuw.jpg",
                name: "leeuw"
            },
            sound: "Eeuw.m4a"
        },
        ieuw: {
            letterSteunAI: [],
            molEnBeer: {
                image: "nieuw.jpg",
                name: "nieuw"
            },
            sound: "Ieuw.m4a"
        },
        ch: {
            letterSteunAI: [],
            molEnBeer: {
                image: "lach.jpg",
                name: "lach"
            },
            sound: "Ch.m4a"
        },
        cht: {
            letterSteunAI: [],
            molEnBeer: {
                image: "lucht.jpg",
                name: "lucht"
            },
            sound: null
        }*/
    }
    var allChallenges = {
        1: {
            challengeName: "Alle letters",
            level: 1,
            baseWord:"alle letters",
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