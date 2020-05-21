import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';


const ListaRecetas = () => {

// Extraer las recetas
const { recetas } = useContext(RecetasContext);

    return ( <h1>Listado</h1> );
}
 
export default ListaRecetas;