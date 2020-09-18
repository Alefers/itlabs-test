import React from 'react';

export const FormElement = ({ placeholder, type, name, value, change }) => {

    const inputType = type || 'text';

    const changeHandler = event => {
        change(name, event.target.value);
    }

    return (
        <div className="form-element">
            <input
                type={inputType}
                className="form-element--input"
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
            />
        </div>
    );
};