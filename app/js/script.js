const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header')

btnHamburger.addEventListener('click', 
function() {

    if (header.classList.contains('open')){
    header.classList.remove('open')
    console.log("open hamburgur");
    }else{
    header.classList.add('open')
    console.log("close hamburgur");
    }
});