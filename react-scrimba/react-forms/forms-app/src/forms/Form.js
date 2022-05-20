import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  })
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submitForm(event) {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      >
      </input>
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
      >
      </input>
      <input
        type="text"
        placeholder="Email"
        onChange={handleChange}
        name="email"
      >
      </input>
      <textarea
        name="comments"
        placeholder="comments"
        onChange={handleChange}
        value={formData.comments}>
      </textarea>
      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        onChange={handleChange}
        checked={formData.isFriendly}
      >
      </input>
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          onChange={handleChange}
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          onChange={handleChange}
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          onChange={handleChange}
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <label htmlFor="favColor">What is your Favourite Color</label>
      <select
        id="favColor"
        name="favColor"
        onChange={handleChange}
      >
        <option value="">--Choose--</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default Form;
