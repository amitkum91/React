import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Courses from './Components/courses';
import Car from './Components/state';
import Update from './Components/lifecycleUpdate';
import MyForm from './Components/myForm';
import Goal from './Components/conditional';
import Calculator from './Components/lift';
import Form from './Components/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <h1 id="item1">Web Technologies</h1>
console.log(element)

// root.render(
//   <React.StrictMode>
//     <element />
//   </React.StrictMode>
// );

function CourseItems() {
  const courses = ["Web Technologies", "Java", "C++"]
  return courses.map((course) => <li key={course}>{course}</li>)
}

export default CourseItems;
root.render(<CourseItems/>)

// const Litem1 = React.createElement("h1", { id: "listitem-0" }, "Web Technologies");
// ReactDOM.render(Litem1, document.getElementById("root"));

//const element = <h1 id="item1">Web Technologies</h1>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//root.render(element, document.getElementById("root"))
reportWebVitals();
