import{useState} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import Stock from '../Stock/Stock';
import Grafico from '../Grafico/Grafico';





function Preferiti(props){
const{preferiti,memPreferiti, removePreferiti}= props;




    return(
      <Container>
          <Row>
         <Col>
         <Stock preferiti={preferiti} memPreferiti={memPreferiti} removePreferiti={removePreferiti}/>
         </Col>
         </Row>
         </Container>
        
    );
}


export default Preferiti;