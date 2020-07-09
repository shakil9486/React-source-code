import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age:28 },
      { name: 'Manu', age:29 },
      { name: 'Stephanie', age:26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //Don't do this: this.state.persons[0].name = 'Maximilian'; 
    this.setState( {
      persons:
      [
        { name: newName, age:28 },
        { name: 'Manu', age:29 },
        { name: 'Stephanie', age:27 }
    ] 
  } )
  }
  nameChangedHandler = (event) => {
    this.setState ( {
      persons:[
        { name: 'Max', age:28 },
        { name: event.target.value, age:29 },
        { name: 'Stephanie', age:26 }
    ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1x solid blue',
      padding:'8px',
      cursor:'Pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, I'm React app.</h1>
        <p>This is really Working.</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {
            this.state.showPersons === true ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Maxi!')}
                changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>
            </div> : null
          }
        
      </div>
    );
  }
}

export default App;
