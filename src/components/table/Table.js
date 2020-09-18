import React from 'react';

export const Table = ({ table, openModal, deleteRow, copyTable, deleteTable, windowSize }) => {

    const editRowHandler = rowId => {
        openModal({tableId: table.id, rowId});
    }

    const deleteRowHandler = rowId => {
        deleteRow({tableId: table.id, rowId});
    }

    if (windowSize === 'mobile') {
        return (
            <div className="table-wrapper">
                <div className="table-controls">
                    <button className="table-controls--copy" onClick={() => copyTable({tableId: table.id})}>
                        Copy table
                    </button>
                    {table.id !== 0 && <button className="table-controls--remove" onClick={() => deleteTable({tableId: table.id})}><span /></button>}
                </div>
                <div className="mobile-table">
                    <div className="mobile-table--header">
                        {table.id === 0 ? 'Main table': 'Table copy'}
                    </div>
                    {table.data.map((row, rIdx) => {
                        return (
                            <div className="mobile-table--row" key={rIdx}>
                                <div className="mobile-table--field mobile-table--field_first">
                                    <div className="mobile-table--field-name">Name</div>
                                    <div className="mobile-table--field-value">{row.name}</div>
                                </div>
                                <div className="mobile-table--field">
                                    <div className="mobile-table--field-name">Surname</div>
                                    <div className="mobile-table--field-value">{row.surname}</div>
                                </div>
                                <div className="mobile-table--field">
                                    <div className="mobile-table--field-name">Age</div>
                                    <div className="mobile-table--field-value">{row.age}</div>
                                </div>
                                <div className="mobile-table--field mobile-table--field_last">
                                    <div className="mobile-table--field-name">City</div>
                                    <div className="mobile-table--field-value">{row.city}</div>
                                </div>
                                <div className="mobile-table--row-actions">
                                    <div className="mobile-table--row-actions-element">
                                        <span
                                            className="link link-primary"
                                            onClick={() => editRowHandler(rIdx)}
                                        >
                                            Edit
                                        </span>
                                    </div>
                                    <div className="mobile-table--row-actions-element">
                                        <span
                                            className="link link-danger"
                                            onClick={() => deleteRowHandler(rIdx)}
                                        >
                                            Delete
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="table-wrapper">
            <div className="table-controls">
                <button className="table-controls--copy" onClick={() => copyTable({tableId: table.id})}>
                    Copy table
                </button>
                {table.id !== 0 && <button className="table-controls--remove" onClick={() => deleteTable({tableId: table.id})}><span /></button>}
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th className="table--th">Name</th>
                    <th className="table--th">Surname</th>
                    <th className="table--th">Age</th>
                    <th className="table--th">City</th>
                    <th className="table--th" />
                </tr>
                </thead>
                <tbody>
                {table.data.map((row, rIdx) => {
                    return (
                        <tr key={rIdx}>
                            <td className="table--td">{row.name}</td>
                            <td className="table--td">{row.surname}</td>
                            <td className="table--td">{row.age}</td>
                            <td className="table--td">{row.city}</td>
                            <td className="table--td">
                                <div className="table--row-actions">
                                    <div className="table--row-actions-element">
                                        <span
                                            className="link link-primary"
                                            onClick={() => editRowHandler(rIdx)}
                                        >
                                            Edit
                                        </span>
                                    </div>
                                    <div className="table--row-actions-element">
                                        <span
                                            className="link link-danger"
                                            onClick={() => deleteRowHandler(rIdx)}
                                        >
                                            Delete
                                        </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};