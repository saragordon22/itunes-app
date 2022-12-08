
const express = require('express');
const app = express();
//import isomoporhic fetch
const fetch = require('isomorphic-fetch');
//import body parsing middleware
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors())
//import helmet for security 
const helmet = require('helmet');
app.use(helmet());
//declare the port
const PORT = 8000
app.listen(PORT, () => console.log('Listening on PORT: ', PORT));


//fetch request for music media type
app.get('/search/:searchTerm', async (req, res) => {
    //the search term that the user inputs
    const searchTerm = req.params.searchTerm;
    //fetch the info from itunes API
    const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&limit=100&media=music`)
    //error handling
    if(!response.ok){
        throw new Error(`HTTP Error status: ${response.status}`)
    }
    //store the information and convert to json
    const responseResult = await response.json();
    res.send( responseResult);
 }) 

 //fetch requests for other media types
 app.get('/searchVideo/:searchTerm', async (req, res) => {
    //the search term that the user inputs
    const searchTerm = req.params.searchTerm;
    //fetch the info from itunes API
    const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&limit=100&media=musicVideo`)
    //error handling
    if(!response.ok){
        throw new Error(`HTTP Error status: ${response.status}`)
    }
    //store the information and convert to json
    const responseResultVideo = await response.json();
    res.send(responseResultVideo);
 }) 

 app.get('/searchPodcast/:searchTerm', async (req, res) => {
    //the search term that the user inputs
    const searchTerm = req.params.searchTerm;
    //fetch the info from itunes API
    const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&limit=100&media=podcast`)
    //error handling
    if(!response.ok){
        throw new Error(`HTTP Error status: ${response.status}`)
    }
    //store the information and convert to json
    const responseResultPodcast = await response.json();
    res.send(responseResultPodcast);
 }) 

 app.get('/searchAll/:searchTerm', async (req, res) => {
    //the search term that the user inputs
    const searchTerm = req.params.searchTerm;
    //fetch the info from itunes API
    const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&limit=100`)
    //error handling
    if(!response.ok){
        throw new Error(`HTTP Error status: ${response.status}`)
    }
    //store the information and convert to json
    const responseResultAll = await response.json();
    res.send(responseResultAll);
 }) 

