import React from 'react'
import { useSelector } from 'react-redux';

const Table = () => {
    const todo= useSelector((state) => state.todoList);
  return (
    <div className="col-md-8 col-xs-12">
      <div className="mx-5">
        <label htmlFor="" className="bg-white form-control mb-4">
          Contacts
        </label>
        <table className="table bg-white form-control ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phnone</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
