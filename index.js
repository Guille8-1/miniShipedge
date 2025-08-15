const express = require('express');
const path = require('path');
const app = express()
const port = 3001;

app.use(express.static('public'));

app.get('/', (res) => {
  res.sendFile(path.join(__dirname, 'public', 'toggle.js'))
  res.sendFile(path.join(__dirname, 'public', 'style.css'))
})

app.listen(port, () => {
  console.log(`Webflow scripts on port ${port}`)
})
