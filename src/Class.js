import React from "react";

export default class Class extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      priority: null,
      todos: []
    };
  }

  componentDidMount() {
    this.setState({
      todos: [
        {
          name: "make money",
          priority: 7
        },
        {
          name: "git gud",
          priority: 10
        }
      ]
    });
  }

  handleItemValues = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddItem = (name, priority) => {
    console.log("hit addItem", name, priority);
    const { todos } = this.state;
    this.setState({
      todos: [...todos, { name, priority }]
    });
  };

  render() {
    const { todos, name, priority } = this.state;
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
          <input name="name" onChange={(e) => this.handleItemValues(e)} />
          <input
            name="priority"
            onChange={(e) => this.handleItemValues(e)}
            type="number"
          />
          <button onClick={() => this.handleAddItem(name, priority)}>
            Add Item
          </button>
        </section>
      </div>
    );
  }
}
