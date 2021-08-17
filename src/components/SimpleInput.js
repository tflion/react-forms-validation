import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  // const nameRef = useRef();


  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //console.log(nameRef.current.value); // Ref pode ser melhor opção em casos simples
    //nameRef.current.value = ''; =>  Não é ideal, pois estaria manipulando o DOM manualmente 

    if (name.trim() === '') {
      return;
    }

    console.log(name); // State para form enviado apenas uma vez é exagero
    setName('');

  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input value={name} type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
