import "./App.css";
import Accordion from "./Accordion";

const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI in response to changes in application state.",
  },
  {
    id: 2,
    question: "How does React differ from other JavaScript frameworks?",
    answer:
      "React focuses on building user interfaces and is known for its component-based architecture. It emphasizes a declarative approach to describe the UI, making it easier to understand and debug. Unlike some frameworks, React is not a full-fledged MVC framework but can be used with other libraries or frameworks as needed.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML elements and components in a syntax similar to XML or HTML within your JavaScript code. JSX is then transpiled to regular JavaScript by tools like Babel before being served to the browser.",
  },
  {
    id: 4,
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a programming concept used by React to optimize the updating of the actual DOM. Instead of directly updating the entire DOM when state changes occur, React creates a virtual representation of the DOM in memory and compares it with the current state. Only the differences are then applied to the actual DOM, resulting in improved performance.",
  },
  {
    id: 5,
    question: "What are React Hooks?",
    answer:
      "React Hooks are functions introduced in React 16.8 that allow functional components to use state and lifecycle features previously only available in class components. They provide a way to use state and side-effects in functional components, making it easier to manage and share logic across components.",
  },
  {
    id: 6,
    question: "How does data flow in React?",
    answer:
      "In React, data flows in a unidirectional manner, often referred to as a one-way data binding. Data is passed down from parent components to child components via props, and if a child component needs to communicate with its parent, it can do so through callback functions. This one-way data flow helps in maintaining a clear and predictable data flow in the application.",
  },
  // {
  //   id: 7,
  //   question: "What is the role of setState() in React?",
  //   answer: "setState() is a method used in React class components to update the state of a component. When setState() is called, React schedules an update to the component and re-renders it. It is important to note that setState() is asynchronous, and React may batch multiple state updates for performance optimizations."
  // },
  // {
  //   id: 8,
  //   question: "What is a React component?",
  //   answer: "A React component is a reusable piece of code that defines a part of the user interface. Components can be either functional or class-based and can accept input data (props) and maintain internal state. They encapsulate the logic and presentation of a UI element, making it easier to manage and scale the application."
  // },
  // {
  //   id: 9,
  //   question: "What is the significance of keys in React lists?",
  //   answer: "Keys are used in React lists to provide a stable identity to elements within the list. They help React identify which items have changed, been added, or been removed. Proper use of keys ensures efficient updates and avoids unexpected behavior in components that render lists."
  // },
  // {
  //   id: 10,
  //   question: "How does React handle forms?",
  //   answer: "React provides a controlled component approach for handling forms. In a controlled component, form elements like input fields are controlled by the state of the React component. When the user interacts with the form, the state is updated, and the UI re-renders accordingly. This allows React to maintain control over the form elements and facilitates easy validation and handling of user input."
  // },
];

export default function App() {
  return (
    <div className="container">
      <Accordion data={faqs} />
    </div>
  );
}
