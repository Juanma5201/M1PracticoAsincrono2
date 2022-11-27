import React from 'react';
import './App.css';
import Contador from './componentes/Contador';
import Card from './componentes/Card';

function App() {
  return (
    <div>
      <div className="Contador">
        <h2>Act 1 Contador</h2>
        <p>
        <Contador />
        </p>
      </div>
      <div className='Card'>
        <p>
        <h2>Cards</h2>
          <Card id="0" img="https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820__340.jpg" title="León" description="Es un león" />
          <Card id="1" img="https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247__340.jpg" title="Tortuga" description="Es una tortuga" />
          <Card id="2" img="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__340.jpg" title="Buho" description="Es un buho" />
          <Card id="3" img="https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512__340.jpg" title="Zorro" description="Es un zorrito" />
          <Card id="4" img="https://punto.mx/wp-content/uploads/2022/08/SAW-X.jpg" title="El juego del miedo" description="Es una película de terror y Aventura estrenada en 2004 y dirigida por James Wan" />
        </p>
      </div>
    </div>
  );
}

export default App;
