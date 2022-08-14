import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import Form from "../form/Form";
import Table from "../table/Table";
import "./Home.css";

const Home = () => {
  const [personList, setPersonList] = useState([]);
  const toDoCollectionRef = collection(db, "person");
  const personCollectionRef = collection(db, "person");

  const getTodo = async () => {
    const data = await getDocs(toDoCollectionRef);

    setPersonList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // dispatch(setTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div
      className="d-flex justify-content-center flex-column align-items-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <div className="container  text-center   ">
        <div className="row">
          <Form
            personList={personList}
            setPersonList={setPersonList}
            getTodo={getTodo}
            personCollectionRef={personCollectionRef}
          />
          <Table
            personList={personList}
            setPersonList={setPersonList}
            getTodo={getTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
