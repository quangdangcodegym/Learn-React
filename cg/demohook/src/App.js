import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>List products</h1>
      <div className='row justify-content-between'>
        <div className='col-2'>
          <button className='btn btn-primary'>Create</button>
        </div>
        <div className='col-4 row'>
          <div className='col-9'>
            <input type='text' className='form-control' />
          </div>
          <button className='btn btn-primary col-3'>Search</button>
        </div>
      </div>

      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
