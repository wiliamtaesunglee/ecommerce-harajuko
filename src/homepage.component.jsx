import React from 'react';
import './homepage.styles.scss';


const HomePage = () => (
  <div className='homepage'>
  <h1>Bem vindo à Harajuko</h1>
    <div className='directory-menu'>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Chapéus</h1>
          <span className='subtitle'>Compre Agora</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Capas</h1>
          <span className='subtitle'>Compre Agora</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Blusas</h1>
          <span className='subtitle'>Compre Agora</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Saias</h1>
          <span className='subtitle'>Compre Agora</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Cosplays</h1>
          <span className='subtitle'>Compre Agora</span>
        </div>
      </div>

    </div>
  </div>
);

export default HomePage;
