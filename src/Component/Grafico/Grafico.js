import {useState, useEffect} from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Area, ResponsiveContainer,Tooltip } from 'recharts';


function Grafico (props){
const{dati, titolo}=props;
const [datGrafico, setDatGrafico]=useState(undefined);





useEffect(() =>{ 
console.log(dati[titolo]);
if(dati[titolo]!= undefined){
let a = dati[titolo].reverse()
setDatGrafico(a)
}

console.log(datGrafico);
console.log('ciao');
},[dati])

    return (

        
          <ResponsiveContainer titolo={titolo} width='100%' height={300}>
          <LineChart width={350} height={120} data={datGrafico} >
          <Line connectNulls type='monotone' dataKey='last' stroke='#82ca9d' />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />   
          <XAxis dataKey='date' />{titolo}
          <YAxis type="number" domain={['dataMin', 'dataMax']}/>
          <Tooltip />  
         </LineChart> 
          </ResponsiveContainer>
        
    );
}

export default Grafico;