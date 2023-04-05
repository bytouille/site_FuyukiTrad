i = 1;
dico_fuyuki = {1:"part1/londres/mordred.png",2:"part1/londres/hans.png",3:"part1/londres/jack.png", 4:"part1/londres/tesla.png", 5:"part1/londres/mordred.png",6:"part1/londres/hans.png",7:"part1/londres/jack.png",8:"part1/londres/tesla.png"};
dico_nom_persos = {1:"Mordred",2:"Hans Christian Andersen",3:"Jack l'Éventreur", 4:"Nikola Tesla",5:"Mordred",6:"Hans Christian Andersen",7:"Jack l'Éventreur",8:"Nikola Tesla"};
dico_desc_persos = {1:"Mordred est un Chevalier de la Table Ronde et le bâtard du Roi Arthur. Le Chevalier de la trahison qui a tué son père à la Colline de Camlann, mettant fin à la légende Arthurienne.", 
                    2:"Un des trois plus grand auteur de conte de fées. Connu mondialement pour la Petite Sirène et la Petite Fille aux allumettes. Né en 1805, il mourra en 1875 d'un cancer de foie. Bien qu'il soit l'un des trois plus grand auteur maintenant, il souffrit de constants échecs accompagnés de frustrations et de déception.",
                    3:"Un serial-killer connu mondialement. Ils étaient appelés, Jack l'Éventreur. Jack avaient brutallement assassiné cinq femme et malgré tout les efforts de Scotland Yard, Jack se sont volatilisés sans même être apperçus.",
                    4:"Un génie et scientifique dans le domaine de l'électromagnétisme durant le XIXème et XXème siècle qui se vantait de savoir comment séparer la planète en deux. Alors que beaucoup de mythologies voyaient l'électricité comme une grande force de la nature et une intervention divine, c'est Tesla (et d'autres grands érudits) qui ont contribué à comprendre ses mystères, permettant à l'homme d'accroître son pouvoir." , 5:"Mordred est un Chevalier de la Table Ronde et le bâtard du Roi Arthur. Le Chevalier de la trahison qui a tué son père à la Colline de Camlann, mettant fin à la légende Arthurienne.", 6:"Un des trois plus grand auteur de conte de fées. Connu mondialement pour la Petite Sirène et la Petite Fille aux allumettes. Né en 1805, il mourra en 1875 d'un cancer de foie. Bien qu'il soit l'un des trois plus grand auteur maintenant, il souffrit de constants échecs accompagnés de frustrations et de déception.", 7:"Un serial-killer connu mondialement. Ils étaient appelés, Jack l'Éventreur. Jack avaient brutallement assassiné cinq femme et malgré tout les efforts de Scotland Yard, Jack se sont volatilisés sans même être apperçus.", 8:"Un génie et scientifique dans le domaine de l'électromagnétisme durant le XIXème et XXème siècle qui se vantait de savoir comment séparer la planète en deux. Alors que beaucoup de mythologies voyaient l'électricité comme une grande force de la nature et une intervention divine, c'est Tesla (et d'autres grands érudits) qui ont contribué à comprendre ses mystères, permettant à l'homme d'accroître son pouvoir." }




function changer_image_droite(){
    if (7 >= i){
        i += 1 ;
        document.getElementById("fuyuki_persos").style.backgroundImage = "url('/././images/assets_page_singus/"+ dico_fuyuki[i];
        document.getElementById("nom_perso").innerHTML = dico_nom_persos[i];
        document.getElementById("desc_perso").innerHTML = dico_desc_persos[i];
    }
    else {
        i = 1
        document.getElementById("fuyuki_persos").style.backgroundImage = "url('/././images/assets_page_singus/"+ dico_fuyuki[1];
        document.getElementById("nom_perso").innerHTML = dico_nom_persos[i];
        document.getElementById("desc_perso").innerHTML = dico_desc_persos[i];

    }
}

function changer_image_gauche(){
    if (i >= 2 ){
        i -= 1 ;        
        document.getElementById("fuyuki_persos").style.backgroundImage = "url('/././images/assets_page_singus/"+ dico_fuyuki[i];
        document.getElementById("nom_perso").innerHTML = dico_nom_persos[i];
        document.getElementById("desc_perso").innerHTML = dico_desc_persos[i];

    }
    else {
        i = 8
        document.getElementById("fuyuki_persos").style.backgroundImage = "url('/././images/assets_page_singus/"+ dico_fuyuki[8];
        document.getElementById("nom_perso").innerHTML = dico_nom_persos[i];
        document.getElementById("desc_perso").innerHTML = dico_desc_persos[i];
    }
}

document.querySelector("#gauche").addEventListener('click', changer_image_gauche);
document.querySelector("#droite").addEventListener('click', changer_image_droite);