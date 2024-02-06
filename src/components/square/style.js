import styled from "styled-components";

const StyledSquare = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${({$bgColor}) => ($bgColor)};
`;

const StyledButton = styled.button`
    padding: 1rem 1rem;

`;

export { StyledSquare, StyledButton };