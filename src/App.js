import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./Component/Card";

function App() {
  useEffect(() => {
    getLocalTodos();
  }, []);

  const [birthday, setBirthday] = useState({});
  const [birthdayList, setBirthdayList] = useState([]);

  useEffect(() => {
    saveLocalTodos();
  }, [birthdayList]);

  const saveLocalTodos = () => {
    localStorage.setItem("birthdayList", JSON.stringify(birthdayList));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("birthdayList") === "null") {
      localStorage.setItem("birthdayList", JSON.stringify([]));
    } else {
      const local = JSON.parse(
        localStorage.getItem("birthdayList", JSON.stringify("birthdayList"))
      );
      setBirthdayList(local);
    }
  };

  return (
    <div className="App">
      <Card
        setBirthday={setBirthday}
        birthday={birthday}
        birthdayList={birthdayList}
        setBirthdayList={setBirthdayList}
      />
    </div>
  );
}

export default App;
