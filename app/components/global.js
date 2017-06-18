import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './gallery.js';

class Global extends Component{

  constructor(props){
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

  search(){
    //console.log("search", this.state.query);
    const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${baseURL}${this.state.query}`, {method: 'GET'})
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData);
        let { items } = jsonData;
        this.setState({items});
      });
  }

  render(){
    return(
      <div className="Global">
        <h2>Book Finder</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type = "text"
              placeholder = "Search for books"
              onChange = {event => this.setState({query: event.target.value})}
              onKeyPress = {event => { if(event.key === 'Enter'){ this.search()}}}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph = "search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Gallery items = {this.state.items}/>
      </div>
    )
  }
}

export default Global;
