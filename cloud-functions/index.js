const express = require('express')
const admin = require('firebase-admin')
const natural = require('natural')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-url.firebaseio.com"
});
let db = admin.firestore();

const app = express()
const port = 5000
