import React,{ Component} from 'react';
//import React,{ Component, Fragment} from 'react';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            //<React.Fragment>either use<Fragment>
            <Aux>
                <p onClick={this.props.click}>
                I'm a {this.props.name} and I am {this.props.age} years old !
                </p>
                <p key="i2" >{this.props.children}
                </p>
                <input key="i3" type="text" onChange={this.props.changed} 
                value={this.props.name}/>
            </Aux>
            //</React.Fragment> either use<Fragment>
        );
    }
}

const person = ( props ) => {
    
    
};

export default withClass(Person, classes.Person);
