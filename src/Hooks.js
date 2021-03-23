import React, { useState, useEffect } from "react";

const Hooks = () => {
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
        <input value={name} />
        <input value={priority} type="number" />
        <button onClick={() => {}}>Add Item</button>
      </section>
    </div>
  );
};

export default Hooks;
