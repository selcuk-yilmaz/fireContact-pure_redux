import React from 'react'
import { useSelector } from "react-redux";

const Table = ({text,number,gender} ) => {
    const todoList = useSelector((state) => state.todoRed.todoList);
    console.log(todoList);
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
            {todoList?.map((todo,index) => (
            <tr key={todo.id} >
              <th scope="row">{index+1} </th>
              <td>{todo.text}</td>
              <td>{todo.number}</td>
              <td>{todo.gender}</td>
            </tr>               
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table
