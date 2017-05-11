import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fillFirstLastNameForm} from '../actions/index'
import { Link } from 'react-router';
import DataBlock  from '../components/DataBlock';

class Name extends React.Component {
   constructor(props) {
        super(props);
        // can not find `this` if not bind
        this.handleGoClick = this.handleGoClick.bind(this);
    }
    _submit (values) {
      this.props.fillFirstLastNameForm(values);
    };
    getInputValue() {
        {console.log(this)}
        return {name: this.refs.nameInput.value, lastName: this.refs.lastNameInput.value, page: "adress"}
    }
    handleGoClick(e){
        //e.preventDefault();
        const values = (this.getInputValue());
        if(!values.name || !values.lastName){
            e.preventDefault();
        }
        this._submit(values);
    }
    render() {
        console.log(this.store);
        return (

            <div  className="main">
                <div className="breadcrumb flat">
                    <Link className="active" to="/">Home</Link>
                    <Link className="" to="/user_data">{!this.props.formValues.name?"Name":this.props.formValues.name +" "+ this.props.formValues.lastName }</Link>
                </div>
                <div className="contentTitle">
                    <h2>Personal information</h2>
                </div>
                <div className="content">
                        <form>
                            <div className="row">
                                 <div className="half-row inline">
                                      <input type={"text"} ref={"nameInput"} placeholder={"FirstName"} />
                                 </div>
                                 <div className="half-row inline">
                                    <input  type={"text"} ref={"lastNameInput"} placeholder={"LastName"} />
                                 </div>
                            </div>
                            <div className="row">
                             <div className="submitButton">
                                <Link to="/adress">
                                 <input type="submit" value="Send" onClick={this.handleGoClick}/>
                                </Link>
                              </div>
                            </div>
                        </form>
                </div>
                <div className="infoBlock">
                    <DataBlock _errorState={this.props.formValues.name} title={"Verify data you entered"} myClass="infoBlockHeader" allowErrors={false} />
                    <DataBlock _errorState={this.props.formValues.name} title={"Name"} data={this.props.formValues.name} />
                    <DataBlock _errorState={this.props.formValues.lastName} title={"Last Name"} data={this.props.formValues.lastName} />
                </div>
                {/*<NameForm handleSubmit={() => {*/}
                       {/*formData = fillRegistrationForm(this.props.formValues.values);*/}
                       {/*this.props.fillRegistrationForm(formData);*/}
                       {/*alert(JSON.stringify(formData));*/}
                       {/*return false;*/}
                    {/*}*/}
               {/*}/>*/}

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
    return bindActionCreators({fillFirstLastNameForm}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Name);
