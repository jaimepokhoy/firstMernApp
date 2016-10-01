

// ReactDOM.render(<h1>Hello, world!</h1>,
// document.getElementById('example'));

var BugFilter = React.createClass({
  render: function() {
    return (
      <div>A way to filter would come here</div>
    );
  }
});

var BugTable = React.createClass({
  render: function() {
    return (
      <div>Table to display bugs</div>
    )
  }
});

var BugAdd = React.createClass({
  render: function() {
    return (
      <div>Form to add new bugs</div>
    );
  }
});

var BugList = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Bug Tracker</h1>
        <BugFilter />
        <hr />
        <BugTable />
        <hr />
        <BugAdd />
      </div>
    );
  }
});

ReactDOM.render(<BugList />, document.getElementById('main'));
