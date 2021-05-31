import React,{useState, useEffect} from 'react'
import './App.css';

import axios from 'axios'
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import Results from './Components/Results.js';

function App() {

  const [searchValue, setSearchValue] = useState('')
  const [submitFlag, setSubmitFlag] = useState(false)
  const [offices, setOffices] = useState([{}])
  const [show, setShow] = useState(false)

  //Officials in state
  const [governer, setGoverner] = useState({})
  const [senator1, setSenator1] = useState({})
  const [senator2, setSenator2] = useState({})
  const [rep, setRep] = useState({})

  const APIKEY = 'AIzaSyAapCvkx_g_yRcpFcYYEVYF6fGAxSMIM3s';



  useEffect(() => {
    if (submitFlag === true) {
      axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${searchValue}&includeOffices=true&key=${APIKEY}`)
        .then(res => {
          console.log(res.data.officials)
          let newArr = []
          res.data.officials.map((officials, i) => {
            newArr.push(officials)
            return newArr
          })
          console.log(newArr[0])
          setGoverner(newArr[5])
          console.log(governer)
          setShow(true)

      })
    }
  }, [submitFlag])

  return (
    <div className="App">
      <Header />
      <Body
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        submitFlag={submitFlag}
        setSubmitFlag={setSubmitFlag}
      />
      {show ? 
        <Results
          offices={offices}
          submitFlag={submitFlag}
        />
        :null
      }
      
    </div>
  );
}

export default App;
