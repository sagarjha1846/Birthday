import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Form({ setBirthday, birthday, setBirthdayList, birthdayList }) {
  const HandleChange = (e) => {
    setBirthday({
      ...birthday,
      [e.target.name]: e.target.value,
    });
  };
  const AddBirthDay = (e) => {
    e.preventDefault();

    setBirthdayList([
      ...birthdayList,
      {
        name: birthday.name,
        message: birthday.message,
        date: birthday.date,
        image: birthday.image,
        id: Math.random() * 1000,
      },
    ]);
  };
  return (
    <div className="formelement">
      <form className="form">
        <div className="field">
          <h2>Add A Birthday</h2>
        </div>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Mandy"
            onChange={HandleChange}
          />
        </div>
        <div className="field">
          <label>Date</label>

          <input type="Date" name="date" onChange={HandleChange} />
        </div>

        <div className="field">
          <label>Image</label>

          <input
            type="link"
            name="image"
            onChange={HandleChange}
            accept="image/*"
          />
        </div>

        <div className="field">
          <label>Message</label>

          <textarea type="textarea" name="message" onChange={HandleChange} />
        </div>

        <div className="field">
          <button onClick={AddBirthDay}>Save</button>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Back
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
