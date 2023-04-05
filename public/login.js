const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://alexharmon0427:startup@userinfo.ex9swz8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);
const userCollection = client.db('UserInfo').collection('user');
const winrateCollection = client.db('UserInfo').collection('winrate');

function getUser(email) {
  return userCollection.findOne({ email: email });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    winrate: 0,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

/*
function updateWinrate(winrate) {
  winrateCollection.insertOne(winrate);
}

function getWinRate(user) {
  const query = {};
  const options = {};
  const cursor = userCollection.find(user).winrate;
  return cursor;
}
*/

async function loginUser() {
  const userName = document.querySelector('#Username')?.value;
  const password = document.querySelector('#Password')?.value;

  const user = await getUser(userName);

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

  const user = await createUser(email, password);

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
