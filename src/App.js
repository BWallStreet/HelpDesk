import React, {Component} from 'react';
import Forms from './containers/Forms';



import './App.css';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};


class App extends Component {



    render() {


        return (
            <div className="col-md-6">
                <h3> HR Forms </h3>


                <Forms />
            </div>


        );


        }

    }


export default App;