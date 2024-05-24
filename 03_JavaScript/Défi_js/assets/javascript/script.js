
console.log('connecté!');
// je selectionne et je stock
const btnBlue = document.getElementById('btn-blue');
const btnRed = document.getElementById('btn-red');
let infobulle = document.querySelector('#lepara');

 //infobulle, sur le coeur invitant a cliquez pour voir le message caché
    // je selectionne et stock 
    let infobullecoeur = document.querySelector('#infoBulleCoeur');
    console.log(infobullecoeur);

    btnRed.addEventListener('mouseover', ()=>{
       
    })


// je cree ma fonction qui permet de faire ce déplacer au survol, mon element:
function change(element) {
    // Générer des nombres aléatoires pour les coordonnées x et y
    let x = Math.random() * 140;
    let y = Math.random() * 201 ;        
    // Appliquer les valeurs de position en tant que styles
    element.style.top = x + 'px'; // Ajouter 'px' pour spécifier l'unité de pixel
    element.style.left = y + 'px';
    
    console.log(y);
}   
// Sélectionner le bouton


// Ajouter un écouteur d'événements pour le survol
btnBlue.addEventListener('mouseover', function() {
    // Fonction pour changer la position de l'élément
    change(this)
    
}


);
btnRed.addEventListener('mouseover', ()=>{
    infobulle.classList.remove('hide')
    infobulle.innerHTML = 'allez Paris !!';
    boiteJeu.style.paddin = ' 10px 0 0 0'
    infobullecoeur.classList.remove('hide');
    infobullecoeur.innerHTML = 'Cliquez <br> sur le  <i id="coeur" class="fa-solid fa-heart fa-beat-fade fa-2xl d-flex justify-content-center  align-items-center" style="color: #63E6BE;"></i> pour affichez le message caché'
    infobullecoeur.parentElement.style.border = '2px solid red';
    infobullecoeur.parentElement.style.borderRadius = '10px';
});
btnRed.addEventListener('mouseout', ()=>{
    infobulle.classList.add('hide');
    infobullecoeur.classList.add('hide');
    infobullecoeur.parentElement.style.border = 'none';
    boiteJeu.style.paddingTop = 0

})
btnRed.addEventListener('click', function(){
    
    infobulle.innerHTML = 'Et pour Sahar allez allez !! <i class="fa-solid fa-gifts fa-lg" style="color: #63E6BE;"></i>';
    infobullecoeur.classList.remove('hide')
    console.log(infobulle);
    

    alert('une alerte lorsque je clique sur le petit coeur !! ')
})






// btnBlue.addEventListener('mouseover',function(){
    
//     change(btnBlue,pos) 
// })
// i++
// btnBlue.addEventListener('mouseout',function(){
    
//     change(btnBlue,pos) 
// })

// i++

// console.log(btnBlue);



// // je soumet le cercle bleu a une action
// //btnBlue.addEventListener('mouseover',function(){

// //});
// // je selectionne et je stock
// const btnRed = document.getElementById('btn-red');
//  compteur = 0;
// console.log(compteur,'compteur au demarage');

// // je soumet le cercle rouge à une action
// btnRed.addEventListener('click',function(){
//  change(btnRed,"btn-js2")
// });


