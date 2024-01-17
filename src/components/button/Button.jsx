
// val = valor de lo pintado en pantalla
// action => son los valores que devuelve la funcion de Counter
// const Button = ({ text, action }) => {
//     return <button onClick={(action)}>{text}</button>
// };

// Se puede poner tambien de esta manera y children tendria el texto de la etiqueta
const Button = ({ children, action }) => {
    return <button onClick={(action)}>{children}</button>
};


export default Button;