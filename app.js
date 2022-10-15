const Person = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation)
  ]);
}

const App = () => {
  // in place of the JSX code
  return React.createElement('div', {}, [
    React.createElement('h1', {class: 'title'}, "React IS rendered"),
    React.createElement(Person, {name: 'Olya', occupation: 'software engineer'}, null),
    React.createElement(Person, {name: 'Ivan', occupation: 'doctor'}, null),
    React.createElement(Person, {name: 'Petr', occupation: 'manager'}, null)
  ])
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
