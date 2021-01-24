import React from "react";
import Birthday from "./Birthday";
import "./BirthDayList.css";
import Button from "./Button";
function BirthDayList({ setBirthdayList, birthdayList }) {
  return (
    <div className="">
      <h1>Birthday Today</h1>
      <div className="list">
        {birthdayList.map((birth) => (
          <Birthday
            birthdayList={birthdayList}
            key={birth.id}
            name={birth.name}
            message={birth.message}
            date={birth.date}
            image={birth.image}
          />
        ))}
      </div>
      <Button />
    </div>
  );
}

export default BirthDayList;
