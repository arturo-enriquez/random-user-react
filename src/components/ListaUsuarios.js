import React from 'react';

import Usuario from "./Usuario";

function ListaUsuarios({usuarios}) {

    return (
        <div className="list">
            {usuarios.map((usuario, index) => (
                <Usuario
                    key={index}
                    index={index}
                    usuario={usuario}
                />
            ))}

        </div>
    );
}

export default ListaUsuarios;