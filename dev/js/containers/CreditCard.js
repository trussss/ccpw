import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fillCreditcardForm} from '../actions/index'
import DataBlock  from '../components/DataBlock';
import { Link } from 'react-router';

class CreditCard extends React.Component {
    constructor(props) {
        super(props);
        // can not find `this` if not bind
        this.handleGoClick = this.handleGoClick.bind(this)
    }
    _submit (values) {
        this.props.fillCreditcardForm(values);
    };
    getInputValue() {
        {console.log(this)}
        return {cardNumber: this.refs.numberinput.value, expDate: this.refs.expDateinput.value, cvv: this.refs.cvvinput.value, page: "creditcard"}
    }
    handleGoClick(e){
        // e.preventDefault();
        const values = (this.getInputValue());
        this._submit(values);
    }

    render() {

        return (

            <div  className="main">
                <div className="breadcrumb flat">
                    <Link className="active" to="/">Home</Link>
                    <Link className="active" to="/user_data">{!this.props.formValues.name?"Name":this.props.formValues.name +" "+ this.props.formValues.lastName }</Link>
                    <Link className="active" to="/adress">{!this.props.formValues.city?"Adress":this.props.formValues.city}</Link>
                    <Link className="" to="/credit_card_details">Fill credit card data</Link>
                </div>
                <div className="contentTitle">
                    <h2>Credit Card Data</h2>
                </div>
                <div className="content">


                    <form>
                        <div className="row flex-row">
                            <div className="flex-half-row inline">
                                <input type={"text"} maxLength="16" size="16" ref={"numberinput"} placeholder={"Credit Card Number"} />
                            </div>
                            <div className="flex-half-row inline">
                                <input  type={"text"} ref={"expDateinput"} placeholder={"Expiration Date"}/>
                            </div>
                            <div className="inline">
                                <input  type={"text"} maxLength="3" size="3" ref={"cvvinput"} placeholder={"CVV"}/>
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
                    <DataBlock _errorState={this.props.formValues.cardNumber} title={"Verify data you entered"} myClass="infoBlockHeader" allowErrors={false} />
                    <DataBlock _errorState={this.props.formValues.cardNumber} title={"Credit Card Number"} data={this.props.formValues.cardNumber} />
                    <DataBlock _errorState={this.props.formValues.expDate} title={"Expiration Date"} data={this.props.formValues.expDate} />
                    <DataBlock _errorState={this.props.formValues.cvv} title={"CVV"} data={this.props.formValues.cvv}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        formValues: state.formReducer
    };
}
function mapDispatchToProps(dispatch){
    //return {selectUser:(...args) => dispatch(selectUser(...args))}
    return bindActionCreators({fillCreditcardForm}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);