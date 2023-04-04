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

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
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

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  //updateWinrate,
  //getWinRate,
};
