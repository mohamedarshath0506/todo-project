import "./style.css";
import { useState } from "react";

var i = 0;
var add = ++i;

function Register() {
  const [register, setRegister] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();

  const moveItems = () => {
    setRegister([
      ...register,
      {
        id: add++,
        firstName: firstName,
        lastName: lastName,
        age: age,
        city: city,
        gender: gender,
      },
    ]);
    setFirstName("");
    setLastName("");
    setAge("");
    setCity("");
    setGender("");
  };

  const uncheck = () => {
    setRegister([]);
    setFirstName("");
    setLastName("");
    setAge("");
    setCity("");
    setGender("");
  };

  const clear = (index) => {
    setRegister(
      register.filter((item, i) => {
        return i !== index;
      })
    );
  };

  const edit = (index) => {
    setFirstName(register[index].firstName);
    setLastName(register[index].lastName);
    setAge(register[index].age);
    setCity(register[index].city);
    setGender(register[index].gender);
  };

  return (
    <div>
      <section className="vh-center">
        <div className="register-container">
          <h1>REGISTER FORM</h1>
          <div className="vh-center input-container">
            <div className="input-content">
              <input
                type="text"
                placeholder="First Name"
                className="input-area"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <button className="btn-content" onClick={() => moveItems()}>
                +
              </button>
            </div>
            <input
              type="text"
              placeholder="Last Name"
              className="input-area"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Age"
              className="input-area"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              className="input-area"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <select
              className="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option></option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            {register.map((change, index) => (
              <div>
                <div className="v-center content">
                  <h1>{change.id}</h1>
                  <h1>{change.firstName}</h1>
                  <h1>{change.lastName}</h1>
                  <h1>{change.age}</h1>
                  <h1>{change.city}</h1>
                  <h1>{change.gender}</h1>
                  <button onClick={() => edit(index)}>Edit</button>
                  <button onClick={() => clear(index)}>X</button>
                </div>
              </div>
            ))}
          </div>

          <div className="button-container vh-center ">
            <p>You have {register.length} pending taska</p>
            <button className="primay-btn" onClick={() => uncheck()}>
              Clear All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Register;
