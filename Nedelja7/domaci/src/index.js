import React from 'react'; 
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  
  let string = 'Button';
  let url = 'https://tinyurl.com/y6fth247';
  let description = 'Emoji photo';

  return (
    <>
      <h1>Form:</h1>
      <Form string = {string}/>
      <h1>Card:</h1>
      <Card url = {url} description = {description}/>
    </>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);