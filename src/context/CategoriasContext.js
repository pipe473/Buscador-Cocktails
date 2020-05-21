import React, { createContext, useState, useEffect } from 'react';

// Crear el context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    // Crear el state del Context
   const [ categorias, guardarCategorias ] = useState([]);

   // Ejecutar el llamado a la api
   useEffect(() => {

   }, []);

    return(
        <CategoriasContext.Provider
            value={{
                
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;