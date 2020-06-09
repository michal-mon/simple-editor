import '../scss/main.scss';

/* place your code below */

const saveButton = document.querySelector('.editor__button--save');


saveButton.addEventListener('click', () =>{
    const saveText = document.getElementById('text-editor').value;
    localStorage.setItem('content', saveText);

});

const loadButton = document.querySelector('.editor__button--load');

loadButton.addEventListener('click', ()=>{

    const loadText = localStorage.getItem('content');
    document.getElementById('text-editor').value = loadText;

});