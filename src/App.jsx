// import Counter from "./components/counter/Counter";

import Square from "./components/square/Square";

const App = () => {
	// return <Counter />

	// Si en el return tuviesemos también una etiqueta p que tuviese 'soy un parrafo', en el componente Counter no se pintaria ya que no hacemos nada para que lo pinte. Para que lo pinte, tendriamos que poner const Counter = ({ children }) y luego poner {children} donde quisieramos en Counter para que lo pinte.
	// CHILDREN TENEMOS QUE PONERLO CUANDO PASAMOS CONTENIDO ENTRE LA ETIQUETA DE APERTURA Y CIERRE DE UN COMPONENTE

	// return (
		// <Counter>
			// <p>Soy un contador</p> Para que se pinte esto, dentro de Counter tengo que poner {children}
		// </Counter>
	// )


	// Pinto un cuadrado que al pulsar en el boton cambia de color;
	return <Square />
};

export default App;
