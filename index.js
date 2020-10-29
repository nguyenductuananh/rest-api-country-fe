let selectBtn = document.getElementsByClassName('custom-select__trigger')[0];
let optionDropdown = document.getElementsByClassName('custom-options')[0];
let isDarkmode = false;
let isHidden = true;
selectBtn.addEventListener('click', showDropdown);
function showDropdown(){
    switch(isHidden){
        case true :{ 
            optionDropdown.style.display = "block";
            isHidden = false;
            break;
        }
        case false :{
            optionDropdown.style.display = "none";
            isHidden = true;
            break;
        }
    }
}

function changeMode(){
    if(!isDarkmode){
        document.getElementsByTagName('body')[0].classList.add('dark');
        document.getElementsByTagName('header')[0].classList.add('dark');
        document.getElementsByClassName('search')[0].classList.add('dark');
        document.getElementsByClassName('searchInput')[0].classList.add('dark');
        document.getElementsByClassName('region')[0].classList.add('dark');
        document.getElementsByClassName('custom-options')[0].classList.add('dark');
        for(let nation of document.getElementsByClassName('country')) nation.classList.add('dark');
        document.getElementsByClassName('arrow')[0].classList.add('dark');
        document.getElementsByClassName('dark-mode-btn')[0].classList.add('dark');
        isDarkmode = true;
    } else {
        isDarkmode = false;
        document.getElementsByTagName('body')[0].classList.remove('dark');
        document.getElementsByTagName('header')[0].classList.remove('dark');
        document.getElementsByClassName('search')[0].classList.remove('dark');
        document.getElementsByClassName('searchInput')[0].classList.remove('dark');
        document.getElementsByClassName('region')[0].classList.remove('dark');
        document.getElementsByClassName('custom-options')[0].classList.remove('dark');
        for(let nation of document.getElementsByClassName('country')) nation.classList.remove('dark');
        document.getElementsByClassName('arrow')[0].classList.remove('dark');
        document.getElementsByClassName('dark-mode-btn')[0].classList.remove('dark');
    }
}