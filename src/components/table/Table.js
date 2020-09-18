import React from 'react';

export const Table = ({ table, openModal, deleteRow }) => {

    const editRowHandler = rowId => {
        openModal({tableId: table.id, rowId});
    }

    const deleteRowHandler = rowId => {
        deleteRow({tableId: table.id, rowId});
    }

    return (
        <>
            <div className="table-controls">

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
        </>
    );
};