i = 1;
dico_fuyuki = { 1: "part1/pluribus/florence.png", 2: "part1/pluribus/karna.png", 3: "part1/pluribus/arjuna.png", 4: "part1/pluribus/cu.png", 5: "part1/pluribus/florence.png", 6: "part1/pluribus/karna.png", 7: "part1/pluribus/arjuna.png", 8: "part1/pluribus/cu.png" };
dico_nom_persos = { 1: "Florence Nightingale", 2: "Karna", 3: "Arjuna", 4: "Cú Chulainn (Alter)", 5: "Florence Nightingale", 6: "Karna", 7: "Arjuna", 8: "Cú Chulainn (Alter)" };
dico_desc_persos = {
    1: "L'ange de crimée ayant comme principe service et dévouement. Une femme de convinction. Elle avait une forte personnalité et ne se décourageait jamais, ce qui lui permettait de dire ce qui devait être dit peu importe à qui elle parlait, même au dirigeant du Royaume-Uni. Lors de cette matérialisation, cette aspect de sa personalité combinée à son enchantement d'aliénation de rang EX produit un être qui n'écoute absolument personne.",
    2: "Le grand héros du Mahabharatan, un ancien poème Indien. Il est le rival d'Arjuna, le héros principal du Mahabharata, ainsi que son demi-frère. Lorsque Karna affrontait son demi-frère, il fut incapable de bouger à cause de multiples couches de malédictions, et Arjuna en prit avantage et le tua de sang froid.",
    3: "Le héros principal d'une grande légende indianne, le Mahabharata. C'est une histoire impressionnant où tout les héros d'Inde sont rassemblés, et ce n'est pas une exagération de dire qu'Arjuna est donc au centre de toutes ces histoires.",
    4: "Le légendaire guerrier du cycle d'Ulster de la mythologie celte. Un membre des Chevaliers de la Branche rouge et le plus puissant guerrier d'Ulster, il se fit un nom en maniant la lance comme le lui a enseigné Scáthach, la cheffe de la Terre des ombres. Contrairement à sa classe usuelle, il s'est matérialisé en tant que Berserker. Des facteurs ont fait que son équipement à un peu changé en même temps que sa personnalité elle aussi altérée. ", 5: "L'ange de crimée ayant comme principe service et dévouement. Une femme de convinction. Elle avait une forte personnalité et ne se décourageait jamais, ce qui lui permettait de dire ce qui devait être dit peu importe à qui elle parlait, même au dirigeant du Royaume-Uni. Lors de cette matérialisation, cette aspect de sa personalité combinée à son enchantement d'aliénation de rang EX produit un être qui n'écoute absolument personne.", 6: "Le grand héros du Mahabharatan, un ancien poème Indien. Il est le rival d'Arjuna, le héros principal du Mahabharata, ainsi que son demi-frère. Lorsque Karna affrontait son demi-frère, il fut incapable de bouger à cause de multiples couches de malédictions, et Arjuna en prit avantage et le tua de sang froid.", 7: "Le héros principal d'une grande légende indianne, le Mahabharata. C'est une histoire impressionnant où tout les héros d'Inde sont rassemblés, et ce n'est pas une exagération de dire qu'Arjuna est donc au centre de toutes ces histoires.", 8: "Le légendaire guerrier du cycle d'Ulster de la mythologie celte. Un membre des Chevaliers de la Branche rouge et le plus puissant guerrier d'Ulster, il se fit un nom en maniant la lance comme le lui a enseigné Scáthach, la cheffe de la Terre des ombres. Contrairement à sa classe usuelle, il s'est matérialisé en tant que Berserker. Des facteurs ont fait que son équipement à un peu changé en même temps que sa personnalité elle aussi altérée. "
}




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