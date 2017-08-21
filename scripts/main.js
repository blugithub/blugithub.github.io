var myHeading = document.querySelector('h1');
/*
 * myHeading.textContent = 'Hello world!';
 */
var icecream = 'strawberry'

function testChocolate(str) {
var result = '';
  if (icecream === 'chocolate') {
    result = 'Yay, we got chocolate-icecream'
    } else {
    result = 'Oh man, but I like chocolate best.'
    }
    return result
}

// alert(testChocolate(icecream))

var meinHTML = document.querySelector('html')
meinHTML.onclick = alert('Aua, aufhörn!')

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/20150501-chillen-im-gruenen.jpg') {
      myImage.setAttribute ('src','images/IMG_4128.JPG');
    } else {
      myImage.setAttribute ('src','images/20150501-chillen-im-gruenen.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte gib Deinen Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + 's Seite ist die coolste!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = myName + 's Seite ist die coolste!';
}

myButton.onclick = function() {
  setUserName();
}
