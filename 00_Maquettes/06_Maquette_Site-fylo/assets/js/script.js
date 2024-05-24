let form = document.querySelector('#form1');
let email1 = document.querySelector('#input1');
let email2 = document.querySelector('#input2');
let error = document.querySelector('#small');
let msg1 ='';
let msg2 ='';

let form2 = document.querySelector('#form2');
console.log(form2);

form.addEventListener('submit', (event)=>{
    event.preventDefault(); {      
    } 
    formVerif(email1, msg1);
    }
);

form2.addEventListener('submit', (event) =>{
  event.preventDefault();{

  }
  formVerif(email2, msg2);
})


function formVerif(email, msg){
    let emailValue = email.value.trim();     
    
    if (emailValue == "") {
        msg = 'Veuillez renseignez votre mail'
        setError(email, msg);
      }
      else if (!emailValue.match((/^[a-z]+\.[a-z]+@[a-z]+\.[a-z]+$/))) {
        msg = 'votre email n\'est pas valide ';
        /* La fonction `setError` est utilisée pour afficher un message d'erreur à côté d'un champ de saisie
        de formulaire et indiquer visuellement qu'il y a une erreur dans la saisie. Voici ce que fait la
        fonction `setError` dans le code fourni : */
        setError(email, msg)
      }
      else {
        setSucces(email);
      }   
};  


function setSucces(element) {
    let formcontrol = element.parentElement;
    formcontrol.classList.add('succes');
  
  };
  
  function setError(element, infos) {
    let formcontrol = element.parentElement; // je stock le parent de l'élément qui contient l'erreur. (La div avec la classe form-control)
    let small = formcontrol.querySelector('small');
    small.innerText = infos;
    small.classList.remove('hide');
    small.style.color = 'red';
    small.style.fontWeight ='bold';
    
    
    
    
    
  };
  
      
  
  
  
  