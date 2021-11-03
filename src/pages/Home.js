import React from 'react';
import './Home.css';


import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'


const Home = () => {
  return (
    <main className="fondo">
        <ItemListContainer/>
        <ItemDetailContainer/>
    </main>
  );
};

export default Home;