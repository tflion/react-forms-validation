import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const { value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const { value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  // const nameRef = useRef();

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }


  const formSubmitHandler = (event) => {
    event.preventDefault();
    //console.log(nameRef.current.value); // Ref pode ser melhor opção em casos simples
    //nameRef.current.value = ''; =>  Não é ideal, pois estaria manipulando o DOM manualmente 


    if (!nameIsValid || !emailIsValid) {

      return;
    }

    console.log(name); // State para form enviado apenas uma vez é exagero
   
    resetNameInput();
    resetEmailInput();
    
  }


  const nameInputClasses = nameInputHasError ?
    'form-control invalid' : // Se sim
    'form-control'; // Se não

  const emailInputClasses = emailInputHasError ?
    'form-control invalid' : // Se sim
    'form-control'; // Se não


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Name</label>
        <input value={name}
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className="error-text">Nome não pode estar vazio.</p>}

      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Email</label>
        <input value={email}
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Favor inserir um email válido.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form >
  );
};

export default SimpleInput;
