const room = document.getElementById('root');
let parentInp = document.createElement('input');
let firstButton = document.createElement('button');
let secondButton = document.createElement('button');
let textMessage = document.createElement('p');
let randomBgButton = document.createElement('button')
let lastButton = document.createElement('button')
parentInp.classList.add('texts');
firstButton.innerText = 'Letters Count';
firstButton.classList.add('letts');
secondButton.classList.add('words');
lastButton.classList.add('sentences')
secondButton.innerText = 'Words Count';
lastButton.innerText = 'Sentences Count'
randomBgButton.innerText = 'Generate Background';
randomBgButton.classList.add('bgButton')
document.body.append(room)
room.append(parentInp, firstButton, secondButton, lastButton, randomBgButton, textMessage)
firstButton.onclick = function () {
    let val = parentInp.value.replace(/[^a-zA-Z]/g, "");
     textMessage.innerText = 'The texts letters count is' + ' ' + val.length
};
secondButton.onclick = function () {
    let inp = parentInp.value.trim()
    let word = inp.split(/\s+/).filter(el => el !== "");

    textMessage.innerText = 'In entered text words counts are' + ' ' + word.length;
};
lastButton.onclick = function () {
    let sent = parentInp.value.trim()
    let sentence = sent.split(/[.!?]+/).filter(elem => elem !== "");
     textMessage.innerText = 'The sentence count are' + ' ' + sentence.length
}
randomBgButton.onclick = function () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    
};
