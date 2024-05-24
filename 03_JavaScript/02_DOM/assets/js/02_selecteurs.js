// Afin de modifier notre page HTML selon les intéractions d'un utilisateur, nous allons modifier notre DOM grâce a JavaScript.

//----------------------
    // SELECTIONNER NOS ELEMENTS
//----------------------

// Selection via TAG

let tittle = document.getElementsByTagName('h1');
console.log(tittle);

let lesP = document.getElementsByTagName('p'); // Ici on cherche, tous les paragraphes de notre page
// On récupère un Array (tableau) d'éléments. 
console.log(lesP);

// Grace a ma variable dans laquelle j'ai sélectionné tous les P, je peux viser un seul des éléments grâce à son index. Pour faire du CSS j'utilise la propriété 'style' suivi des même déclaration que j'utilise en CSS, avec du camelCase a la place de Kebab-case.
// La propriété 'style' permet d'acceder finement au style qui concerne un élément particulier.

lesP[0].style.backgroundColor = 'red';
lesP[0].style.color = 'white';
lesP[0].style.fontWeight = 'bold';

// Selection via ID

let titre = document.getElementById('Titre')

titre.style.backgroundColor = ('blue')
console.log(titre)

// Selectin via Classe
let selectClass = document.getElementsByClassName('selectClass')

console.log(selectClass);

// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

selectClass[1].style.backgroundColor = ('yellow');
console.log(selectClass[1]);
console.log(selectClass[1].innerHTML);


// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.

// Mini Exo 1 : Modifier le contenu du h2 qui a la classe .subtitle : 'Je change le titre, youhou'

let subtitle = document.getElementsByClassName('subtitle')
subtitle[0].innerHTML = '<strong> bonjours </strong>';

console.log('subtitle');

//--------------------------
    // mini exo 2
//--------------------------



// lesP[0].style.textTransform = ('uppercase')
lesP[0].innerHTML = ('Je change le Titre, youhou')

for(let i = 0; i < lesP.length; i++){
    lesP[i].style.textTransform = "uppercase";
};
console.log(lesP);

// Boucle for of : Je déclare une variable 'p' qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'apelle la variable 'p' en lui attribuant le style souhaité avec la propriété style. 
  
//    for ( let p of lesP ){
//       p.style.textTransform = "uppercase";
//    }

// console.log(lesP);

let titreH1 = document.querySelector('#Titre');
titreH1.style.backgroundColor = 'pink';

let div = document.querySelector('div div')
div.style.border = ('2px solid black')
console.log(div);

// La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètres.
// L'avantage de querySelector c'est qu'il utilise la syntaxe de sélection CSS -> #monId .maClass <balise>.

// Selection via querySelectorAll() (selectionne tous les éléments toruvés)
// Sélectionne toutes les balises en enssemble et retourne un array d'élements

let query = document.querySelectorAll('.selectClass')
//console.log(query); // On a trois paragraphe qui ont la classe .selectClass


for(let i = 0; i < query.length; i++){
    console.log(query[i].innerText);
};

let rajou = document.querySelector('.bg-success p');
rajou.innerText = 'Je suis là !! ';

// création d'un nouvelle élément à prtir de JS :

let section = document.querySelector('section');
// Pour créer un élément, nous utilisont la methode 'createElement(), puis nous l'integrons dans le noeud souhaité. 
let nouveauParaFin = document.createElement('p')

nouveauParaFin.innerHTML = "<strong>Coucou je suis ton nouveau paragraphe à la fin de la section ! </strong>"
nouveauParaFin.style.color = 'red'

section.append(nouveauParaFin); // append() -> insère du contenu à la fin de la section. // append() accepte tous les éléments (balise ou string)

let nouveauParaDebut = document.createElement('p');
nouveauParaDebut.innerHTML = "<strong> Coucou, je suis ton nouveau paragraphe au début de la section </strong>"
nouveauParaDebut.style.color = 'green'

section.prepend(nouveauParaDebut); // preend() -> insère du contenu au début de la section

// DEPLACER UN ELEMENT 
// Pour déplacé un élément, il faut trois paramètres : 
//  - Le parent qui va acceuilllir l'élément
//  - L'élément a déplacer
//  - L'élément qui vient après 

let parent = document.querySelector('main');
let jeBouge = document.querySelector('h4');
let h2 = document.querySelector('h2');

parent.insertBefore(jeBouge, h2)

// Supprimer un élément

/*
Pour supprimer un élément, il faut deux paramètres:
    - Le parent
    -L'élément à supprimer
*/

let ul = document.querySelector('ul');
let li = document.querySelector('ul :nth-child(2)');
console.log(li);
ul.removeChild(li);

//let li = document.querySelector('li')[1]


//CREER UN ATTRIBUT ET SA VALEUR
/*
setAttribute() : Pour ajouter un nouvel attribut ou changer la valeur d'un attribut existant pour un élément.
*/
let baliseA = document.querySelector('a');
console.log(baliseA);
baliseA.setAttribute("attribut", "valeurAttribut");

baliseA.setAttribute("href", "01_introduction.html");


let baliseB = document.querySelectorAll('a')[1];
console.log(baliseB);


baliseB.setAttribute("href", "01_introduction.html");

lesA = document.querySelectorAll('a')
let valeurA = lesA[3].getAttribute('href')
console.log(valeurA)

let containair = document.querySelector('h1'); // Endroit ou va etre insérer  mon nouvelle element
//let element = document.createElement('a') // creation du nouvelle element 'a'
//element.setAttribute("href", "https://developer.mozilla.org/fr/") // attribution des fonctions de l'élément
//element.setAttribute("target", "_blank")
//element.innerText = ' Cour JavaScript' // text affiché 
//element.style.color = 'white'; // decoration 
//element.style.textDecoration = 'none' // decoration 
//containair.append(element); // ajout de l'élément 

// deuxieme facon de faire :

containair.innerHTML = "<a href = 'https://developer.mozilla.org/fr/' target= '_blank' > Cours JavaScript </a>" ;
let element = document.querySelector('h1 a')
element.style.color = 'white'; // decoration 
element.style.textDecoration = 'none' // decoration 













