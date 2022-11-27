import React, {useState} from 'react';

const Contador = () => {
 
    const [contador, setContador] = useState(0);
  
    return <div>
      <p>El valor es: {contador}</p>
      <button onClick={() => setContador( contador +5)}> Sumar 5  </button>
      <button onClick={() => setContador( contador +1)}> Sumar 1  </button>
      <button onClick={() => setContador(0)}> Restablecer </button>
      <button onClick={() => setContador( contador -1)}> Restar 1 </button>
      <button onClick={() => setContador( contador -5)}> Restar 5 </button>
    </div>
}

export default Contador; 