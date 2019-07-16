import React, {Component} from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';



class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enteredId:'',
            enteredPin:'',
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangePin = this.onChangePin.bind(this);
        this.showValue = this.showValue.bind(this);

    }


    handleFormSubmit() {


    }



    onChangeId(event) {
        this.setState({
            enteredId: event.target.value
        })
    }

    onChangePin(event) {
        this.setState({
            enteredPin: event.target.value
        })
    }

    showValue() {
        alert(this.state.enteredId + ' ' + this.state.enteredPin);
    }


    handleClearForm() {

    }


    handleInput() {


    }



    render() {


        return (
            <form className="FormContainer" >

                <label>
                    Employee ID:
                <input
                    placeholder='Enter Employee ID' onChange={this.onChangeId.bind(this)}/>
                </label>

                <label>
                    Employee Pin:
                    <input
                        placeholder='Enter 8 digit PIN' onChange={this.onChangePin.bind(this)}/>
                </label>
                <input type="submit" value="Submit" onClick={this.showValue.bind(this)}/>


            </form>


        );
    }


}


const buttonStyle = {
    margin : '10px 10px 10px 10px'
}

export default FormContainer;

