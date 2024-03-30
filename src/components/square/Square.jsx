import { useState } from 'react';
import { StyledSquare } from './style';
import Button from '../button/Button';

const Square = () => {
    const [isRed, setIsRed] = useState('true');

	return (
        <>
            <StyledSquare isRed={isRed} />
            {/* <button onClick={() => setIsRed(!isRed)}>Change color</button> */}
            <Button action={() => handleColor(isRed, setIsRed)}>Change color</Button>
        </>
    );
};

const handleColor = (isRed, setIsRed) =>  {
    setIsRed(!isRed);
}

export default Square;
 