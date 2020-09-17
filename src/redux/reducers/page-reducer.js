const INPUT_CHANGE = 'INPUT CHANGE';
const SAVE_DATA = 'SAVE DATA';

let initialState = {
    formData: {
        name: '',
        soname: '',
        age: '',
        city: ''
    },
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
    ]
};

const pageReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch (action.type) {
        case INPUT_CHANGE:

            return stateCopy;
        default:
            return state;
    }
}

export const inputChangeCreator = (action) => ({type: INPUT_CHANGE, data: action});
export const saveDataCreator = (action) => ({type: SAVE_DATA, data: action});

export default pageReducer;