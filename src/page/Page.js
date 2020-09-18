import React, {useEffect, useState} from 'react';
import {Form} from "../components/form/Form";
import {Table} from "../components/table/Table";
import {Modal} from "../components/modal/Modal";

const  Page = ({ formData, tables, modal, inputChange, saveData, editRow, deleteRow, copyTable, deleteTable, openModal, closeModal }) => {

    const [windowSize, setWindowSize] = useState('desktop');

    function handleResize() {
        if (modal.active) {
            closeModal();
        }
        if (window.matchMedia('(max-width: 560px)').matches && windowSize !== 'mobile') {
            setWindowSize('mobile');
        }
        if (window.matchMedia('(min-width: 561px)').matches && windowSize !== 'desktop') {
            setWindowSize('desktop');
        }
    }

    useEffect(() => {
        handleResize()
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    return (
        <>
            <div className="col-wrapper-1">
                <Form formData={formData} inputChange={inputChange} saveData={saveData} />
            </div>
            <div className="col-wrapper-2">
                <Form formData={formData} inputChange={inputChange} saveData={saveData} />
            </div>
            <div className="tables-set">
                {tables.map((table) => {
                    return (
                        <Table
                            table={table}
                            key={table.id}
                            openModal={openModal}
                            deleteRow={deleteRow}
                            copyTable={copyTable}
                            deleteTable={deleteTable}
                            windowSize={windowSize}
                        />
                    )
                })}
            </div>
            <Modal data={modal} closeModal={closeModal} editRow={editRow} />
        </>
    );
}

export default Page;