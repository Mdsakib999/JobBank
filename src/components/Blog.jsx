import React from 'react';

const Blog = () => {
    return (
        <div className='w-[85%] mx-auto'>

            <div className='mt-20 bg-cyan-100 hover:bg-cyan-50 p-7 rounded-md'>
                <h1 className='bg-white p-3 rounded-md font-semibold text-2xl'>Q-1: When should you use context API?</h1>
                <p className='bg-white p-3 mt-3 rounded-md'>Ans: The Context API in React is a feature that allows you to share state between components without having to pass the state down through props. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Context API is a built-in React tool that does not influence the final bundle size, and is integrated by design. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.  Here are some situations where using the Context API can be useful:
                If we need to keep track of the authentication status of a user, we can use the Context API to make the user's authentication status available to all components that need it.
                If we want to apply a theme to our entire application, we can use the Context API to pass the theme information down to all components. 
                If we have data that needs to be shared across multiple components, we can use the Context API to manage that data in a central location.
                </p>
            </div>

            <div className='mt-10 bg-cyan-100 hover:bg-cyan-50 p-7 rounded-md'>
                <h1 className='bg-white p-3 rounded-md font-semibold text-2xl'>Q-2: What is a custom hook?</h1>
                <p className='bg-white p-3 mt-3 rounded-md'>Ans: In React, a custom hook is a JavaScript function that starts with the word "use" and follows the rules of Hooks. Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Custom hooks allow you to abstract complex logic into reusable functions that can be used across multiple components in your React application. By convention, custom hooks are usually defined in their own files and exported as functions. They can use other hooks and also accept parameters to customize their behavior.</p>
            </div>
            <div className='mt-10 bg-cyan-100 hover:bg-cyan-50 p-7 rounded-md'>
                <h1 className='bg-white p-3 rounded-md font-semibold text-2xl'>Q-3: What is useRef?</h1>
                <p className='bg-white p-3 mt-3 rounded-md'>Ans: useRef is a hook provided by React that allows you to create a reference to an element or a value, and update it over time. useRef()  accepts one argument as the initial value and returns a reference . A reference is an object having a special property current. It returns a mutable ref object that can be used to store a value that persists between renders. Updating a reference doesn't trigger a component re-rendering.
                reference.current accesses the reference value, and reference.current = newValue updates the reference value. 
                The value of the reference is persisted between component re-renderings. 
                This hook can be used to reference elements in the DOM, like input fields, and to access their properties and methods. we can also use it to store values that don't need to trigger a re-render when they change, like a timer or a scroll position.</p>
            </div>
            <div className='mt-10 bg-cyan-100 hover:bg-cyan-50 p-7 rounded-md'>
                <h1 className='bg-white p-3 rounded-md font-semibold text-2xl'>Q-4: What is useMemo?</h1>
                <p className='bg-white p-3 mt-3 rounded-md'>Ans: React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. It takes a function and an array of dependencies as arguments, and returns a memoized value. The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter. Think of memoization as caching a value so that it does not need to be recalculated. The React useMemo Hook returns a memoized value. The useMemo Hook only runs when one of its dependencies update. This can improve performance.
                This can be useful for optimizing the performance of your React components, especially if you have expensive calculations that don't need to be re-run on every render.</p>
            </div>
            
            
        </div>
    );
};

export default Blog;