console.log('connecter !');
let loader = document.querySelector('#loader');
window.addEventListener('load', () => {
    loader.classList.add('hide-loader');
})

let btnNo = document.querySelector('#btnNo');
console.log(btnNo);

btnNo.addEventListener('mouseover',()=>{
    let x = Math.floor(Math.random() * 80);
    let y = Math.floor(Math.random() * 80);    
    console.log(x);
    console.log(y);
    btnNo.style.left = x +'rem';
    btnNo.style.top = y +'rem';
});