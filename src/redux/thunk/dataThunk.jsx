import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import {addTodo} from "../actions/todoActions"


export const getTodo = () => {
   return async (dispatch) => {
    const toDoCollectionRef = collection(db, "person");
    // const [personList, setPersonList] = useState([]);
    try {
      const data = await getDocs(toDoCollectionRef);
      const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(res);
      dispatch(addTodo(res));
      
    } catch (error) {
      console.log(error);
    }
    
  };
  
};

