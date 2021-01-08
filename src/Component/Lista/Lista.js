
import NomeStock from '../NomeStock/Nomestock'



function Lista(props){
const{nome,addPreferiti}=props;






    return(
        
            <div>
                <NomeStock nome={nome} addPreferiti={addPreferiti}  />
            </div>
               

    );
}

export default Lista;