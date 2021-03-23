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
