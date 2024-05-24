console.log('connecté !');
const listElem = document.querySelectorAll('.team');
const listID = [ 'joanne', 'manuel', 'gaston', 'tracy'];
let i = 0;
function addID (element,classe){
    element.id= classe;    
};
function removeID(element){    
    if(element){
        element.id = '';
    };
};
function changeId(element,classe){
    if(element.id !== ''){
        element.id = '';
    }else{
        element.id = classe;
    }         
};
while (i < listID.length) {    
    let personnes = listElem[i];
    let ids = listID[i];    

    // APPEL DES FONCTIONS 
    personnes.addEventListener('mouseover',function(){
        changeId(personnes,ids)
    });
    personnes.addEventListener('mouseout',function(){
        changeId(personnes,ids)} 
    )
    // INCREMENTATION
    i++
};

//boucle tant que :

// while (i < listClass.length) {
//     let personnes = listDiv[i];
//     let classBackGround = listClass[i];
    
//     function hovering (element, classe){
//     element.classList.toggle(classe);    
//     }

//     personnes.addEventListener('mouseover',function(){
//     hovering(personnes,classBackGround)
//     });
//     personnes.addEventListener('mouseout',function(){
//     hovering(personnes,classBackGround)} 
//     )
//     i++
// };





