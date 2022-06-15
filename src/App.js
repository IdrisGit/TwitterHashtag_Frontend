import React, {Component} from 'react';
import SearchBox from './Components/SearchBox';
import FeedCardList from './Components/FeedCardList';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      searchField : '',
      hashtag : '',
      tweets : []
    }
  }

  onInputChange = (event) => {
    this.setState({searchField : event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({hashtag : this.state.searchField})
    fetch('http://localhost:4000/gettweets', {
      'method' : 'post',
      'headers' : {'Content-Type' : 'application/json'},
      'body' : JSON.stringify({
        hashtag : this.state.searchField,
      })
    })
    .then (response => response.json())
    .then (data => {
      this.setState({tweets : data})
    }).catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <SearchBox onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
        <FeedCardList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
