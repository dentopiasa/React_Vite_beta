import {useState} from "react";


function Person() {
  const [personAge, setPerson] = useState({ age: 0 });
  const [personName, setName] = useState("")
 
  const handleIncreaseAge = () =>{
    const newPerson = { age: personAge.age + 1 };
    setPerson(newPerson);
  };

  const handleDecreaseAge = () =>{
    const newPerson = { age: personAge.age - 1 };
    setPerson(newPerson);
  };
  const resetAge = () =>{
    const newPerson = { age: 0 };
    setPerson(newPerson);
  };

  return (
    <div>
    
      <input
      type= "text"
      value = {personName}
      onChange={(event) => setName(event.target.value)}
      />
      <h1>{personName}</h1>
      <h2>{personAge.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <button onClick={handleDecreaseAge}>Decrease age</button>
      <button onClick={resetAge}>Reset</button>
   
    </div>
  );
}

  export default Person
 