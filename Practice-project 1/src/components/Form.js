import React, { useState } from "react";

const Form = (props) => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // let a = 
    // console.log("in form ", typeof(a))
    let a = data.name.length;
    if (a < 3) {
      alert("Name must have at least 3 characters");
      return;
    } else if( +data.age <=0 ){
        alert("Age must be greater than 0");
        return;
    }else{
      const personData = {
        ...data,
        id: Math.random().toString(),
      };
      props.dataHandler(personData);
    }
    setData({
      name: "",
      age: "",
    });
  };

  return (
    <div style={{ width: "300px", margin: "60px auto" }}>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          value={data.name}
        />
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          onChange={(e) => handleChange(e)}
          value={data.age}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
