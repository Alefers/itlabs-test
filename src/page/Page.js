import React from 'react';

const  Page = ({ formData }) => {

    const tables = [
        {
            id: 0,
            data: [
                {
                    name: 'Akakij',
                    surname: 'Pupkin',
                    age: 28,
                    city: 'Igra'
                },
                {
                    name: 'Ivan',
                    surname: 'Lenin',
                    age: 31,
                    city: 'Zura'
                },
                {
                    name: 'Kaspar',
                    surname: 'Zatvor',
                    age: 11,
                    city: 'Ocher'
                },
            ]
        }
    ];

    return (
        <>
            <div className="col-wrapper-1">
                <div className="form">
                    <div className="form--element-wrapper">
                        <div className="form-element">
                            <input type="text" className="form-element--input" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form--element-wrapper">
                        <div className="form-element">
                            <input type="text" className="form-element--input" placeholder="Surname"/>
                        </div>
                    </div>
                    <div className="form--element-wrapper">
                        <div className="form-element">
                            <input type="number" className="form-element--input" placeholder="Age"/>
                        </div>
                    </div>
                    <div className="form--element-wrapper">
                        <div className="form-element">
                            <input type="text" className="form-element--input" placeholder="City"/>
                        </div>
                    </div>
                    <div className="form--controls-wrapper form--controls-wrapper_indent">
                        <div className="form-element">
                            <button type="button" className="form-element--button">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-wrapper-2">
                <div className="form">
                    <div className="row">
                        <div className="col-6">
                            <div className="form--element-wrapper">
                                <div className="form-element">
                                    <input type="text" className="form-element--input" placeholder="Name" />
                                </div>
                            </div>
                            <div className="form--element-wrapper">
                                <div className="form-element">
                                    <input type="text" className="form-element--input" placeholder="Surname"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form--element-wrapper">
                                <div className="form-element">
                                    <input type="number" className="form-element--input" placeholder="Age"/>
                                </div>
                            </div>
                            <div className="form--element-wrapper">
                                <div className="form-element">
                                    <input type="text" className="form-element--input" placeholder="City"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form--controls-wrapper">
                        <div className="form-element_half">
                            <button type="button" className="form-element--button">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-wrapper">
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
                        {tables[0].data.map((row, rIdx) => {
                            return (
                                <tr key={rIdx}>
                                    <td className="table--td">{row.name}</td>
                                    <td className="table--td">{row.surname}</td>
                                    <td className="table--td">{row.age}</td>
                                    <td className="table--td">{row.city}</td>
                                    <td className="table--td">Опции</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Page;