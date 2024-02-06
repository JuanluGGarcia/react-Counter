/* Le pasamos action al componente Button porque NO PODEMOS HACER CLICK SOBRE UN COMPONENTE (BUTTON), POR ESO AQUI NO PONEMOS 'ONCLICK'. EL ONCLICK TENEMOS QUE PONERLO SOBRE LA PIEZA DEL DOM QUE ES 'button' QUE LO TENEMOS DENTRO DEL COMPONENTE BUTTON. */
// children, text = valor de lo pintado en pantalla
// action => son los valores que devuelve la funcion de Counter
// const Button = ({ text, action }) => {
//     return <button onClick={(action)}>{text}</button>
// };

// Se puede poner tambien de esta manera y children tendria el texto de la etiqueta
const Button = ({ children, action }) => {
    return <button onClick={(action)}>{children}</button>
};


export default Button;