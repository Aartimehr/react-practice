import { useState } from 'react'
  function App() {
  return(
    <>
    <h1>React TypeScript Practice</h1>
    <div>
       <h2>Welcome to my website</h2>
       <button>open a page</button>
    </div>
    <section>
    <table>
      <tr>
        <th>HTTP Requests</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>GET</td>
        <td>Retrieve data from a server</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>Submit data to a server</td>
      </tr>
      <tr>
        <td>PUT/Update</td>
        <td>Update existing data on a server</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>Delete data from a server</td>
      </tr>
      
    </table>
  </section>
    </>
  )

}

export default App;


