import React from 'react';
import Header from '../src/components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Le reste de votre contenu viendra ici */}
        <section style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Bienvenue à la Maison de l'Horlogerie</h2>
          <p>Expertise et précision au service de vos garde-temps.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
