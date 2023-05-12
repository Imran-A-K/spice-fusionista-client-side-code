/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Pdf from "react-to-pdf";
import { useRef } from "react";

const Blog = () => {
  const { loading } = useContext(AuthContext);
  const ref = useRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [15, 18],
  };
  if (loading) {
    return (
      <div className="flex mt-64 justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex mb-10 mt-6 gap-44 justify-center">
        <h1 className="text-4xl text-gray-900">
          To download this page click on the generate pdf button
        </h1>
        <Pdf targetRef={ref} filename="Blog.pdf" options={options}>
          {({ toPdf }) => (
            <button
              className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-xl px-5 py-3 inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600"
              onClick={toPdf}
            >
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <div className="flex mb-10 mt-6 gap-44 justify-center">
          <h1 className="text-5xl text-gray-900">Blog</h1>
        </div>

        <div className="ml-20">
          <h2 className="text-3xl mb-3">
            Differences between uncontrolled and controlled components:
          </h2>
          <p className="text-xl mb-4">
            Ans: Controlled components are components that rely on the parent
            component that passes down the value or state information through
            props, and the parent component is responsible for handling any user
            input and updating the state. In short, controlled components are
            managed and controlled by the parent component, which handles all
            the state updates and re-renders. <br />
            On the other hand, uncontrolled components are components that
            manage their own state internally, without the need for the parent
            component to pass down the value or state information. In short,
            uncontrolled components store their own state internally using the
            React state mechanism, and they do not get any external value or
            state information from the parent component.
          </p>
          <h2 className="text-3xl mb-3">
            How to validate React props using PropTypes:
          </h2>
          <p className="text-xl mb-4">
            Ans: PropTypes is a library that provides type checking for React
            props in runtime. <br />
            For using this library first you have to install it: npm install
            prop-types <br />
            Then you have to import it in the component ---&gt; import PropTypes
            from 'prop-types';
            <br />
            Define your functional component normally with props. <br />
            Define the expected propTypes for the component by adding a
            propTypes object to the function:
            <br />
            MyComponent.propTypes = [second bracket] prop1: PropTypes.string,
            prop2: PropTypes.number.isRequired, prop3: PropTypes.func, [closing
            second bracket]
            <br /> Then you can use your component as normal and if there is any
            violation of propTypes, a warning in the console with a clear error
            message will be printed.
          </p>
          <h2 className="text-3xl mb-3">
            Difference between nodejs and express js:
          </h2>
          <p className="text-xl mb-4">
            Ans: Node.js is a JavaScript runtime environment that executes
            JavaScript outside of the web browser, while Express.js is a web
            application framework built on top of Node.js that provides a set of
            features for building web applications. Express.js just simplifies
            the process of building web applications with Node.js by providing a
            flexible and modular architecture,which makes it a popular choice
            for building web applications and APIs.
          </p>
          <h2 className="text-3xl mb-3">
            What is a custom hook, and why to create a custom hook?
          </h2>
          <p className="text-xl mb-4">
            Ans: A custom hook is a function in React which allows to reuse
            stateful logic across multiple components.They are similar to
            regular hooks, but they are created and used by developers rather
            than being provided by React.
            <br />I will create a custom hook because they can help to make the
            code more reusable, modular, and easier to maintain. They can
            extract complex logic from a component and provide a clean,
            abstracted interface for other components to use. Custom hooks can
            also help to avoid code duplication, reduce the size and complexity
            of components, and make testing easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
