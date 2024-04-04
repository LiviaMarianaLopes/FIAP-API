import "./styles.css"

const Key = (props: any) => {
   return(
    <>
    <div className="card">
        <label>{props.campo}</label>
        <div>{props.valor}</div>
        </div>
    </>
   ) 
}
export default Key;