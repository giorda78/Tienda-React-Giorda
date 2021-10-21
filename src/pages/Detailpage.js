import React from 'react';
import { useParams } from 'react-router-dom';

import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';


const DetailPage = () => {
  const { nombre } = useParams();

  return (
    <main className="text-center">
      <ItemDetailContainer nombre= {nombre}/>
    </main>
  );
};

export default DetailPage;
