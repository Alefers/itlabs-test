import React from 'react';
import {Form} from "../components/form/Form";
import {Table} from "../components/table/Table";
import {Modal} from "../components/modal/Modal";

const  Page = ({ formData, tables, modal, inputChange, saveData, editRow, deleteRow, openModal, closeModal }) => {

    return (
        <>
            <div className="col-wrapper-1">
                <Form formData={formData} inputChange={inputChange} saveData={saveData} />
            </div>
            <div className="col-wrapper-2">
                <Form formData={formData} inputChange={inputChange} saveData={saveData} />
            </div>
            <div className="table-wrapper">
                {tables.map((table) => {
                    return (
                        <Table table={table} key={table.id} openModal={openModal} deleteRow={deleteRow} />
                    )
                })}
            </div>
            <Modal data={modal} closeModal={closeModal} editRow={editRow} />
        </>
    );
}

export default Page;