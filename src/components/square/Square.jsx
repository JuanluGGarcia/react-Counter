import { useState } from 'react';
import { StyledButton, StyledSquare } from './style';

const Square = () => {
    const [color, setColor] = useState('red');

	return (
        <>
            <StyledSquare $bgColor={color} />
            <StyledButton onClick={() => handleColor(color, setColor)}>Change color</StyledButton>
        </>
    );
};

const handleColor = (color, setColor) => {
    if (color === 'red') {
        color='green';
    }else {
        color='red';
    } 
    setColor(color);
};
export default Square;
 