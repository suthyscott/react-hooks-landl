What are hooks? React hooks are methods that can be imported into functional components to allow use of features like state management and similar functionality to lifecycle methods.

Why are hooks different than typical methods? Because hooks are built into React, allowing you to re-render the component and otherwise mimic the behavior of a class component with state.

Why would you use hooks rather than classical React? The main benefit is ease of use and efficiency. Hooks are simpler to write, eliminating the need to deal with the 'this' keyword and constructor functions. Hooks generally decrease the number of lines of code in a file noticeably. Also, the React devs have forecasted performance enhancements for functional components in the future.

How state is handled in class components.

We use setState because it triggers a re-render, thus showing the updates.

Lifecycle:

- constructor
- render
- componentDidMount
  A change to props or state will trigger an update:
- render
- componentDidUpdate

- componentWillUnmount

Every useEffect fires once upon the initial render. After that, a useEffect will only fire if an item in its dependency array is updated. It will fire every time any item in its dependency array is updated.

So it can be used as componentDidMount by leaving the dependency array empty. It can be used in place of componentDidUpdate by specifying what items to watch for in the dependency array.
