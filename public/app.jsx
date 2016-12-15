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
  onButtonClick: function(e) {
    // prevent the form from submitting and causing a form refresh
    e.preventDefault();

    var name = this.refs.name.value;

    alert(name);
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
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
