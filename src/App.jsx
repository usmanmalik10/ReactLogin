import React, { useState } from 'react';

const Abc = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setFullName((preValue) => {
      // console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert('form submitted');
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p> {fullName.email} </p>
            <p> {fullName.phone} </p>
            <input
              type="text"
              placeholder="Enter Your Name "
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name "
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input
              type="email"
              placeholder="Enter Your Email "
              name="email"
              onChange={inputEvent}
              value={fullName.email}
              autoComplete="off"
            />
            <input
              type="number"
              placeholder="Enter Your Phone Number "
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />

            <button type="submit"> Submit Me 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Abc;
