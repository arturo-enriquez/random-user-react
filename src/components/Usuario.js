import React from 'react';

const Usuario = ({usuario}) => {
    return (
        <div className="card">
            <img src={usuario.picture.large} className="mr-3" alt="..."/>
            <div className="info">
                <h5 className="mt-0">{usuario.name.first} {usuario.name.last}</h5>
                <p>
                    {usuario.email}
                    <br/>
                    {usuario.phone}    
                </p>
            </div>
        </div>
    );
}
 
export default Usuario;