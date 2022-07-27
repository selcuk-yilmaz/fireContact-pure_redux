import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import { takeStore } from "./redux";

import React, { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "./auth/firebaseConfig";

import { useSelector } from "react-redux";

function App() {
  const todoList = useSelector((state) => state.todoRed.todoList);
  const [personList, setPersonList] = useState([]);
  const personCollectionRef = collection(db, "person");

  const createUser = async () => {
    await addDoc(personCollectionRef, { ...todoList, ...personList });
  };

  useEffect(() => {
    const getPerson = async () => {
      const data = await getDocs(personCollectionRef);
      console.log(data);
      setPersonList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPerson();
  }, []);

  const store = takeStore();
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
