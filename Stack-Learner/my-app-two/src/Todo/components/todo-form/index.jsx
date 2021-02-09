import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

class CreateTodoForm extends Component{
    state ={
        text:'',
        description:'',
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value;
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createToDo(this.state);
        e.target.reset();
        this.setState({
            text:'',
            description:'',
        })
    }
    render(){
        return(
            <Form onSubmit = {this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        placeholder = 'Enter some code'
                        name = 'text'
                        value={this.state.text}
                        onChange = {this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Enter Description</Label>
                    <Input
                        type = 'textarea'
                        placeholder = 'describe your task'
                        name = 'description'
                        value={this.state.description}
                        onChange = {this.handleChange}
                    />
                </FormGroup>
                <Button type = 'submit'>Create Task</Button>
            </Form>
        );
    }
}

CreateTodoForm.propTypes = {
    createToDo: PropTypes.func.isRequired
}

export default CreateTodoForm;