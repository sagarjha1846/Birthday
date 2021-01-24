import React from "react";
import BirthDayList from "./BirthDayList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Card.css";

import Form from "./Form";
function Card({ setBirthday, setBirthdayList, birthdayList, birthday }) {
  return (
    <div className="card">
      <Router>
        <Route path="/" exact>
          <BirthDayList
            setBirthdayList={setBirthdayList}
            birthdayList={birthdayList}
          />
        </Route>

        <Route path="/birth">
          <Form
            setBirthday={setBirthday}
            birthday={birthday}
            setBirthdayList={setBirthdayList}
            birthdayList={birthdayList}
          />
        </Route>
      </Router>
    </div>
  );
}

export default Card;
