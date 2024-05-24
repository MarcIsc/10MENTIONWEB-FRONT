/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..
// OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction 
    Les Évènement MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : la souris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*
    
    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche du clavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre 
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>, <select> et <textearea>
        submit   : à l'envoi du formulaire 
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------

    Pour attacher un évènementà un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Etape 1 -> selectionner les elements
          Etape 2 -> Créer les fonctions qui seront executé par l'evenement
          Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
*/






console.log(globalThis);
// div #rouge 
let divRouge = document.querySelector('#rouge'); // Je sélectionne ma div par son ID ensuite je lui ajoute un ecouteur d'évènement.
divRouge.addEventListener('click',fDivRouge);
// l'écouteur d'évènement se décompose en deux argument
// -> 1 l'action ici de click
// -> 2 le nmo de la fonction ici fDivRouge

function fDivRouge(){
    
    style.backgroundColor = 'gold';
    style.borderRadius = '50%';
    innerText = 'GOOD';

}
// le paragraphe P
function fP1(){
    alert('le paragraphe est cliqué')
}

// #Orange

let divOrange = document.querySelector('#orange');
divOrange.addEventListener('dblclick',function(){
    divOrange.style.backgroundColor = 'gold';
    divOrange.style.borderRadius = '50%';
    divOrange.innerText = 'GOOD';
});

// Le h2 avec ondblclick : 
function dbl(){
    alert('Suite a un double clique !! ');
};

// div #bleu
divBleu = document.querySelector('#bleu');
divBleu.addEventListener('mouseover',function(){ 

    divBleu.style.backgroundColor = 'gold';
    divBleu.style.borderRadius = '50%';
    divBleu.innerText = 'GOOD';
});


// div #primary
divPrimary = document.querySelector('#primary');
divPrimary.addEventListener('mouseout',function(){ 

    divPrimary.style.backgroundColor = 'gold';
    divPrimary.style.borderRadius = '50%';
    divPrimary.innerText = 'GOOD';
});

// div #Succes
divChangeCouleur = document.querySelector('#succes');
divChangeCouleur.addEventListener('click', ()=>{
    if(divChangeCouleur.classList.contains('vert')){// Je vérifie si la div contient bien la classe 'vert' dans la liste de classes.
        divChangeCouleur.classList.remove('vert')
        divChangeCouleur.classList.add('gold')
        divChangeCouleur.innerText = 'GOOD';
        
    }else{
        divChangeCouleur.classList.remove('gold')
        divChangeCouleur.classList.add('vert')
        divChangeCouleur.innerText = '#Succes';
    }
})

imgChat = document.querySelector('img')
imgChat.style.width = '300px';

let lesP = document.querySelectorAll('main section:last-child p')
console.log(lesP);
let i = 0
while (i < lesP.length){
    lesP[i].style.fontWeight = 'bolder'
    lesP[i].style.color = 'purple'
    lesP[i].style.textDecoration = 'underline'
    i++
} ;

lesP[0].addEventListener('click',()=>{
    imgChat.classList.add('hide')
});
lesP[1].addEventListener('click',()=>{
    imgChat.classList.remove('hide')
});
lesP[2].addEventListener('click',()=>{
    imgChat.classList.toggle('hide')
});

let div = document.querySelectorAll('.carre')
console.log(div);

// for (let d in div) {
//     if (div == ) {
//         d.style;
        
//     }
// }

