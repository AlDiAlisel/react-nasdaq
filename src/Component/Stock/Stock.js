import{useEffect, useState, useRef} from 'react';
import {Card,ListGroup,Button, ToggleButton, Row,Col} from 'react-bootstrap';
import axios from 'axios';
import Grafico from '../Grafico/Grafico';


function Stock(props){
const{preferiti,memPreferiti, removePreferiti}=props;
const[swi, setSwi] =useState({});
const[id, setId] =useState('');
const [count, setCount] = useState([0]);
const [delay, setDelay] = useState(1000);
const [isRunning, setIsRunning] = useState({});
const[numTrue, setNumTrue] = useState(0);
const[dati, setDati]=useState({prova:{high:'5',low:'7',last:'9'}});
const[datiGrafico,setDatiGrafico] =useState({provaGrafico:{high:'5',low:'7',last:'9'}});


useInterval(() => {
  // Your custom logic here
  for (const [key, value] of Object.entries(isRunning)) {
    if(value){
      axios.get(`http://api.marketstack.com/v1/tickers/${key}/intraday?access_key=36c22294ca7508bb5a85f3cd0f5567bd&interval=1min`)
      .then(response =>{
        const azione =response.data;
        console.log('ho chiamato le api' + key)
        setDati({...dati, [key]: {low :azione.data.intraday[0].low, high:azione.data.intraday[0].high, last:azione.data.intraday[0].last }})
        setDatiGrafico({...datiGrafico,[key]:azione.data.intraday });
        console.log(azione);
       // mostraDati(key)
      }, error => {
        console.log(error);
       });
  }
  
}
setCount(count + 1);
}, numTrue> 0? delay:null);

function handleDelayChange(e) {
    
  setDelay(Number(e.target.value));
}

function passId(e){

removePreferiti(e);
}
const changeCheck = (e)=>{
    setSwi({[e.target.name] : false})
    let nome = e.target.name;
    let checked = e.target.checked;
    //let checked = swi;
    setSwi({[nome]:checked});
    //setId(index + 100);
    // new 
    setIsRunning({...isRunning,[e.target.name]:false});
    setIsRunning({...isRunning,[nome]:checked});
    let a = isRunning[nome];
    setNumTrue((!a? prevNumTrue => prevNumTrue+1:  prevNumTrue =>prevNumTrue-1));
    
  }   

  

const importMemo = 

    memPreferiti.map((x,index) =>  <ListGroup.Item id={index} variant="light" action style={{marginTop:'5px'}} >
        <Button variant="dark" size='sm' onClick={() => passId(index)} >-</Button><Row><Col>{x}</Col></Row><Row><Col>Last {Object.keys(dati).map((d, key) =>  dati[d] !== undefined && (d===x[1])?  dati[d].last : '' )}</Col><Col>High {Object.keys(dati).map((d, key) =>  dati[d] !== undefined && (d===x[1])?  dati[d].high : '' )}</Col><Col>Low {Object.keys(dati).map((d, key) =>  dati[d] !== undefined && (d===x[1])?  dati[d].low : '' )}</Col></Row><Row><input  type="checkbox"
          variant="secondary" name={x[1]} checked ={swi.index} onChange={changeCheck} />Real Time</Row> <Grafico dati={datiGrafico} titolo={x[1]} /> </ListGroup.Item> )
         
          






    return (
        
        <Card>
            <ListGroup>
              {importMemo}
            </ListGroup>
            <input value={delay} style={{display:memPreferiti.length ==0? 'none':'inline'}}  name='ciao' onChange={handleDelayChange}  />
        </Card>
      
    );
    function useInterval(callback, delay) {
      const savedCallback = useRef();
    
      // Remember the latest function.
      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);
    
      // Set up the interval.
      useEffect(() => {
        function tick() {
          savedCallback.current();
        }
        if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [delay]);
}
}
export default Stock;

