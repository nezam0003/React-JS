import React, {Component} from 'react';
import PropTypes from 'prop-types';
/********* Functional Porps *********/
// const Student =(props)=>{
// return (
//     <div>
//         <h1>Hello {props.name}</h1>;
//         <h1>Your Roll: {props.roll}</h1>;
//     </div>
// );
// }
// export default Student;

/**************** Class base props **************/
class Student extends Component{
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}</h1>;
                <h1>Your Roll No is: {this.props.roll}</h1>;
            </div>
        );
    }
}

/************** TypeChecking with propTypes */
Student.propTypes = {
    name: PropTypes.string,
    roll: PropTypes.number
}
export default Student;