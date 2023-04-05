function verif_mdp(){
    pseudo = document.querySelector('#pseudo').value;
    var mdp = document.querySelector("#mdp_input").value;
    var txt = document.querySelector("#reponse");

    if (mdp == "c'est fate/grand order c'est le meilleur jeu du monde" && pseudo != "") {
        txt.innerHTML = ('Accès accordé cliquez sur ce bouton pour débuter le quiz : <button id="commencer_quiz" onclick="quiz()">Commencer</button>');
    }

    if (mdp != "c'est fate/grand order c'est le meilleur jeu du monde" && pseudo != "") {
        txt.innerHTML = "Veuillez entrer un mot de passe valide !";
    }
    if (pseudo == "") {
        txt.innerHTML = "Veuillez entrer tout d'abord un pseudonyme !";
    }
}

function clean(){
    var pseudo = document.querySelector('#pseudo').value;
    var mdp = document.querySelector("#mdp_input").value;

    document.querySelector('#reponse').innerHTML = "";
    document.getElementById('wati_button').style.position = 'absolute';
    document.getElementById('wati_button').style.left = '505vw';

    document.querySelector('#modif_pseudo').innerHTML = 'Pseudo : '+ pseudo;
    document.getElementById('modif_pseudo').style.position = 'relative';
    document.getElementById('modif_pseudo').style.left = '20vw';
    document.getElementById('modif_pseudo').style.fontSize = '3rem';

    document.getElementById('modif_mdp').innerHTML = '';
}

function stape1(){
    document.querySelector('#question').innerHTML = ('De quoi parle ce site ?');
    document.querySelector('#reponses').innerHTML = ('Du meilleur jeu de la terre <input type="radio" name = "q1"/> <br /> De Fate/Grand Order <input type="radio" name = "q1" /><br />Du collectif de traduction qui traduit Fate/Grand Order<input type="radio" name = "q1" id="lareponse"/><br />De la façon dont le monde sera détruit en 2017<input type="radio" name = "q1"/><br />');
    
    document.getElementById('suivant').style.position = 'relative';
    document.getElementById('suivant').style.left = '38vw';
}


function quiz(){
    clean()
    stape1()
}

points = 0;   
pts_win = 10 ;
i = 0;

function comptage(){
    if (i == 7 || i == 8){
        var reponse1 = document.getElementById("lareponse1");
        var reponse2 = document.getElementById("lareponse2");
        if (reponse1.checked == true) {
            points = points + parseInt(pts_win)/2;
        }
        if (reponse2.checked == true) {
            points = points + parseInt(pts_win)/2;
        }
    }
    else {
        var reponse = document.getElementById("lareponse");
        if (reponse.checked == true) {
            points = points + parseInt(pts_win);
        }
    }
}

liste_questions = ["Combien y'a t'il de chapitre dans la partie 1 : Observer of a Timeless Temple ?", "Quel est le nom de la septième Singularité ?", "Quelle est la classe de Gilles de Rais ?", "Combien y'a t'il de personnes impliquées dans le projet ?", "Où se déroule le troisième chapitre : Septem ?", "Où se déroule la Singularité F ?", "Quel est les thèmes principaux de la troisième Singularité : Okeanos ?", "Pourquoi le protagoniste doit se rendre dans ces Singularités ?", "Combien y'a-t-il de chapitre EN TOUT dans le jeu ?"];
liste_reponses = ['7 <input type="radio" name = "q1"/> <br /> 15 <input type="radio" name = "q1" /><br />9<input type="radio" name = "q1" id="lareponse"/><br />5<input type="radio" name = "q1"/><br />', 'Bangalore <input type="radio" name = "q1"/> <br />Mozambique<input type="radio" name = "q1" /><br />Babylone<input type="radio" name = "q1" id="lareponse"/><br />Baltimore<input type="radio" name = "q1"/><br />', 'Caster <input type="radio" id="lareponse" name = "q1"/> <br /> Saber <input type="radio" name = "q1" /><br />Grand Order<input type="radio" name = "q1"/><br />Master<input type="radio" name = "q1"/><br />','10 <input type="radio" name = "q1"/> <br /> 8 <input type="radio" name = "q1" /><br />15<input type="radio" name = "q1"/><br />13<input type="radio" id="lareponse" name = "q1"/><br />','À Naples <input type="radio" name = "q1"/> <br /> À Bruxelles <input type="radio" name = "q1" /><br /> À Rome <input type="radio" name = "q1" id="lareponse"/><br /> À Fuyuki<input type="radio" name = "q1"/><br />', ' À Fuyuki <input type="radio" id="lareponse" name = "q1"/> <br /> À Furuto<input type="radio" name = "q1" /><br /> À Fausembourg <input type="radio" name = "q1"/><br /> Au Futuroscope<input type="radio" name = "q1"/><br />', 'La reproduction des cactus<input type="checkbox" name = "q1"/> <br />Les monstres<input type="checkbox" name = "q1" /><br />La mer<input type="checkbox" name = "q1" id="lareponse1"/><br />Les pirates<input type="checkbox" id="lareponse2" name = "q1"/><br />', 'Pour se reproduire avec les cactus<input type="checkbox" name = "q1"/> <br />Pour sauver le genre humain<input type="checkbox" id="lareponse1" name = "q1" /><br />Pour avoir une vie heureuse<input type="checkbox" name = "q1"/><br />Pour élucider le mystère derrière la dispairition du genre humain<input type="checkbox" id="lareponse2" name = "q1"/><br />', '15<input type="radio" name = "q1"/> <br />12<input type="radio" name = "q1" /><br />19<input type="radio" name = "q1" id="lareponse"/><br />53<input type="radio" name = "q1"/><br />' ];


function next_question(){
    document.querySelector('#question').innerHTML = liste_questions[i];
    document.querySelector('#reponses').innerHTML = (liste_reponses[i]);
    i += 1;

    if (i == 10){
        document.querySelector('#question').innerHTML = points + "/ 100";

        if (points == 100) {
        document.querySelector('#reponses').innerHTML = "tro for";
        }

        if (99 > points > 50) {
            document.querySelector('#reponses').innerHTML = "Mouais, peut mieux faire";
        }

        if (points < 50){
            document.querySelector('#reponses').innerHTML = "Faut lire ce qui est écrit...";
        }

        document.querySelector('#cgmt_suivant').innerHTML = '';

    }
}

function suivante(){
    comptage()
    next_question()
}


document.querySelector("#wati_button").addEventListener('click', verif_mdp);
document.querySelector("#commencer_quiz").addEventListener('click', quiz);