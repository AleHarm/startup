const DB = require('./database.mjs');

async function loginUser() {
  const userName = document.querySelector('#Username')?.value;
  const password = document.querySelector('#Password')?.value;

  const user = await DB.getUser(userName);

  if(user){
    if(await bcrypt.compare(password, user.password)){

      console.log("Found the user!");
    }
  }

  //play();
}

async function createUser() {

  const email = document.querySelector('#Username')?.value;
  const password = document.querySelector('#Password')?.value;

  const user = await DB.createUser(email, password);

  console.log("Made a user!");
  //play();
}
/*
async function loginOrCreate(endpoint) {

  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    localStorage.setItem('Player', userName);
    window.location.href = 'Dots-And-Dashes_PLAY.html';
  } else {
    console.log("couldn't log in, you need to create an account");
  }
}
*/

function play() {
  window.location.href = 'Dots-And-Dashes-PLAY.html';
}

function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(email) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}
