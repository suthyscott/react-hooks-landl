import React, { useState, useEffect } from "react";
import useSWAPI from "./useSWAPI";

const Hooks = () => {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(0);
  const ship = useSWAPI();

  useEffect(() => {
    console.log("hit useEffect");
    setTodos([
      {
        name: "make money",
        priority: 7
      },
      {
        name: "git gud",
        priority: 10
      }
    ]);
  }, []);

  //   useEffect(() => {
  //     console.log("hit useEffect name");
  //   }, [name]);

  //   useEffect(() => {
  //     console.log("hit useEffect todos");
  //   }, [todos]);

  return (
    <div className="container">
      <section>
        {todos.map((item, i) => {
          return (
            <div key={i} className="item">
              <h1>{item.name}</h1>
              <p>{item.priority} </p>
            </div>
          );
        })}
      </section>

      <section className="input-container">
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input
          value={priority}
          type="number"
          onChange={(e) => setPriority(e.target.value)}
        />
        <button
          onClick={() => {
            setTodos([...todos, { name, priority }]);
            setName("");
            setPriority(0);
          }}
        >
          Add Item
        </button>
      </section>
    </div>
  );
};

export default Hooks;
