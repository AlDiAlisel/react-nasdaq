import React,{useState, useEffect} from 'react';
import{Container, Row, Col,Spinner} from 'react-bootstrap';
import './App.css';
import Lista from '../Lista/Lista';
import Search from '../Search/Search';
import Preferiti from '../Preferiti/Preferiti';
import axios from 'axios';


function App(props) {
const params = '36c22294ca7508bb5a85f3cd0f5567bd';
const [valoreApi, setValoreApi]=useState('');
const [nome, setNome] = useState([{a : 'a'}]);
const[load, setLoad] =useState(false);
const[preferiti, setPreferiti]= useState([{}]);
const[memPreferiti,setMemPreferiti]=useState([]);
var myMemo =[];

function passaVal(valore){
console.log(valore);
setValoreApi(valore);
}
function  addPreferiti (x,y,z){
  if(z === 'NASDAQ'){
  setPreferiti([x,y]);
  pushMem(x,y);
  }else{alert(' azione Fuori dal mercato Nasdaq')}
}
function pushMem (memo,mem){
  const newmemPreferiti = memPreferiti.slice();
  newmemPreferiti.push([memo, mem])
  setMemPreferiti(newmemPreferiti);
}
function removePreferiti(id){
  document.getElementById(id).remove();
}
useEffect(()=>{
  if(valoreApi !== ''){
    setLoad(true);
  axios.get(`http://api.marketstack.com/v1/tickers?access_key=${params}&search=${valoreApi}`)
  .then(response =>{
    const azione =response.data;
    console.log(azione);
    setNome([...azione.data]);
    console.log(nome);
  }, error => {
    console.log(error);
    setLoad(false);
   });
  console.log('miseriaccia');
  setLoad(false);
  }
},[valoreApi]);









  return (
    <div className="App">
      <header className="App-header">Nasdaq App, By Alessio Farroni
      </header>
      <body className= 'App-body'>
        <Container >
          <Row >
            <Col xs={12} md={4} lg={4} >
              <Search passaVal={passaVal} />
              <Lista nome={nome} addPreferiti={addPreferiti} />
              { load && <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
              </Spinner>}
            </Col>
            <Col xs={12} md={8} lg={8}>
              <Preferiti preferiti={preferiti} memPreferiti={memPreferiti} removePreferiti={removePreferiti} />
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
