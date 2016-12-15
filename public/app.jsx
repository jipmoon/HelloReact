/* 1. Create a component that mimics the behaviour in h1
   2. Create a variable Greeter then use one function
   3. createClass takes one argument that is an option's object
   4. Define the behaviour for our component*/
var Greeter = React.createClass();
  render: function() {
    return (
      <div>
        <h1>Hello React!</h1>
        <p>This is a form a component</p>
      </div>
    );
  }
});
ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
