import { useState } from 'react';
import Button from '../button/Button';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
            {/* <button onClick={() => decrement(counter, setCounter)}>-1</button> */}
			{/* <button onClick={() => reset(setCounter)}>Reset</button> */}
			{/* <button onClick={() => increment(counter, setCounter)}>+1</button> */}


            {/* action es la funcion y text es el contenido de la etiqueta */}
			<h1>{counter}</h1>
            {/* <Button action={() => decrement(counter, setCounter)} text={'-1'} /> */}
			{/* <Button action={() => reset(setCounter)} text={'0'} /> */}
			{/* <Button action={() => increment(counter, setCounter)} text={'+1'} /> */}

            {/* otra forma de ponerlo. El valor de la etiqueta lo recoge en Button la propiedad children */}
            <Button action={() => decrement(counter, setCounter)}>-1</Button>
			<Button action={() => reset(setCounter)}>0</Button>
			<Button action={() => increment(counter, setCounter)}>+1</Button>

			
		</>
	);
};

const increment = (counter, setCounter) => {
	// console.log(counter + 1);
	setCounter(counter + 1);
};

const reset = setCounter => {
	setCounter(0);
};

const decrement = (counter, setCounter) => {
	setCounter(counter - 1);
};

export default Counter;
