import Key from "../key-component";
import "./styles.css"
import { person } from "./interfaces";

const Person = (props:person) => {
return(
    <div className= {props.status}> 
           <Key campo="Nome:" valor={props.name}/>
           <Key campo ="Endereço:" valor={props.address}/>
           <Key campo="Telefone:" valor={props.phone}/>
           <Key campo="Email:" valor={props.email}/>
    </div>

    )
}
export default Person;