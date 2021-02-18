import "./App.css";
import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  const [student, setStudents] = useState(data);
  return (
    <main>
      <Navbar />
      <section className="container">
        <h2>attendance list for {student.length} Students</h2>
        <div className="identity">
          <List student={student} />
        </div>
        <button onClick={() => setStudents([])}>Clear</button>
      </section>
      <div>
        <img src="../public/creation.png" alt="" />
        <p>Everybody makes mistakes</p>
      </div>
    </main>
  );
}

export default App;
