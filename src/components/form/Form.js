import React from 'react';
import {FormElement} from "./FormElement";

export const Form = ({ formData, inputChange, saveData }) => {

    const changeHandle = (name, value) => {
        inputChange({name, value});
    }

    return (
        <div className="form">
            <div className="row">
                <div className="col">
                    <FormElement placeholder="Name" name="name" value={formData.name} change={changeHandle} />
                    <FormElement placeholder="Surname" name="surname" value={formData.surname} change={changeHandle} />
                </div>
                <div className="col">
                    <FormElement placeholder="Age" type="number" name="age" value={formData.age} change={changeHandle} />
                    <FormElement placeholder="City" name="city" value={formData.city} change={changeHandle} />
                </div>
            </div>
            <div className="form--controls-wrapper">
                <button type="button" className="form-element--button" onClick={saveData}>
                    Add
                </button>
            </div>
        </div>
    );
};