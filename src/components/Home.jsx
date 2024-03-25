import React from 'react';
import MenuWrap from './MenuWrap';
import ContentWrap from './ContentWrap';

function Home() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido al panel de control.</p>
      {/* Aquí puedes agregar contenido adicional para tu dashboard */}
      <MenuWrap/>
      <ContentWrap />
    </div>
  );
}

export default Home;
