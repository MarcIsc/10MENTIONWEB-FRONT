

    //  keyboard  //

    let mario = document.getElementById('mario');
    document.addEventListener('keydown', clavier);
    

  function clavier(event){
    /* L'objet event en JavaScript est un objet qui représente un événement déclenché dans le navigateur
    Lorsqu'une action se produit sur une page web (comme un clic de souris, un appui sur une touche du clavier, etc.), un objet event est créé pour encapsuler toutes les informations liées à cet événement. 
    Cet objet event contient diverses propriétés et méthodes qui fournissent des détails sur l'événement qui s'est produit. Voici quelques-unes des propriétés les plus couramment utilisées :
    
    - type: Indique le type d'événement déclenché (par exemple, "click", "keydown", "mousemove", etc.).
    - target: Référence à l'élément DOM sur lequel l'événement s'est produit.
    - keyCode (ou key): Code de la touche du clavier qui a été pressée lors d'un événement keydown.
    - clientX et clientY: Coordonnées horizontales et verticales du pointeur de la souris par rapport à la fenêtre du navigateur.
    - pageX et pageY: Coordonnées horizontales et verticales du pointeur de la souris par rapport à la page web. 
    */ 
//     if(event.key == "ArrowUp"){ // haut
//       mario.style.top = mario.offsetTop - 10 + "px";         
//     }
//     else if(event.key == "ArrowLeft"){ // gauche
//       mario.style.left = mario.offsetLeft - 10 + "px";
//     }
//     else if(event.key == "ArrowRight"){ //droite
//       mario.style.left =  mario.offsetLeft + 10 + "px";
//     }
//     else if (event.key == "ArrowDown"){ // bas
//       mario.style.top = mario.offsetTop + 10 + "px";
//     }
//     else if(event.key == "z"){ // haut + gauche
//       mario.style.top = mario.offsetTop - 10 + "px";
//       mario.style.left = mario.offsetLeft - 10 + "px";
//       mario.style.rotate = "40deg";
//       mario.style.transform = "scaleX(-1)";
//     }
//     else if(event.key == "s"){
//       mario.style.top = mario.offsetTop - 10 + "px";
//       mario.style.left = mario.offsetLeft + 10 + "px";
//       mario.style.rotate = "-40deg";
//       mario.style.transform = "scaleX(1)";
//     }
//     else if(event.key == "q"){
//       mario.style.top = mario.offsetTop + 10 + "px";
//       mario.style.left = mario.offsetLeft - 10 + "px";
//       mario.style.rotate = "-40deg";
//       mario.style.transform = "scaleX(-1)";
//     }
//     else if(event.key == "d"){
//       mario.style.top = mario.offsetTop + 10 + "px";
//       mario.style.left = mario.offsetLeft + 10 + "px";
//       mario.style.rotate = "40deg";
//       mario.style.transform = "scaleX(1)";
//     }   
   
// }


console.log
switch(event.code){
  case "ArrowUp" : 
    mario.style.top = mario.offsetTop - 10 + "px";
  breack;

  case "ArrowLeft" :
    mario.style.left = mario.offsetLeft - 10 + "px"; 
  breack;

  case "ArrowDown" :
    mario.style.top = mario.offsetTop + 10 + "px";
  breack;

  case "ArrowRigth" : 
    mario.style.left = mario.offsetLeft + 10 + "px";
  break;
  
  case "w" :
    mario.style.top = mario.offsetTop - 10 + "px";
    mario.style.left = mario.offsetLeft - 10 + "px";

}}
  
  





    
    


 