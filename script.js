var rooot = document.getElementById('root');
var parentInp = document.createElement('input');
var firstButton = document.createElement('button');
var secondButton = document.createElement('button');
var textMessage = document.createElement('p');
var randomBgButton = document.createElement('button')
var lastButton = document.createElement('button')
parentInp.classList.add('texts');
firstButton.innerText = 'Letters Count';
firstButton.classList.add('letts');
secondButton.classList.add('words');
lastButton.classList.add('sentences')
secondButton.innerText = 'Words Count';
lastButton.innerText = 'Sentences Count'
randomBgButton.innerText = 'Generate Background';
randomBgButton.classList.add('bgButton')
document.body.append(rooot)
rooot.append(parentInp, firstButton, secondButton, lastButton, randomBgButton, textMessage)
firstButton.onclick = function () {
    var val = parentInp.value.replace(/[^a-zA-Z]/g, "");
    return textMessage.innerText = 'The texts letters count is' + ' ' + val.length
};
secondButton.onclick = function () {
    var inp = parentInp.value.trim()
    var word = inp.split(/\s+/).filter(el => el !== "");

    return textMessage.innerText = 'In entered text words counts are' + ' ' + word.length;
};
lastButton.onclick = function () {
    var sent = parentInp.value.trim()
    var sentence = sent.split(/[.!?]+/).filter(elem => elem !== "");
    return textMessage.innerText = 'The sentence count are' + ' ' + sentence.length
}
randomBgButton.onclick = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    console.log(r, g, b);
};
