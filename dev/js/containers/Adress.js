import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fillAdressForm} from '../actions/index'
import DataBlock  from '../components/DataBlock';
import { Link } from 'react-router';

class Adress extends React.Component {
    constructor(props) {
        super(props);
        // can not find `this` if not bind
        this.handleGoClick = this.handleGoClick.bind(this)
    }
    _submit (values) {
        this.props.fillAdressForm(values);
    };
    getInputValue() {
        {console.log(this)}
        return {city: this.refs.cityinput.value, adress: this.refs.adressinput.value, zip: this.refs.zipinput.value, page: "creditCard"}
    }
    handleGoClick(e){
       // e.preventDefault();
        const values = (this.getInputValue());
        if(!values.city || !values.adress || !values.zip){
            e.preventDefault();
        }
        this._submit(values);
    }

    render() {

        return (

            <div  className="main">
                <div className="breadcrumb flat">
                    <Link className="active" to="/">Home</Link>
                    <Link className="active" to="/user_data">{!this.props.formValues.name?"Name":this.props.formValues.name +" "+ this.props.formValues.lastName }</Link>
                    <Link className="" to="/adress">{!this.props.formValues.city?"Adress":this.props.formValues.city}</Link>
                </div>
                <div className="contentTitle">
                    <h2>Adress information</h2>
                </div>
                <div className="content">

                    <form>
                        <div className="row flex-row">
                            <div className="flex-half-row inline">
                                <input type={"text"}  maxLength="32" size="32" ref={"cityinput"} placeholder={"City"} />
                            </div>
                            <div className="flex-half-row inline">
                                <input  type={"text"} maxLength="32" size="32" ref={"adressinput"} placeholder={"Adress"}/>
                            </div>
                            <div className="inline">
                                <input  type={"text"} maxLength="7" size="7" ref={"zipinput"} placeholder={"ZIP"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="submitButton">
                                <Link to="/credit_card_details">
                                    <input type="submit" value="Send" onClick={this.handleGoClick}/>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="infoBlock">
                    <DataBlock _errorState={this.props.formValues.city} title={"Verify data you entered"} myClass="infoBlockHeader" allowErrors={false} />
                    <DataBlock _errorState={this.props.formValues.city} title={"City"} data={this.props.formValues.city} />
                    <DataBlock _errorState={this.props.formValues.adress} title={"Adress"} data={this.props.formValues.adress} />
                    <DataBlock _errorState={this.props.formValues.zip} title={"ZIP Code"} data={this.props.formValues.zip}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("statestatestate", state);
    return {
        formValues: state.formReducer
    };
}
function mapDispatchToProps(dispatch){
    //return {selectUser:(...args) => dispatch(selectUser(...args))}
    return bindActionCreators({fillAdressForm}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Adress);
