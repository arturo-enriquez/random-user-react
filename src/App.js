import React, {useState} from 'react';
import axios from 'axios';

import Formulario from './components/Formulario';
import ListaUsuarios from './components/ListaUsuarios';

function App() {

  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({
    cantidad: 0,
    genero: ''
  });

  const getUsuarios = async e => {
    e.preventDefault();

    let url = `https://randomuser.me/api/?gender=${form.genero}&results=${form.cantidad}`;
    let nuevosUsuarios = await axios.get(url);
    console.log(typeof(nuevosUsuarios.data.results));
    setUsuarios(nuevosUsuarios.data.results);
  }

  const updateForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container">
      <header>
        <h1>Random User API</h1>
      </header>
      <div className="grid">
        <Formulario
          getUsuarios={getUsuarios}
          updateForm={updateForm}
          />
        <ListaUsuarios
          usuarios={usuarios}
        />
      </div>
    </div>
  );
}

export default App;
