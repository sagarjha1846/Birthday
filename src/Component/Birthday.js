import React from "react";
import "./Birthday.css";
function Birthday({
  setBirthdayList,
  birthdayList,
  name,
  image,
  message,
  date,

  key,
  id,
}) {
  return (
    <div className="birthday__card">
      <div className=" birthday__image">
        <img src={image} />

        <div className="birthday__body">
          <h3>{name}</h3>
          <span>{date}</span>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Birthday;
