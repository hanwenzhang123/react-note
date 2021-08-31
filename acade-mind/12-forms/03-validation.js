//components/SimpleInput.js
import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);  //provide validation feedback, set initial false, not valid at beginning
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);  //we set initial false for above, but we do not want to see see feedback initially
  
  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is valid!');
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); 
    
    setEnteredNameTouched(true);    //touched and confirmed when form submitted
    
    if (enteredName.trim() == '') {     //adding validation
      setEnteredNameIsValid(false);
      return;         //if empty, nothing will be added
    }
    
    setEnteredNameIsValid(true);    //pass the previous if check, then set the validation to true
    console.log(enteredName);
    
    const enteredValue = nameInputRef.current.value; 
    console.log(enteredValue);
    
    setEnteredName("");    //reset the enetered iput
  };
  
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;   //only if it is touched and it is valid, then nameInputIsInvalid

  const nameInputClasses = nameInputIsInvalid   //set the class name dynamic based on the validation
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>  //dynamic class
        <label htmlFor="name">Your Name</label>
        <input
          ref="nameInputRef"
          type="text"
          id="name"
          onChange={nameInputChangeHandler} 
          value = {enteredName}     //reset the enetered iput
        />
       {nameInputIsInvalid && (      //if nameInputIsInvalid, then we show the text in the p tag
          <p className="error-text">Name must not be empty.</p>
        )}   
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
  
