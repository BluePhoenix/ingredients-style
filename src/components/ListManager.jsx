var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function() {
    return {items: [], newItemText: ''};
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var currentItems = this.state.items;

    currentItems.push(this.state.newItemText);

    this.setState({items: currentItems, newItemText: ''});
  },
  render: function() {
    return (
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
              <button className="btn btn-primary">Add</button>
            </form>
            <List items={this.state.items} />
          </div>
        </div>
      </div>
    );
  },
  onChange: function(e) {
    this.setState({newItemText: e.target.value});
  }
});

module.exports = ListManager;
