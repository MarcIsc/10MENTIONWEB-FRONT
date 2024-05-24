
// je selectionne et stock mes elements.
let form = document.getElementById('form');
let btn_submit = document.querySelector('.bouttons');
let btn_deny = document.querySelector('#btn-deny')
let regex_email = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
let input_email = document.getElementById('email');
let afficheMsg = document.getElementById('inner-msg')
let message = document.querySelector('#message');
let inputs_form = document.querySelectorAll('.inputs')



btn_submit.addEventListener('click', function(event){
  event.preventDefault();
  let msgErreur;  
  if (input_email.value !== "") {
    if (input_email.value.match(regex_email)) {
      form.submit();
    } 
    else {
      msgErreur = 'Votre email ne correspond pas aux critères';
      afficheMsg.classList.remove('hide');
      afficheMsg.innerText = msgErreur;
    
    }
  } 
  else {
    msgErreur = 'Vous devez saisir des caractères';
    console.log(msgErreur);
    afficheMsg.classList.remove('hide');
    afficheMsg.innerText = msgErreur;
  }
});
btn_deny.addEventListener('click',function(event){
  event.preventDefault();
  form.reset();
  afficheMsg.classList.add('hide');
})









