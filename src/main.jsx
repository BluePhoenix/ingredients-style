// Main entry point for the application
var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="To Do List" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Wish List" headingColor="#9d2394" />, document.getElementById('wishlist'));
