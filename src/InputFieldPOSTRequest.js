import React, { useState } from 'react';

import * as constants from "./Constants";


function InputFieldPOSTRequest(props) {
    const [inputData, setInputData] = useState('');

    const onInputChange = (e) => {
        setInputData(e.target.value)
    }

    const onButtonClick = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: props.generatePostBody(inputData)
        };
        fetch(constants.API_DOMAIN_NAME + "videos/" + props.endpointName + "/", requestOptions)
            .then(async response => {
                if (!response.ok) {
                    // get error message from body or default to response status
                    console.error('Response failed during the HTTP ' + props.endpointName + ' request: ', response);
                }
            })
            .catch(error => {
                console.error('There was an error during the HTTP ' + props.endpointName + ' request: ', error);
            });
    }

    return (
        <div className="InputFieldStyle">
            <h1>{props.titleText}</h1>
            <input type="text" 
                value={inputData}
                onChange={onInputChange}/>
            <button onClick={onButtonClick}>{props.buttonText}</button>
        </div>
    );
}

export default InputFieldPOSTRequest;