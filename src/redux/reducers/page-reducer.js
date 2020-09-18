const INPUT_CHANGE = 'INPUT CHANGE',
    SAVE_DATA = 'SAVE DATA',
    OPEN_MODAL = 'OPEN MODAL',
    CLOSE_MODAL = 'CLOSE MODAL',
    EDIT_ROW = 'EDIT ROW',
    DELETE_ROW = 'DELETE ROW'

let initialState = {
    formData: {
        name: '',
        surname: '',
        age: '',
        city: ''
    },
    nextId: 1,
    tables: [
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
    ],
    error: {

    },
    modal: {
        active: false,
        formData: {
            name: '',
            surname: '',
            city: ''
        },
        tableId: 0,
        rowId: 0
    }
};

const pageReducer = (state = initialState, action) => {

    let stateCopy = {...state};
    let table, row;

    switch (action.type) {
        case INPUT_CHANGE:
            stateCopy.formData = {...stateCopy.formData, [action.data.name]: action.data.value};

            return stateCopy;
        case SAVE_DATA:
            let newRow = {...stateCopy.formData};
            stateCopy.tables = [...stateCopy.tables];
            stateCopy.tables[0].data.push(newRow);

            for (let field in stateCopy.formData) {
                stateCopy.formData[field] = '';
            }

            return stateCopy;
        case EDIT_ROW:
            table = stateCopy.tables.find( table => table.id === action.data.tableId );

            if (!table && table.data.length < action.data.rowId) {
                return stateCopy;
            }

            table.data[action.data.rowId] = {...action.data.formData};
            stateCopy.modal = {...stateCopy.modal, active: false}

            return stateCopy;
        case DELETE_ROW:
            table = stateCopy.tables.find( table => table.id === action.data.tableId );

            if (!table && table.data.length < action.data.rowId) {
                return stateCopy;
            }

            table.data.splice([action.data.rowId], 1);
            if (table.data.length === 0 && action.data.tableId !== 0) {
                let filteredTables = stateCopy.tables.filter(table => table.id !== action.data.tableId);
                stateCopy.tables = filteredTables;
            }

            stateCopy.tables = [...stateCopy.tables];

            return stateCopy;
        case OPEN_MODAL:
            table = stateCopy.tables.find( table => table.id === action.data.tableId );
            row = table.data[action.data.rowId];
            stateCopy.modal = {
                active: true,
                formData: {...row},
                tableId: action.data.tableId,
                rowId: action.data.rowId
            }

            return stateCopy;
        case CLOSE_MODAL:
            stateCopy.modal = {...stateCopy.modal, active: false}

            return stateCopy;
        default:
            return state;
    }
}

export const inputChangeCreator = (action) => ({type: INPUT_CHANGE, data: action});
export const saveDataCreator = () => ({type: SAVE_DATA});
export const editRowCreator = (action) => ({type: EDIT_ROW, data: action});
export const deleteRowCreator = (action) => ({type: DELETE_ROW, data: action});
export const openModalCreator = (action) => ({type: OPEN_MODAL, data: action});
export const closeModalCreator = () => ({type: CLOSE_MODAL});

export default pageReducer;