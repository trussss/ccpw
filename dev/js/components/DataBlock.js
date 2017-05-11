import React from 'react'

const DataBlock = ({ _errorState=false, title="", data="", allowErrors=true, errorText, myClass=""}) => {
    if (errorText === void 0) { errorText = "Please fill '"+title+"' field!"; }
    let _Error = (allowErrors ? "" : "displayHide")+ " " + (!_errorState ? "_errorMessage" : "displayHide");
    return (
        <div>
            <div className={!_errorState ? "displayHide" : ""}>
                <div>
                <span className={myClass}>{title}</span>
                <span className={myClass}> : </span>
                <span className={myClass}>{data}</span>
                </div>
            </div>
                <div className={_Error}>{errorText}</div>
        </div>
    );
};

export default DataBlock;