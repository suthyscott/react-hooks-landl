What are hooks? React hooks are methods that can be imported into functional components to allow use of features like state management and similar functionality to lifecycle methods. The two main React hooks are useState and useEffect.

Why are hooks different than typical methods? Because hooks are built into React, allowing you to re-render the component and otherwise mimic the behavior of a class component with state.

Why would you use hooks rather than classical React? The main benefit is ease of use and efficiency. Hooks are simpler to write, eliminating the need to deal with the 'this' keyword and constructor functions. Hooks also generally decrease the number of lines of code in a file noticeably. Also, the React devs have predicted performance enhancements for functional components in the future. Also they are just better.

How state is handled in class components.
What does this.setState do? It triggers a re-render, replacing the old state object and telling the component to update the DOM.
The set methods from useState do the same thing, because it is the same code behind the scenes.
We no longer have to bind things with hooks, because the component is no longer a class.
State variables are just variables, not properties on an object.

Review of The Component Lifecycle:

- constructor
- render
- componentDidMount
  A change to props or state will trigger an update:
  - render
  - componentDidUpdate
- componentWillUnmount

Every useEffect fires once upon the initial render. After that, a useEffect will only fire if an item in its dependency array is updated. It will fire every time any item in its dependency array is updated.

So it can be used as componentDidMount by leaving the dependency array empty. It can be used in place of componentDidUpdate by specifying what items to watch for in the dependency array.
