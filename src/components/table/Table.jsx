import { db } from "../../auth/firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodo } from "../../redux/actions/todoActions";

const Table = ({ text, number, gender }) => {
  // const todoList = useSelector((state) => state.todoRed.todoList);
  // const dispatch = useDispatch();

  const [personList, setPersonList] = useState([]);
  const toDoCollectionRef = collection(db, "person");

  const getTodo = async () => {
    const data = await getDocs(toDoCollectionRef);

    setPersonList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // dispatch(setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
  };
  useEffect(() => {
    getTodo();
  }, []);
  console.log(personList);

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
            {personList?.map((todo, index) => (
              <tr key={todo.id}>
                <th scope="row">{index + 1} </th>
                <td>{todo.name}</td>
                <td>{todo.phone}</td>
                <td>{todo.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
