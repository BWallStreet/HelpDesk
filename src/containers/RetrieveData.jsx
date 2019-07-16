import React, {Component} from 'react';
import Forms from './containers/Forms';



import './App.css';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};


class RetrieveData extends Component {

    constructor() {
        super();
        this.state = {
            isLoaded: false,
            employee:[]
        }
    }

    componentDidMount() {

        fetch('http://demo6287274.mockable.io/')
            .then(result => {
                return result.json();


            }).then(data => {
            let employee = data.result.map((emp) => {
                return (
                    <div key={emp.result}>
                    </div>
                )
            })
            this.setState({employee: employee});
            console.log("state", this.state.employee);
        })

    }

    compareValues() {


    }


    render() {


        return (
            <div className="col-md-6">

            </div>


        );


    }

}


export default RetrieveData;