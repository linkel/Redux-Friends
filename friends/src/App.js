import React, { Component } from 'react';
import Friends from './components/Friends';
import {connect} from 'react-redux';
import {fetchFolk} from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchFolk();
  }
  render() {
    return (
      <div className="App">
        <Friends friends={this.props.friends}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error, 
    fetchingFriends: state.fetchingFriends 
  };
};

export default connect(mapStateToProps, { fetchFolk })(App);
