i = 1;
dico_fuyuki = {1:"part1/okeanos/drake.png",2:"part1/okeanos/Orion.png",3:"part1/okeanos/teach.png", 4:"part1/okeanos/jason.png", 5:"part1/okeanos/drake.png",6:"part1/okeanos/Orion.png",7:"part1/okeanos/teach.png",8:"part1/okeanos/jason.png"};
dico_nom_persos = {1:"Francis Drake",2:"Orion (Artémis)",3:"Edward Teach", 4:"Jason",5:"Francis Drake",6:"Orion (Artémis)",7:"Edward Teach",8:"Jason"};
dico_desc_persos = {1:"Aventurière, corsaire et capitaine de flotte. La femme qui a traversé le monde, et qui a fait de l'Angletterre le souverrain de l'Âge de l'Exploration. Elle est aussi celle qui a détruit la Flotte invincible d'Espagne et a mené à la ruine le soit disant Empire où le soleil ne se couche jamais. C'est pour cela qu'elle est appellée la Femme qui a abattu le Soleil.", 
                    2:"Artémis a été invoquée avec Orion en bonus. Correction, c'est l'inverse. Lorsque le grand héros grecque a été invoqué, la déesse Artémis a d'une certaine manière été invoquée avec lui. En plus Orion a été transformé en étrange créature (une mascotte).", 3:"Plus connu sous le nom de Barbe Noire. Il est le pirate le plus connu au monde, et un vaurien qui a établi les bases du concept d'un pirate dans la conscience du monde. Il a conquis la mer des Caraïbes. Il était addict au rhum, aux femmes et à la violence. Il a aussi amassé une immense fortune.", 4:"Le fils d'Aeson, le roi d'Iolcus. Son nom de naissance était Diomedes, mais lorsqu'il fut prit en charge par Chiron, son nom devint Jason. Capitaine de l'Argo, son navire réunissant Hercules, Caenis, Atalante, Castor et bien d'autres héros grecque, il vécut un grand nombre d'aventures à la recherche de la toison d'or. " , 5:"Aventurière, corsaire et capitaine de flotte. La femme qui a traversé le monde, et qui a fait de l'Angletterre le souverrain de l'Âge de l'Exploration. Elle est aussi celle qui a détruit la Flotte invincible d'Espagne et a mené à la ruine le soit disant Empire où le soleil ne se couche jamais. C'est pour cela qu'elle est appellée la Femme qui a abattu le Soleil.", 6:"Artémis a été invoquée avec Orion en bonus. Correction, c'est l'inverse. Lorsque le grand héros grecque a été invoqué, la déesse Artémis a d'une certaine manière été invoquée avec lui. En plus Orion a été transformé en étrange créature (une mascotte).", 7:"Plus connu sous le nom de Barbe Noire. Il est le pirate le plus connu au monde, et un vaurien qui a établi les bases du concept d'un pirate dans la conscience du monde. Il a conquis la mer des Caraïbes. Il était addict au rhum, aux femmes et à la violence. Il a aussi amassé une immense fortune.", 8:"Le fils d'Aeson, le roi d'Iolcus. Son nom de naissance était Diomedes, mais lorsqu'il fut prit en charge par Chiron, son nom devint Jason. Capitaine de l'Argo, son navire réunissant Hercules, Caenis, Atalante, Castor et bien d'autres héros grecque, il vécut un grand nombre d'aventures à la recherche de la toison d'or." }




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