const myImg = document.querySelector('img');
myImg.onclick = function() {
  let mySrc = myImg.getAttribute('src');

  if (mySrc === 'images/b057f3510256ca3481fee6ef3c988ae8.png') {
    myImg.setAttribute('src', 'images/Node-js-The-rising-star-in-web-application-development.png');
  } else {
    myImg.setAttribute('src', 'images/b057f3510256ca3481fee6ef3c988ae8.png');
  }
}

let myButton = document.querySelector('button');
let myH1 = document.querySelector('h1');

function setUser() {
  let user = prompt('Hey, who are you, visitor?');

  if (!user || user === null) {
    setUser();
  } else {
    localStorage.setItem('user', user);
    myH1.textContent = 'Welcome, ' + user + ', to web development!';
  }
}

if (!localStorage.getItem('user')) {
  setUser();
} else {
  let user = localStorage.getItem('user');
  myH1.textContent = 'Welcome, ' + user + ', to web development!';
}

myButton.onclick = function() {
  setUser();
}