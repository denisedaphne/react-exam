Student: BALANE, Daphne P.

"What is useEffect? What is useEffect used for?"

The "useEffect" is a hook in React, a JavaScript library for building user interfaces. It allows us to perform side effects in functional components. The side effects are actions that occur outside the scope of the component's render cycle, such as data fetching, DOM manipulation, subscriptions, and etc.

The "useEffect" hook is used to manage these side effects by providing a way to run code after the component has rendered and potentially after subsequent re-renders. It takes two cases:

1. The first case is a function that contains the code we want to run as a side effect.
2. The second case is an array of dependencies, in which these dependencies determine when the effect should be run. If any of the dependencies change between renders, then the effect will be re-run.
