
import{useState} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';


function NomeStock (props){
    const {nome, addPreferiti}= props;
    const[display, setDisplay]= useState()
    


    function passData (nome,symbol,acronim){
     addPreferiti(nome,symbol,acronim);
    }

   

   

const creaStock=  nome.map(x => nome[0].a == 'a'?  console.log('') : x.stock_exchange.acronym === 'NASDAQ' ? <ListGroup.Item key={x.symbol} variant="light" action style={{marginTop:'5px'}} ><Button variant="dark" size='sm' onClick={() => passData(x.name, x.symbol,x.stock_exchange.acronym)} >+</Button> {x.name} {x.symbol} </ListGroup.Item> : console.log('') );

   
   




    return(
<Card  border="primary" style={{visibility: creaStock[0]=== undefined? 'hidden': 'visible', height:'180px', overflowY:'scroll'}} >
    <ListGroup  >
{creaStock}
    </ListGroup>
</Card>
    );
}

export default NomeStock;