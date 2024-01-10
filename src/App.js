import './App.css';

function App() {
  return (
    <div className="App">
          <h1>Gestion De Docentes</h1>
          <div className='filtros'>
            
            <div>
                <fieldset>
                    <legend>Filtrado Por Nombre</legend>
                    <input className='form-control' type='text' placeholder='Seleccione Nombre'/>
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <legend>Filtrado Por Grado</legend>
                    <input type='text' className='form-control' placeholder='Seleccione Grado'/>
                </fieldset>
            </div>
          </div>
          <table className='table'>
              <tr>
                <th>Apellidos y nombres</th>
                <th>Doc Identidad</th>
                <th>Correo electrónico</th>
                <th>Celular</th>
                <th>Grado</th>
                <th>Cv</th>
              </tr>
          </table>
    </div>
  );
}

export default App;
