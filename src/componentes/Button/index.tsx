import "./styles.css"

const Button = (props:any) => {
    return(
    <><div className="button">
        <button onClick={props.onClick}>{props.text}</button>
        </div>
    </>
    )
}
export default Button;