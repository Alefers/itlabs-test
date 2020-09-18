import React, {useEffect, useState} from 'react';
import {FormElement} from "../form/FormElement";

export const Modal = ({ data, closeModal, editRow }) => {

    const [agree, setAgree] = useState(false);
    const [formData, setFormData] = useState({...data.formData});
    const [agreeMessageFlag, setAgreeMessageFlag] = useState(false);

    const inputChangeHandler = (name, value) => {
        setFormData({...formData, [name]: value});
    }

    const agreeChangeHandler = () => {
        setAgree(!agree);
        setAgreeMessageFlag(false);
    }

    const buttonClickHandler = () => {
        if (agree) {
            editRow({agree, formData: {...formData}, tableId: data.tableId, rowId: data.rowId});
        } else {
            setAgreeMessageFlag(true);
        }
    }

    useEffect(() => {
        setAgree(false);
        setAgreeMessageFlag(false);
        setFormData({...data.formData});
    }, [data]);

    let modalClassName = 'modal' + (data.active ? ' modal_active' : '');

    return (
        <div className={modalClassName}>
            <div className="modal--shadow" onClick={closeModal} />
            <div className="modal--content">
                <div className="modal-form">
                    <div className="modal-form--header">
                        <div className="modal-form--header-text" >
                            Change record
                        </div>
                        <button className="modal-form--header-close-button" onClick={closeModal} />
                    </div>
                    <div className="modal-form--body">
                        <div className="row">
                            {agreeMessageFlag && <div className="modal-form--body-col3"><div className="error-message">U must agree all changes</div></div>}
                            <div className="modal-form--body-col1">
                                <FormElement placeholder="Name" name="name" value={formData.name} change={inputChangeHandler} />
                            </div>
                            <div className="modal-form--body-col1">
                                <FormElement placeholder="Surname" name="surname" value={formData.surname} change={inputChangeHandler} />
                            </div>
                            <div className="modal-form--body-col1">
                                <FormElement placeholder="City" name="city" value={formData.city} change={inputChangeHandler} />
                            </div>
                            <div className="modal-form--body-col1">
                                <div className="form-element">
                                    <input
                                        type="checkbox"
                                        className="form-element--checkbox"
                                        id="checkbox"
                                        checked={agree}
                                        onChange={agreeChangeHandler}
                                    />
                                    <label htmlFor="checkbox" className="form-element--checkbox-label">Totally agree</label>
                                </div>
                            </div>
                            <div className="modal-form--body-col2">
                                <button type="button" className="form-element--button" onClick={buttonClickHandler}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};