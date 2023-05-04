import React, { useState } from "react";

const Signin = () => {
// Form State 
// set the data as blank to all input as defined like username and password 
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  


  const handleChange = ({ currentTarget: input }) => {
    const updatedData = { ...data };
    console.log("updatedData",updatedData)
 
    updatedData[input.name] = input.value;
    setData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { username, password } = data;
  return (
    <>
      <div class="ui container">
        <form class="ui form" onSubmit={handleSubmit}>
          <div class="field">
            <label>First Name</label>
            <input
               
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
