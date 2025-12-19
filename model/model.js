let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');
//let body = document.querySelector('body');


function openBtnModal(){
    modalContainer.style.display = 'block';
}
function closeBtnModal(){
    modalContainer.style.display = 'none';
}


closeBtn.addEventListener('click', closeBtnModal);
openBtn.addEventListener('click', openBtnModal);

function windowCloseBtn(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
}

/*
function windowCloseBtn(e){
    if (e.target === body){
        modalContainer.style.display = 'none';
    }
}*/

window.addEventListener('click', windowCloseBtn ); 