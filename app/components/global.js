import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component{
  render(){
    return(
      <div>
        <h2>Book Finder</h2>
        <FormGroup>
          <InputGroup>
            <FormControl type = "text" placeholder = "Search for books"/>
            <InputGroup.Addon>
              <Glyphicon glyph = "search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}

export default Global;
