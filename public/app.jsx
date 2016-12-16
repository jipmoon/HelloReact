var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});
//Goal is to pass a function to GreeterForm
// Displays a simple form
var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.value;

    if(name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    );
  }
});
/* 1. Create a component that mimics the behaviour in h1
   2. Create a variable Greeter then use one function
   3. createClass takes one argument that is an option's object
   4. Define the behaviour for our component*/
var Greeter = React.createClass({
  // Provide default value for the name props
  // return the object of property
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'YOLO'
    };
  },
  // Sets its name state to props value, pass the annonymous function
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },

  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function() {
    // this.props.name to fetch the value
    var name = this.state.name;
    var message = this.props.message;
    // Display to the screen
    // On 'GreeterForm', when you have a parent component that's handling  an event from a child,
    //then you usually call parent handle follow by the name you chose.
    //and then you call it in the child with "on" followed by the name you chose
    return (
      <div>



        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Jip';
var myMessage = 'This is a message';
ReactDOM.render(
  // Passing the property
  <Greeter name={firstName} message = {myMessage} />,
  document.getElementById('app')
);
