import React, {Component} from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';



class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[]

        }

        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);

    }


    handleFormSubmit() {


    }

    componentDidMount() {

        fetch('http://demo6287274.mockable.io/')
            .then(response => response.json())
            .then(json => this.setState({
                data: json
                }
            ));
    }


    handleClearForm() {

    }


    handleInput(e) {
    }

    render() {

        var {data} = this.state;

        return (
            <form className="FormContainer" >
                <div>
                    <ul >
                        {JSON.stringify(data)}
                    </ul>
                </div>

                <Input type={'text'}
                       title= {'Employee ID'}
                       name= {'name'}
                       value={'name'}
                       placeholder = {'Enter 8 Digit ID'}
                       handleChange = {this.handleInput}
                />

                <Input type={'text'}
                       title= {'pin'}
                       name= {'pin'}
                       value={'pin'}
                       placeholder = {'Enter pin'}
                       handleChange = {this.handleInput}
                />

                <Button
                    action= {this.handleFormSubmit}
                    type={'primary'}
                    title={'Submit'}
                    style={buttonStyle}
                    />


            </form>


        )
    }


}


const buttonStyle = {
    margin : '10px 10px 10px 10px'
}

export default FormContainer;

