import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import MongoJs from 'mongojs';
//import router from 'express.Router()';

//var express = require('express');
//var router = express.Router();
//var mongojs = require('mongojs');
//var db = mongojs('mongodb://localhost:27017/admin', ['User']);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
    };
    
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }
  addRecord(){
    debugger;
    window.alert('OnClick function');
  //   router.post('/new', function(req, res, next){
  //     debugger;
  //     var todo = req.body;
  //     if(!todo.title || !(todo.isDone + '')){
  //         res.status(400);
  //         res.json({
  //             "error": "Bad Data"
  //         });
  //     } else {
  //         db.todos.save(todo, function(err, todo){
  //             if(err){
  //                 res.send(err);
  //             }
  //             res.json(todo);
  //         });
  //     }
  // });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Buildpack ADDED - 1</h2>
          <h3>This is sub title </h3>
        </div>
        <p className="App-intro">
          {'This is test deploy rohit'}
          <a href="https://github.com/mars/heroku-cra-node">
            {'heroku/nodejs'}
          </a><br/>
        </p>
        <p className="App-intro">
          {this.state.fetching
            ? 'Fetching message from API'
            : this.state.message}
        </p>
        <button onClick={this.addRecord}>Add Record</button>
      </div>
    );
  }
}

export default App;
