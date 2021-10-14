import React from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {

  return (
    <div>
      <ItemDetail id={id}/>
    </div>
  );
};

export default ItemDetailContainer;
