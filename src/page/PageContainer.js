import Page from "./Page";
import {connect} from "react-redux";
import {
    closeModalCreator, deleteRowCreator,
    editRowCreator,
    inputChangeCreator,
    openModalCreator,
    saveDataCreator
} from "../redux/reducers/page-reducer";

let mapStateToProps = (state) => {
    return {
        formData: state.pageReducer.formData,
        tables: state.pageReducer.tables,
        modal: state.pageReducer.modal
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (action) => {
            dispatch(inputChangeCreator(action));
        },
        saveData: () => {
            dispatch(saveDataCreator());
        },
        editRow: (action) => {
            dispatch(editRowCreator(action));
        },
        deleteRow: (action) => {
            dispatch(deleteRowCreator(action));
        },
        openModal: (action) => {
            dispatch(openModalCreator(action));
        },
        closeModal: () => {
            dispatch(closeModalCreator());
        },
    }
}

const  PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);

export default PageContainer;