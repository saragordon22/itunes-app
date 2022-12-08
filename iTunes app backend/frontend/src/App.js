import React, { useState}from 'react';
import './index.css';
//bootstrap import
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//favoutites icon import
import {AiFillHeart} from 'react-icons/ai';

//import components 
import Favourites from './Components/Favourites';

function App  (props) {
    //declare state for the differemt types of media searches and for the search term
    const [music, setMusic] = useState ([]);
    const [video, setVideo] = useState ([]);
    const [podcast, setPodcast] = useState ([]);
    const [all, setAll] = useState ([]);
    const [searchTerm, setSearchTerm] = useState ('');
    const [favourite, setFavourite] = useState ([]);
    //const [error, setError] = useState('');

    //function that is called when button is submitted 
    const searchMusic = (event) => {
      event.preventDefault()
      //fetch data from backend 
      fetch(`/search/${searchTerm}`)
      .then(response => response.json())
      .then((response) => {
        //store the data in state 
        setMusic(response.results)
      
      //fetch requests for different media types
      fetch(`/searchVideo/${searchTerm}`)
      .then(response => response.json())
      .then((response) => {
        //store the data in state 
        setVideo(response.results)
      })

      fetch(`/searchPodcast/${searchTerm}`)
      .then(response => response.json())
      .then((response) => {
        //store the data in state 
        setPodcast(response.results)
      })

      fetch(`/searchAll/${searchTerm}`)
      .then(response => response.json())
      .then((response) => {
        //store the data in state 
        setAll(response.results)
      })

        //search terms that user inputs in the form which is saved when theres a change to the form
        setSearchTerm ('')
    })
  }

  function handleDelete(e) {
    console.log(e)

  }

    return (
        <div className="app" id="app">
          <h1>iTunes App</h1>
            <div className = "search">
              {/* when form is submitted function is called */}
            <Form id="formName" onSubmit={searchMusic}>
              <Form.Group>
                <Form.Label id= "subheading" >Enter the search term and select the media type:</Form.Label>
                {/* when the form changes the value in the form is saved to state */}
                  <Form.Control 
                  type="text" 
                  placeholder="Enter search term" 
                  id="search" value = {searchTerm} 
                  //set the user imput to the search term state
                  onChange={event => setSearchTerm (event.target.value)}/>
               </Form.Group>
                  <Button 
                   id="button" 
                   class="button small-btn" 
                   variant="primary" 
                   type="submit">
                    Search
                  </Button>
             </Form>
             <div>
              {/* render favourites component and pass props to it */}
             <Favourites 
              fav = {favourite}
              handleDl = {handleDelete}
              favObject = {favourite} />
             </div>
          <div>
            {/* bootstrap tabs so that user can select between media types */}
          <Tabs
           defaultActiveKey="profile"
           id="resultsTab"
           className="mb-3"
            >
            {/* map through the fetch results and display a paragrah for each result item */}
           <Tab eventKey="music" title="Music">
           {music.map((music, i ) => (
            <p key={i}>
              {/* on clicking the favourite button, the item will be added to the favourite state, the spread syntax 
              will add the existing items aswell as new item instead of replacing */}
            {"Artist- " + music.artistName + ","} {"Track Name- " + music.trackName}  
              <button 
               id="button2" 
               variant="primary" 
               type="submit" 
               onClick={()=> {
                setFavourite([...favourite, {i:music}])
              }}>
            <AiFillHeart/>
            </button>
           </p>
          ))}
          </Tab>
          {/* additional tabs for other media types */}
          <Tab eventKey="video" title="Video">
          {video.map((video, i ) => (
            <p key={i}>
            {"Artist- " + video.artistName + ","} {"Track Name- " + video.trackName}  
              <button 
               id="button2" 
               variant="primary" 
               type="submit" 
               onClick={()=> {
                setFavourite([...favourite, {i:video}])
                console.log(favourite)
              }}>
            <AiFillHeart/>
            </button>
          </p>
          ))}
          </Tab>
          <Tab eventKey="podcast" title="Podcast">
          {podcast.map((podcast, i ) => (
            <p key={i}>
            {"Author- " + podcast.artistName + ","} {"Name- " + podcast.trackName}  
              <button 
               id="button2" 
               variant="primary" 
               type="submit" 
               onClick={()=> {
                setFavourite([...favourite, {i:podcast}])
                console.log(favourite)
              }}>
            <AiFillHeart/>
            </button>
          </p>
          ))}
      </Tab>
      <Tab eventKey="all" title="All">
          {all.map((all, i ) => (
            <p key={i}>
            {"Artist- " + all.artistName + ","} {"Track Name- " + all.trackName}  {"Media Type- " + all.kind} 
              <button 
                id="button2" 
                variant="primary" 
                type="submit" 
                onClick={()=> {
                setFavourite([...favourite, {i:all}])
                console.log(favourite)
              }}>
            <AiFillHeart/>
            </button>
          </p>
          ))}
      </Tab>
    </Tabs>
        </div>
      </div>
    </div>
)
}
    
export default App;