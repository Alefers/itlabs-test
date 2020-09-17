import React from 'react';

export const FormElement = ({ placeholder, value, change }) => {
    return (
        <div className="form-element">
            <input
                type="text"
                className="form-element--input"
                placeholder={placeholder}
                value={value}
                onChange={change}
            />
        </div>
    );
};