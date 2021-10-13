import { ListaDeProductos } from '../Data/Data.js';

const getById = (id, array) => array.find((el) => el.id === id);


    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(ListaDeProductos);
        }, 1500);
    });

const getAllProductsFromDB = async (setState) => {
  try {
    const result = await getProductos;
    setState(result);
  } catch (error) {
    console.log(error);
    alert('No podemos mostrar los productos en este momento');
  }
};

const getProductById = async (id, setState) => {
  try {
    const result = await getProductos;
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};

export { getAllProductsFromDB, getProductById };
