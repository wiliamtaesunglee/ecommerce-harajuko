import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component.jsx';

const HomePage = () => (
  <div className='homepage'>
  <h1>Bem vindo à Harajuko</h1>
    <Directory/>
  </div>
);

export default HomePage;
