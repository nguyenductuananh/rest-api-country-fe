let selectBtn = document.getElementsByClassName('custom-select__trigger')[0];
let optionDropdown = document.getElementsByClassName('custom-options')[0];

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

