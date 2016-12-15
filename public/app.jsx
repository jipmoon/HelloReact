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

  onButtonClick: function(e) {
    // prevent the form from submitting and causing a form refresh
    e.preventDefault();

    // Fetch the name itself
    var nameRef = this.refs.name;
    var name = nameRef.value;
    // Empty the placeholder in the form
    nameRef.value = '';

    // Do not update the form if the placeholder is empty
    if(typeof name == 'string' && name.length > 0) {
      // When the user submits the form then
      // set the state and update the name
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    // this.props.name to fetch the value
    var name = this.state.name;
    var message = this.props.message;
    // Display to the screen
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

      <form onSubmit={this.onButtonClick}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
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
