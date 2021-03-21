const express = require('express')
const path = require('path')
const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000

// The API URL
const apiURL = "https://skysportsapi.herokuapp.com/sky/getnews/football/v1.0/";

// This function gets the news from the API
const getAPIData =  async () => {
    const response = await fetch(apiURL);
    
    const data = await response.json();

    return data;
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/news', async (req, res) => {
    const data = await getAPIData();

    res.json({'articles': data});
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
