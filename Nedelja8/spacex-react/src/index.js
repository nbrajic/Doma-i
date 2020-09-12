import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getPastLaunches } from './service';
import LaunchList from './components/LaunchList';
import SelectBox from './components/SelectBox';
import Header from './components/Header';


const App = () => {

  const [launchList, setlaunchList] = useState([]);

  useEffect(() => {
    getPastLaunches().then(res => {
      setlaunchList(res.data)
    })
  },[]);

  return (
    <>
     <Header />
     <SelectBox setlaunchList={setlaunchList}/>
     <LaunchList arr={launchList}/>
    </>
  )

};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
