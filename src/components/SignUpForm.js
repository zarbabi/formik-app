import { useState } from "react";

const SignUpFrom = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = ({target}) => {
    setUserData({ ...userData, [target.name]: target.value });
  };

  return (
    <div>
      <form>
        <div className="formControl">
          <label>Name</label>
          <input
            type="text"
            onChange={changeHandler}
            value={userData.name}
            name="name"
          />
        </div>
        <div className="formControl">
          <label>Email</label>
          <input
            type="text"
            onChange={changeHandler}
            value={userData.email}
            name="email"
          />
        </div>
        <div className="formControl">
          <label>Password</label>
          <input
            type="text"
            onChange={changeHandler}
            value={userData.password}
            name="password"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpFrom;
