import React from "react";

/* jsx renders list of animals
function Animals() {
    return (
        <div>
            <h1>Animals:</h1>
            <ul>
                <li>Lions</li>
                <li>Tigers</li>
                <li>Elephants</li>
                <li>Crocodiles</li>
            </ul>
        </div>
    )
}*/

/* same function but more simple and clean
function Animals() {
    const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];
     return (
        <div>
            <h1>Animals:</h1>
            <ul>
                {animals.map((animal) => {
                    return <li key={animal}>{animal}</li>
                })}
            </ul>
        </div>
     )
}*/

/*function Animals() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
  
    return (
      <div>
        <h1>Animals: </h1>
        <ul>
          {animalsList}
        </ul>
      </div>
    );
  }

export default Animals*/

function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function AnimalApp() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default AnimalApp