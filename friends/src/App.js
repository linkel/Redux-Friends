import React, { Component } from 'react';
import Friends from './components/Friends';
import {connect} from 'react-redux';
import {fetchFolk} from './actions';
import './App.css';
import MakeFriend from './components/MakeFriend';
import UpdateFriend from './components/UpdateFriend';

class App extends Component {
  componentDidMount() {
    this.props.fetchFolk();
  }
  render() {
    return (
      <div className="App">
        <h1>hi welcome</h1>
        <h2>tell me what you'd like me to do with your friends</h2>
        <h3>friends</h3>
        <Friends friends={this.props.friends}/>
        <div className="form-wrapper">
          <MakeFriend/>
          <UpdateFriend/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error, 
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
  };
};

export default connect(mapStateToProps, { fetchFolk })(App);
