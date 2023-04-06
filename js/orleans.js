i = 1;
dico_fuyuki = { 1: "part1/orleans/jeanne.png", 2: "part1/orleans/mozart.png", 3: "part1/orleans/jalter.png", 4: "part1/orleans/gilles.png", 5: "part1/orleans/jeanne.png", 6: "part1/orleans/mozart.png", 7: "part1/orleans/jalter.png", 8: "part1/orleans/gilles.png" };
dico_nom_persos = { 1: "Jeanne d'Arc", 2: "Wolfgang Amadeus Mozart", 3: "Jeanne d'Arc (Alter)", 4: "Gilles de Rais (Caster)", 5: "Jeanne d'Arc", 6: "Wolfgang Amadeus Mozart", 7: "Jeanne d'Arc (Alter)", 8: "Gilles de Rais (Caster)" };
dico_desc_persos = { 1: '"Ô Seigneur, je vous offre mon corps..."', 2: "Un pianiste et compositeur renommé mondialement. Il vivait au 18ème siècle et possèdait une ouïe surnaturelle. Un génie miraculeux", 4: "Un noble français du 15ème siècle. Il a commis à maintes reprises des enlèvement des enfants de son quartier, les emmenant un à un dans son domaine afin d'en abuser puis de les tuer. ", 3: '"Si Dieu existe, je serai punie pour cela..."', 5: '"Ô Seigneur, je vous offre mon corps..."', 6: "Un pianiste et compositeur renommé mondialement. Il vivait au 18ème siècle et possèdait une ouïe surnaturelle. Un génie miraculeux.", 8: "Un noble français du 15ème siècle. Il a commis à maintes reprises des enlèvement des enfants de son quartier, les emmenant un à un dans son domaine afin d'en abuser puis de les tuer.", 7: '"Si Dieu existe, je serai punie pour cela..."' }




function changer_image_droite() {
    if (7 >= i) {
        i += 1;
        document.getElementById("fuyuki_persos").style.backgroundImage = "url('../../images/assets_page_singus/" + dico_fuyuki[i];
        document.getElementById("nom_perso").innerHTML = dico_nom_persos[i];
        document.getElementById("desc_perso").innerHTML = dico_desc_persos[i];
    }
    else {
        i = 1
        document.getElementById("fuyuki_persos").style.backgroundImage = "url('../../images/assets_page_singus/" + dico_fuyuki[1];
        document.getElementById("nom_perso").innerHTML = dico_nom_persos[i];
        document.getElementById("desc_perso").innerHTML = dico_desc_persos[i];

    }
}

function changer_image_gauche() {
    if (i >= 2) {
        i -= 1;
        document.getElementById("fuyuki_persos").style.backgroundImage = "url('../../images/assets_page_singus/" + dico_fuyuki[i];
        document.getElementById("nom_perso").innerHTML = dico_nom_persos[i];
        document.getElementById("desc_perso").innerHTML = dico_desc_persos[i];

    }
    else {
        i = 8
        document.getElementById("fuyuki_persos").style.backgroundImage = "url('../../images/assets_page_singus/" + dico_fuyuki[8];
        document.getElementById("nom_perso").innerHTML = dico_nom_persos[i];
        document.getElementById("desc_perso").innerHTML = dico_desc_persos[i];
    }
}

document.querySelector("#gauche").addEventListener('click', changer_image_gauche);
document.querySelector("#droite").addEventListener('click', changer_image_droite);