import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import { takeStore } from "./redux";

import React, { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "./auth/firebaseConfig";

function App() {
  // const [personList, setPersonList] = useState([]);
  // const personCollectionRef = collection(db, "person");
  // const getPerson = async () => {
  //   const data = await getDocs(personCollectionRef);
  //   console.log(data);
  //   setPersonList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  // useEffect(() => {
  //   getPerson();
  // }, []);

  const store = takeStore();
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
