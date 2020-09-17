import Page from "./Page";
import {connect} from "react-redux";
import {inputChangeCreator, saveDataCreator} from "../redux/reducers/page-reducer";

let mapStateToProps = (state) => {
    return {
        formData: state.formData,
        table: state.tables
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (action) => {
            dispatch(inputChangeCreator(action));
        },
        saveData: (action) => {
            dispatch(saveDataCreator(action));
        }
    }
}

const  PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);

export default PageContainer;