import { useReducer } from "react";
// import { useState } from "react";


const initialInputstate = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return{ value: action.value, isTouched: state.isTouched};
    }
    if(action.type === 'BLUR'){
        return{isTouched: true, value: state.value}
    }
    if(action.type === 'RESET'){
        return{ isTouched: false, value: ''}
    }
    
    return inputStateReducer;
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputstate)


    // const [value, setValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);

    // const valueIsValid = validateValue(value);
    // const hasError = !valueIsValid && isTouched;

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        // setValue(event.target.value);
        dispatch({ type: 'INPUT', value: event.target.value });
    }
    const inputBlurHandler = () => {
        // setIsTouched(true);
        dispatch({ type: 'BLUR'});

    }

    const reset = () => {
        // setValue('');
        // setIsTouched(false);
        dispatch({type: 'RESET'})
    }

    return {
        value: inputState.value, // apenas value se for useState
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;