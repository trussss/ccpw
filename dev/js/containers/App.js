import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
require('../../scss/style.scss');

// const App = () => (
class App extends React.Component {

    render() {
        console.log("APP PROPS: " , this.props.formValues);
        return (

            <div className="top-level">
                <Header />

                {this.props.children}
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        formValues: state.formReducer
    };
}
export default connect(mapStateToProps)(App);
