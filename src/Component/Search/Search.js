import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';



function Search(props){
const [valSearch, setValSearch] = useState('');
const[invioVal, setInvioVal] = useState('');
const{passaVal} = props;

function changeVal(e){
    let val = e.target.value;
    setValSearch(val);
    console.log(valSearch + ' vallSearch')
}

function sendVal (e){
e.preventDefault();
let val = valSearch;
setInvioVal(val);
console.log(invioVal + ' invioval');
passaVal(invioVal);

}
useEffect(()=>{
    setInvioVal(valSearch);
},[valSearch]);

const onFocus = (e)=>{
    e.target.blur();
}


    return (
        <div>
            <h3>Cerca</h3>
            <input type='search' onChange={changeVal} />
            <Button variant='primary' size='sm' onClick={sendVal} onFocus={onFocus}>Cerca</Button>
        </div>

    );
}


export default Search;