i = 1;
dico_fuyuki = {1:"part1/fuyuki/directrice.png",2:"part1/fuyuki/cu.png",3:"part1/fuyuki/salter.png", 4:"part1/fuyuki/lev.png", 5:"part1/fuyuki/directrice.png",6:"part1/fuyuki/cu.png",7:"part1/fuyuki/salter.png",8:"part1/fuyuki/lev.png"};
dico_nom_persos = {1:"Olga Marie",2:"Cú Chulainn (Caster)",3:"Arthoria Pendragon (Alter)", 4:"Lev Lainur",5:"Olga Marie",6:"Cú Chulainn (Caster)",7:"Arthoria Pendragon (Alter)",8:"Lev Lainur"};
dico_desc_persos = {1:"La directrice de Chaldea et membre de la famille Animusphere, elle est connue pour ses prouesses dans le monde de la Magie. Elle essaye d'éviter l'extinction de l'Ordre Humain en 2017.", 2:"Un héros de légendes Celtiques d'Ulster. Un membre des Chevaliers de la Branche Rouge et le plus grand guerrier d'Ulster.", 3:"Corrompu par la malédiction du Saint Graal, le côté impitoyable du Roi des Chevaliers. Ou peut-être est-ce la vraie nature du 'roi idéal' que le Roi Arthur aspirait.", 4:"Jeune homme amical que le protagoniste rencontre à Chaldea, c'est l'homme qui construit la Lunette d'observation du futur proche, Sheba. Il pourrait donner sa vie pour protéger l'humanité.", 5:"La directrice de Chaldea et membre de la famille Animusphere, elle est connue pour ses prouesses dans le monde de la Magie. Elle essaye d'éviter l'extinction de l'Ordre Humain en 2017.", 6:"Un héros de légendes Celtiques d'Ulster. Un membre des Chevaliers de la Branche Rouge et le plus grand guerrier d'Ulster.", 7:"Corrompu par la malédiction du Saint Graal, le côté impitoyable du Roi des Chevaliers. Ou peut-être est-ce la vraie nature du 'roi idéal' que le Roi Arthur aspirait.", 8:"Jeune homme amical que le protagoniste rencontre à Chaldea, c'est l'homme qui construit la Lunette d'observation du futur proche, Sheba. Il pourrait donner sa vie pour protéger l'humanité."}




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
