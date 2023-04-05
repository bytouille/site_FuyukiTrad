i = 1;
dico_fuyuki = {1:"part1/septem/nero.png",2:"part1/septem/sparta.png",3:"part1/septem/alex.png", 4:"part1/septem/altera.png", 5:"part1/septem/nero.png",6:"part1/septem/sparta.png",7:"part1/septem/alex.png",8:"part1/septem/altera.png"};
dico_nom_persos = {1:"Néron Claude",2:"Spartacus",3:"Alexandre", 4:"Altera le Hun",5:"Néron Claude",6:"Spartacus",7:"Alexandre",8:"Altera le Hun"};
dico_desc_persos = {1:"Un puissant empereur, et auto-proclamé la beautée en habit d'homme, elle est narcissique et égoïste, mais aussi joyeuse et ouverte d'esprit. Sa pureté enfantine lui a valu l'adoration de tout ses sujets. Son Vrai Nom est Nero Claudius Caesar Augustus Germanicus, le cinquième empereur de l'Empire Romain.", 2:"Cet homme n'est qu'un tas de muscles sans cervelle... Spartacus était un gladiateur de la Rome Antique, et le meneur des esclaves dans la guerre connue sous le nom de Guerre de Spatacus. La rébellion fut anéantie, mais son nom fut gravé dans l'histoire, symbole d'espoir pour les oppressés.", 3:"Au IVème siècle avant J-C, il était un jeune prince de Macédoine. Un jeune homme sans égal, il fut découvert par d'innombrables savants, en commençant par le philosophe Aristote, il était un génie. Un garçon simple qui amait l'Iliade du plus profond de son coeur.", 4:"Altera le Hun, un grand roi qui créa un grand empire. Le descendant et le guerrier des Hunnu, ainsi que son roi. Le grand héros du Vème siècle qui a conquis des empires de l'Asie de l'Est à la Russie jusqu'à l'Europe de l'Est et même la Gaule." , 5:"Un puissant empereur, et auto-proclamé la beautée en habit d'homme, elle est narcissique et égoïste, mais aussi joyeuse et ouverte d'esprit. Sa pureté enfantine lui a valu l'adoration de tout ses sujets. Son Vrai Nom est Nero Claudius Caesar Augustus Germanicus, le cinquième empereur de l'Empire Romain.", 6:"Cet homme n'est qu'un tas de muscles sans cervelle... Spartacus était un gladiateur de la Rome Antique, et le meneur des esclaves dans la guerre connue sous le nom de Guerre de Spatacus. La rébellion fut anéantie, mais son nom fut gravé dans l'histoire, symbole d'espoir pour les oppressés.", 7:"Au IVème siècle avant J-C, il était un jeune prince de Macédoine. Un jeune homme sans égal, il fut découvert par d'innombrables savants, en commençant par le philosophe Aristote, il était un génie. Un garçon simple qui amait l'Iliade du plus profond de son coeur.", 8:"Altera le Hun, un grand roi qui créa un grand empire. Le descendant et le guerrier des Hunnu, ainsi que son roi. Le grand héros du Vème siècle qui a conquis des empires de l'Asie de l'Est à la Russie jusqu'à l'Europe de l'Est et même la Gaule." }




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