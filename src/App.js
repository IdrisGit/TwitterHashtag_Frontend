import React, {Component} from 'react';
import SearchBox from './Components/SearchBox';
import FeedCardList from './Components/FeedCardList';
import LoadingScreen from './Components/LoadingScreen';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
      searchField : '',
      hashtag : '',
      tweets : [],
      isLoading : false
    }
  }

  onInputChange = (event) => {
    this.setState({searchField : event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({isLoading : true})
    this.setState({hashtag : this.state.searchField})
    fetch('https://enigmatic-ravine-24634.herokuapp.com/gettweets', {
      'method' : 'post',
      'headers' : {'Content-Type' : 'application/json'},
      'body' : JSON.stringify({
        hashtag : this.state.searchField,
      })
    })
    .then (response => response.json())
    .then (data => {
      this.setState({tweets : data})
    }).then(() => this.setState({isLoading : false}))
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <SearchBox onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
        {
          this.state.isLoading &&
          <LoadingScreen />
        } {
          !this.state.isLoading &&
          <FeedCardList tweets={this.state.tweets} />
        }
      </div>
    );
  }
}

export default App;
