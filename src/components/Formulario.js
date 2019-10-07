import React from 'react';

function Formulario({getUsuarios, updateForm}) {



    return (
        <form
            onSubmit={getUsuarios}
        >
            <div className="form-group">
                <label htmlFor="genero">Genero: </label>
                <select className="form-control" id="genero" name="genero"
                    onChange={updateForm}
                >
                    <option value="">Ambos</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="cantidad">Cantidad de Usuarios:</label>
                <input type="number" className="form-control" id="cantidad" name="cantidad"
                    onChange={updateForm}
                />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-success" value="Generar"/>
            </div>
        </form>
    );
}
 
export default Formulario;