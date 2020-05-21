import React from 'react';

const Formulario = () => {
    return ( 
        <form
            className="col-12"
        >
            <fieldset>
                <legend className="text-center">Busca Bebidas por Categoría o Ingredientes</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;