import './favourites.css';

import React, { useState } from 'react';
//react bootstrap imports
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//icons imports
import {AiFillDelete} from 'react-icons/ai';


function Favourites(props) {

  //declate state 
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log(props.fav)

  return (
    <>
      <Button id= "button3" variant="primary" onClick={handleShow}>
      View Favourites
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Favourites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* map through the items inthe favourite state snd create a paragraph for each */}
        {props.fav.map((favourite, i ) => (
            <p key={i}>
            {"Artist- " + favourite.i.artistName + ","} {"Track Name- " + favourite.i.trackName}  {"Media Type- " + favourite.i.kind} 
              <button id = "button4" 
              data-current= {i}
              //deleting an item from the favourites
              onClick={(e)=> {
                if (props.favObject.indexOf(favourite) !== -1) {
                  props.favObject.splice(i, 1)
                }
                setUpdate(add => !add);
                console.log(props.favObject)
              }
            }
              >
            <AiFillDelete/>
            </button>
          </p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Favourites;