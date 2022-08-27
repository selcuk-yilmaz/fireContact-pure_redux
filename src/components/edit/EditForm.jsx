import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import { useDispatch} from "react-redux";
import { getTodo } from "../../redux/thunk/dataThunk";

const EditForm = ({ editItem }) => {
  const { id, name, phone, gender } = editItem;
  const dispatch = useDispatch();

  const [newName, setNewName] = useState(name);
  const [newPhone, setNewPhone] = useState(phone);
  const [newGender, setNewGender] = useState(gender);
  const handleSave = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, "person", id);
    try {
      await updateDoc(userDoc, {
        name: newName,
        phone: newPhone,
        gender: newGender,
      });
      console.log("güncellendi");
      //   navigate("/");
    } catch (error) {
      console.log(error.message);
    }
    setNewName("");
    setNewPhone("");
    setNewGender("");
    dispatch(getTodo());
  };
  useEffect(() => {
    setNewName(name);
    setNewPhone(phone);
    setNewGender(gender);
  }, [name, phone, gender]);
  console.log(newName);

  return (
    <div className="modal" tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={newName || ""}
                onChange={(e) => setNewName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={newPhone || ""}
                onChange={(e) => setNewPhone(e.target.value)}
                required
              />
            </div>
            <div className="input-group mb-3">
              <select
                className="custom-select "
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #bbb",
                  color: "#777",
                  padding: ".4rem",
                }}
                id="inputGroupSelect03"
                placeholder="Gender"
                value={newGender || ""}
                onChange={(e) => setNewGender(e.target.value)}
                required
              >
                <option value="">GENDER</option>
                <option value="male">👨Male</option>
                <option value="female">👩Female</option>
                <option value="other">😮Other</option>
              </select>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Gender
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={newGender || ""}
                onChange={(e) => setNewGender(e.target.value)}
                required
              />
            </div> */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
